import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowDown, Search, ShoppingBag, Menu, X, Play, Leaf, Flower2, Sun, ChevronRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import story from "@/assets/story.jpg";
import art from "@/assets/madhubani.png";
import banner from "@/assets/banner.jpg";
import water from "@/assets/water.jpg";
import p1 from "@/assets/p-premium.jpg";
import p2 from "@/assets/p-roasted.jpg";
import p3 from "@/assets/p-flavoured.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEER-NUT — Nature's Pearl, Mithila's Pride" },
      { name: "description", content: "Premium makhana grown in the pure ponds of Darbhanga, Bihar. Pure, natural, from Mithila." },
      { property: "og:title", content: "NEER-NUT — Premium Makhana from Mithila" },
      { property: "og:description", content: "Premium makhana from the ponds of Darbhanga, Bihar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = ["Home", "About", "Our Makhana", "Sustainability", "Bulk Enquiry", "Contact"];
const products = [
  { img: p1, name: "Premium Makhana", tags: ["Pure", "Natural", "Nutritious"] },
  { img: p2, name: "Roasted Makhana", tags: ["Crunchy", "Flavorful", "Healthy"] },
  { img: p3, name: "Flavoured Makhana", tags: ["Tasty", "Wholesome", "Loved"] },
];

function Logo() {
  return (
    <a href="/" className="flex flex-col items-center leading-none text-plum">
      <Flower2 className="h-7 w-7" strokeWidth={1.5} />
      <span className="font-display text-3xl font-semibold tracking-[0.12em] md:text-4xl">NEER-NUT</span>
      <span className="mt-1 text-[9px] tracking-[0.3em] text-foreground/70">PURE • NATURAL • MITHILA</span>
    </a>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      {/* HERO */}
      <section className="relative min-h-[560px] md:min-h-[640px]">
        <img src={hero} alt="Makhana in a lotus leaf bowl floating on a Mithila pond" width={1920} height={912} className="absolute inset-0 h-full w-full object-cover object-[70%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/80 via-cream/30 to-transparent" />
        <header className="relative z-10 flex items-center justify-between px-6 py-4 md:bg-cream/30 md:px-24 md:backdrop-blur-sm">
          <Logo />
          <nav className="hidden gap-9 text-sm font-medium lg:flex">
            {nav.map((n, i) => (
              <a key={n} href="#" className={`pb-2 ${i === 0 ? "border-b-2 border-plum" : "hover:text-plum"}`}>{n}</a>
            ))}
          </nav>
          <div className="hidden gap-4 lg:flex"><Search className="h-5 w-5" /><ShoppingBag className="h-5 w-5" /></div>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-7 w-7 text-primary-foreground" /> : <Menu className="h-7 w-7 text-primary-foreground" />}
          </button>
        </header>
        {open && (
          <div className="absolute inset-x-4 top-24 z-20 rounded-2xl bg-cream/95 p-6 shadow-xl backdrop-blur lg:hidden">
            {nav.map((n) => <a key={n} href="#" className="block py-2 font-medium">{n}</a>)}
          </div>
        )}
        <div className="relative z-10 max-w-xl px-6 pt-8 pb-24 md:px-24 md:pt-20">
          <p className="animate-rise text-xs font-semibold tracking-[0.2em]">FROM THE PONDS OF MITHILA</p>
          <h1 className="animate-rise mt-4 text-5xl font-semibold leading-[1.02] md:text-7xl">Nature's Pearl,<br />Mithila's Pride</h1>
          <p className="animate-rise mt-6 max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">Premium makhana, grown in the pure waters of Bihar, rooted in tradition, crafted for a healthier tomorrow.</p>
          <a href="#products" className="animate-rise mt-8 inline-flex items-center gap-2 rounded-full bg-plum px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-lg transition hover:-translate-y-0.5">Explore Our Makhana <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="absolute right-12 top-1/2 z-10 hidden flex-col items-center gap-2 text-xs font-semibold text-primary-foreground md:flex">01<span className="h-12 w-px bg-primary-foreground" />03</div>
        <div className="absolute bottom-8 left-6 z-10 flex items-center gap-3 text-xs md:hidden">01 / 03 <span className="h-0.5 w-9 bg-foreground" /><span className="h-0.5 w-9 bg-foreground/30" /></div>
        <div className="absolute bottom-6 right-6 z-10 grid h-14 w-14 place-items-center rounded-full border border-primary-foreground text-primary-foreground md:hidden"><ArrowDown className="h-5 w-5" /></div>
      </section>

      {/* STORY */}
      <section className="relative -mt-6 rounded-t-[2rem] bg-cream md:mt-0 md:rounded-none">
        <img src={art} alt="" aria-hidden width={576} height={1152} loading="lazy" className="absolute left-0 top-0 h-[420px] w-auto opacity-80 md:h-full" />
        <div className="relative mx-auto grid max-w-7xl gap-8 py-12 pl-36 pr-6 md:grid-cols-[1fr_1.3fr_auto] md:items-center md:py-8 md:pl-40">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-plum">OUR STORY</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">Rooted in<br />Mithila, Bihar</h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">In the tranquil ponds of Mithila, makhana grows — a gift of nature, nurtured by generations of farmers and a land rich in culture, tradition and wisdom.</p>
            <a href="#" className="mt-6 inline-flex items-center gap-2 border-b border-plum pb-1 text-sm font-medium text-plum">Discover Our Journey <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="relative -ml-24 overflow-hidden rounded-2xl md:ml-0 md:rounded-none">
            <img src={story} alt="Lotus leaves with gold Madhubani patterns" width={1280} height={720} loading="lazy" className="aspect-[16/9] h-full w-full object-cover" />
            <button aria-label="Play video" className="absolute inset-0 m-auto grid h-16 w-16 place-items-center rounded-full border-2 border-primary-foreground text-primary-foreground transition hover:scale-110"><Play className="h-6 w-6 fill-current" /></button>
          </div>
          <ul className="hidden space-y-8 border-l border-plum/40 pl-8 text-sm md:block">
            {[[Leaf, "Pure Waters"], [Flower2, "Traditional Farming"], [Sun, "Superior Quality"]].map(([I, t]) => {
              const Icon = I as typeof Leaf;
              return <li key={t as string} className="w-24"><Icon className="mb-2 h-7 w-7" strokeWidth={1.3} />{t as string}</li>;
            })}
          </ul>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="relative bg-aqua bg-cover bg-center" style={{ backgroundImage: `url(${water})` }}>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1fr_2fr] md:items-center md:px-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em]">OUR MAKHANA</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">Nature's Goodness<br />in Every Bite</h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">Light, crisp and full of nutrition — our makhana is carefully selected and naturally processed to bring you the best, straight from Mithila.</p>
            <a href="#" className="mt-7 inline-flex items-center gap-2 rounded-full bg-plum px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg">View All Products <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {products.map((p) => (
              <article key={p.name} className="group flex items-center gap-4 overflow-hidden rounded-2xl bg-cream/95 p-2 shadow-md transition hover:-translate-y-1 hover:shadow-xl md:block md:p-0">
                <img src={p.img} alt={p.name} width={896} height={752} loading="lazy" className="h-24 w-40 shrink-0 rounded-xl object-cover md:h-auto md:w-full md:rounded-none md:rounded-t-[5rem]" />
                <div className="min-w-0 flex-1 md:p-5">
                  <h3 className="font-display text-xl font-semibold md:font-sans md:text-base">{p.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{p.tags.join("  |  ")}</p>
                  <a href="#" className="mt-3 inline-flex items-center gap-2 text-xs font-medium">Know More <ArrowRight className="h-3 w-3" /></a>
                </div>
                <ChevronRight className="mr-2 h-5 w-5 shrink-0 text-muted-foreground md:hidden" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="relative bg-plum bg-cover bg-center py-10 text-center text-primary-foreground" style={{ backgroundImage: `url(${banner})` }}>
        <p className="text-[10px] tracking-[0.25em] opacity-70">SUSTAINABLE TODAY • HEALTHY TOMORROW</p>
        <h2 className="mt-2 px-6 text-2xl md:text-4xl">Supporting Farmers. Nourishing Lives.</h2>
        <a href="#" className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground px-6 py-2 text-xs transition hover:bg-primary-foreground hover:text-plum">Our Commitment <ArrowRight className="h-3 w-3" /></a>
      </section>
    </main>
  );
}
