import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, X, Leaf, Flower2, Sun, ShieldCheck, Sprout, Heart, Activity, Sparkles, Wheat, Waves, HandHeart } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { Button } from "@/components/ui/button";
import art from "@/assets/mithila-story-refined.png";
import banner from "@/assets/banner.jpg";
import productWater from "@/assets/makhana-water-new.jpeg.asset.json";
import wellnessBg from "@/assets/wellness-bg.jpeg.asset.json";
import farming from "@/assets/pond-story.webm.asset.json";
import premium from "@/assets/makhana-leaf-product.png";
import { OrderInquiry } from "@/components/order-inquiry";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "NEER-NUT — Authentic Mithila Makhana" },
    { name: "description", content: "Discover premium natural Mithila makhana, its wetland heritage, wholesome nutrition and ethical sourcing from local farmer collectives in Bihar." },
    { property: "og:title", content: "NEER-NUT — Nature’s Pearl, Mithila’s Pride" },
    { property: "og:description", content: "Premium foxnuts from Mithila. Rooted in regional heritage, traditionally popped and sourced from local farmer collectives." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const navigation = [ ["Home", "#home"], ["Our Story", "#story"], ["Our Makhana", "#products"], ["Nutrition & Wellness", "#wellness"], ["Sustainable Sourcing", "#sourcing"], ["Order Inquiry", "#inquiry"] ];
const wellness = [
  { icon: Activity, number: "01", title: "Sustained Energy & Satiety", text: "Complex carbohydrates and dietary fiber provide sustained energy. A low glycemic index makes makhana a thoughtful addition to balanced meals and mindful snacking." },
  { icon: Heart, number: "02", title: "Cardiac & Bone Health", text: "Naturally low in sodium, with potassium and magnesium—minerals that contribute to normal blood pressure, heart function and bone health." },
  { icon: Sparkles, number: "03", title: "Anti-Aging Antioxidants", text: "Contains flavonoids such as kaempferol, antioxidants that help protect cells against oxidative stress." },
  { icon: Wheat, number: "04", title: "Digestive Friendly", text: "Naturally gluten-free and light on the stomach. A wholesome choice for fasting (Vrat), everyday snacking or post-workout recovery." },
];

function MakhanaMenuIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5"><path d="M5 6.5c-.6-1 .1-2.3 1.3-2.3h11.4c1.2 0 1.9 1.3 1.3 2.3M4.5 12c-.7-1.2.1-2.6 1.5-2.6h12c1.4 0 2.2 1.4 1.5 2.6M5 17.5c-.6-1 .1-2.3 1.3-2.3h11.4c1.2 0 1.9 1.3 1.3 2.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 5.5h.1m7.8 5.5h.1m-6 5.5h.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>;
}

