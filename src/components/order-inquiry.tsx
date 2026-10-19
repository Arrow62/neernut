import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { inquirySchema } from "@/lib/inquiry-schema";
import { submitInquiry } from "@/lib/inquiry.functions";

export function OrderInquiry() {
  const send = useServerFn(submitInquiry);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = new FormData(event.currentTarget);
    const result = inquirySchema.safeParse({ product: "Premium Makhana", name: form.get("name"), email: form.get("email"), phone: form.get("phone"), quantity: form.get("quantity"), message: form.get("message") });
    if (!result.success) { setError(result.error.issues[0]?.message ?? "Please check your details."); return; }
    setError(""); setStatus("sending");
    try { await send({ data: result.data }); setStatus("sent"); }
    catch (e) { setError(e instanceof Error ? e.message : "Your inquiry could not be saved. Please try again."); setStatus("idle"); }
  }
  return <section id="inquiry" className="inquiry-section bg-cream">
    <div className="page-container grid gap-9 py-14 md:grid-cols-2 md:gap-20 md:py-20">
      <div><p className="section-label">ORDER INQUIRY</p><h2 className="mt-3 text-4xl font-semibold md:text-5xl">A little taste<br />of Mithila.</h2><p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">Interested in Premium Makhana? Share your preferred quantity and contact details.</p><p className="mt-6 flex items-center gap-2 text-sm text-plum"><CheckCircle2 className="h-4 w-4" />Premium Makhana</p></div>
      {status === "sent" ? <div role="status" className="self-center border-y border-plum/20 py-10"><CheckCircle2 className="mb-4 h-8 w-8 text-plum" /><h3 className="text-3xl">Inquiry received.</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">Your request for Premium Makhana has been saved. This is an inquiry, not a confirmed order.</p><Button variant="outline" onClick={() => setStatus("idle")} className="mt-6">Another inquiry <ArrowRight /></Button></div> :
      <form onSubmit={submit} className="grid grid-cols-2 gap-5">
        <label className="col-span-2 text-xs font-medium">Full name<Input name="name" autoComplete="name" required maxLength={100} className="mt-2" /></label>
        <label className="col-span-2 text-xs font-medium sm:col-span-1">Email<Input name="email" type="email" autoComplete="email" required maxLength={255} className="mt-2" /></label>
        <label className="col-span-2 text-xs font-medium sm:col-span-1">Phone (optional)<Input name="phone" type="tel" autoComplete="tel" maxLength={25} className="mt-2" /></label>
        <label className="col-span-2 text-xs font-medium">Preferred quantity<Input name="quantity" placeholder="e.g. 500 g or 5 kg" required maxLength={100} className="mt-2" /></label>
        <label className="col-span-2 text-xs font-medium">Message (optional)<Textarea name="message" rows={3} maxLength={2000} className="mt-2" /></label>
        {error && <p role="alert" className="col-span-2 text-sm text-destructive">{error}</p>}
        <Button type="submit" disabled={status === "sending"} className="col-span-2 justify-self-start rounded-full px-6">{status === "sending" ? <><Loader2 className="animate-spin" />Sending…</> : <>Send inquiry <ArrowRight /></>}</Button>
      </form>}
    </div>
  </section>;
}