function Index() {
  const [menu, setMenu] = useState<"left" | "right" | null>(null);
  return <main id="home" className="overflow-x-hidden bg-background text-foreground">
    <HomeHero>
      <header className="site-header absolute inset-x-0 top-0 z-20 grid grid-cols-[44px_minmax(0,1fr)_44px] items-center">
        <Button variant="ghost" size="icon" className="h-11 w-11 rounded-full text-plum hover:bg-cream/30" aria-label="Open navigation" aria-expanded={menu === "left"} aria-controls="homepage-menu" onClick={() => setMenu(menu === "left" ? null : "left")} title="Navigation">{menu === "left" ? <X className="h-5 w-5" /> : <MakhanaMenuIcon />}</Button>
        <a href="#home" className="header-name justify-self-center font-display font-semibold text-plum">NEER-NUT</a>
        <Button variant="ghost" size="icon" className="h-11 w-11 rounded-full text-plum hover:bg-cream/30" aria-label="Open explore menu" aria-expanded={menu === "right"} aria-controls="homepage-menu" onClick={() => setMenu(menu === "right" ? null : "right")} title="Explore">{menu === "right" ? <X className="h-5 w-5" /> : <MakhanaMenuIcon />}</Button>
      </header>
      {menu && <nav id="homepage-menu" aria-label={menu === "left" ? "Navigation" : "Explore"} className={`homepage-menu absolute z-30 rounded-lg border border-plum/15 bg-cream/95 p-5 shadow-xl backdrop-blur-sm ${menu === "left" ? "menu-left" : "menu-right"}`}>
        {navigation.map(([label, href]) => <a key={label} href={href} onClick={() => setMenu(null)} className="flex items-center justify-between gap-5 border-b border-plum/10 py-3 text-sm last:border-0 hover:text-plum">{label}<ArrowRight className="h-3.5 w-3.5" /></a>)}
      </nav>}
    </HomeHero>

    <section id="story" className="story-section relative bg-cream">
      <img src={art} alt="Red Mithila painting of lotus blossoms and ornamental fish" width={512} height={2064} loading="lazy" className="story-art absolute" />
      <div className="story-layout relative mx-auto grid max-w-7xl gap-7 md:grid-cols-[1fr_1.15fr] md:items-center">
        <div className="story-copy min-w-0">
          <p className="section-label">OUR STORY</p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.08] md:text-5xl">Born in the Wetland<br className="hidden md:block" /> Ponds of Mithila</h2>
          <blockquote className="mt-5 border-l border-plum/40 pl-4 font-display text-xl leading-snug text-plum">“Makhana is not just an agricultural crop; it is the cultural soul, pride, and heritage of the Mithila region.”</blockquote>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">The freshwater ecosystems (pokhars) of Mithila possess the ideal microclimate and mineral-rich sediment required to grow the world’s finest Gorgon nut (<i>Euryale ferox</i>). At NeerNut, we honor this legacy.</p>
        </div>
        <figure className="story-film overflow-hidden rounded-lg">
          <video src={farming.url} autoPlay muted loop playsInline preload="metadata" aria-label="Makhana pond farming footage" className="aspect-video w-full object-cover" />
        </figure>
      </div>
    </section>

    <section id="products" className="relative bg-aqua">
      <img src={productWater.url} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="page-container product-layout relative py-14 md:py-20">
        <div className="product-intro localized-haze"><p className="section-label">OUR MAKHANA</p><h2 className="mt-3 text-4xl font-semibold leading-[1.08] md:text-5xl">Nature’s Goodness<br />in Every Bite</h2><p className="mx-auto mt-5 max-w-md text-sm leading-7 text-foreground/85">Light, crisp and naturally wholesome. Carefully selected and traditionally popped, straight from Mithila.</p><a href="#wellness" className="mt-5 inline-flex items-center gap-2 border-b border-plum pb-1 text-sm text-plum">Naturally nourishing <ArrowRight className="h-4 w-4" /></a></div>
        <article className="product-display mx-auto text-center"><img src={premium} alt="Premium white Mithila makhana served on a fresh green lotus leaf" width={1024} height={1024} loading="lazy" className="product-cutout mx-auto w-full object-contain" /><div className="product-details"><div className="mb-3 flex items-center justify-center gap-2 text-plum"><Leaf className="h-4 w-4" strokeWidth={1.3} /><p className="section-label">THE MITHILA ORIGINAL</p></div><h3 className="text-3xl font-semibold md:text-4xl">Premium Makhana</h3><p className="mt-3 text-xs text-foreground/85">Pure · Natural · Traditionally popped</p><div className="mx-auto mt-5 flex max-w-sm items-center justify-center gap-5 border-y border-plum/20 py-3 text-xs text-plum"><span>Hand-harvested</span><span aria-hidden="true">·</span><span>Sun-dried</span></div><Button asChild variant="outline" className="mt-6 rounded-full border-plum/60 bg-transparent text-plum hover:bg-cream/40"><a href="#inquiry">Ask about ordering <ArrowRight /></a></Button></div></article>
      </div>
    </section>

    <section aria-label="Our promise" className="bg-cream">
      <div className="page-container py-10 md:py-14">
        <p className="mx-auto max-w-3xl text-center font-display text-2xl leading-snug md:text-3xl">100% natural, GI-tagged authentic Mithila foxnuts—hand-harvested from pristine freshwater wetlands, sun-dried, and traditionally popped to crunchy perfection.</p>
        <div className="trust-grid mt-9 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-plum/15 pt-7 md:grid-cols-4">
          {[[ShieldCheck, "Authentic Mithila Origin", "GI Certified Region"], [Sprout, "High Protein & Dietary Fiber", "Naturally wholesome"], [Leaf, "Zero Trans Fat", "Cholesterol Free · Non-GMO"], [HandHeart, "Direct from Local", "Farmer Collectives"]].map(([I, title, text]) => { const Icon = I as typeof Leaf; return <div key={title as string} className="flex flex-col items-center text-center"><Icon className="mb-3 h-6 w-6 text-plum" strokeWidth={1.3} /><p className="text-xs font-medium leading-relaxed">{title as string}</p><p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{text as string}</p></div>; })}
        </div>
      </div>
    </section>

    <section className="bg-aqua/40">
      <div className="page-container grid gap-8 py-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:py-20">
        <div><p className="section-label">AN ANCIENT CRAFT</p><h2 className="mt-3 text-3xl font-semibold md:text-4xl">From calm waters<br />to crunchy perfection.</h2></div>
        <div><p className="text-sm leading-7 text-muted-foreground">Our farmers dive deep into calm aquatic sanctuaries to gather the seeds of <i>Euryale ferox</i>. Through age-old grading, wood-fire roasting, and manual thumping, the raw seed blossoms into the crisp, snow-white superfood known as Mithila Makhana. We bring this ancient regional treasure straight to the modern pantry—unadulterated, wholesome, and ethically sourced.</p><div className="mt-7 grid grid-cols-3 gap-3 border-t border-plum/20 pt-5">{[[Waves, "Hand-harvested"], [Sun, "Traditionally roasted"], [Flower2, "Perfectly popped"]].map(([I, label]) => { const Icon = I as typeof Leaf; return <div key={label as string}><Icon className="mb-2 h-6 w-6 text-plum" strokeWidth={1.3} /><p className="text-xs leading-relaxed">{label as string}</p></div>; })}</div></div>
      </div>
    </section>

    <section id="wellness" className="wellness-section relative overflow-hidden bg-cream">
      <img src={wellnessBg.url} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="page-container relative py-14 md:py-20"><div className="wellness-heading localized-haze"><p className="section-label">NUTRITION & WELLNESS SPOTLIGHT</p><h2 className="mt-3 text-3xl font-semibold md:text-5xl">Why Nutritionists Choose Makhana</h2></div><div className="mt-10 grid gap-x-14 md:grid-cols-2">{wellness.map(({ icon: Icon, number, title, text }) => <article key={number} className="wellness-benefit border-t border-plum/20 py-7"><div className="mb-4 flex items-center justify-between text-plum"><Icon className="h-7 w-7" strokeWidth={1.2} /><span className="text-xs tabular-nums">{number}</span></div><div className="wellness-text localized-haze"><h3 className="text-2xl font-semibold">{title}</h3><p className="mt-3 max-w-lg text-sm leading-7">{text}</p></div></article>)}</div></div>
    </section>

    <section id="sourcing" className="relative bg-plum text-primary-foreground">
      <img src={banner} alt="" aria-hidden="true" width={1536} height={512} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-plum/85" />
      <div className="page-container relative grid gap-9 py-16 md:grid-cols-[1fr_1.1fr] md:gap-20 md:py-24"><div><p className="text-[10px] font-semibold">QUALITY & SUSTAINABLE SOURCING</p><h2 className="mt-4 text-4xl font-semibold leading-[1.1] md:text-5xl">Empowering the Hands that Harvest.</h2></div><div><p className="text-sm leading-7 text-primary-foreground/90">Makhana harvesting is an artisanal, labor-intensive craft performed by regional communities (Mallah). By shortening supply chains and eliminating layered middlemen, NeerNut ensures transparent market pricing for pond-growers while delivering batch-tested, clean-label foxnuts to your door.</p><div className="mt-7 flex items-center gap-3 border-t border-primary-foreground/25 pt-5"><HandHeart className="h-8 w-8 shrink-0" strokeWidth={1.2} /><p className="font-display text-xl">Supporting Farmers. Nourishing Lives.</p></div></div></div>
    </section>
    <OrderInquiry />
    <footer className="page-container flex flex-wrap items-center justify-between gap-4 py-7"><a href="#home" className="font-display text-2xl font-semibold text-plum">NEER-NUT</a><p className="text-[10px] text-muted-foreground">PURE · NATURAL · MITHILA</p><a href="#home" className="text-xs text-plum">Back to top ↑</a></footer>
  </main>;
}
