import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Search, ShoppingBag, Menu, X, Play, Leaf, Flower2, Sun, ChevronRight } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { Button } from "@/components/ui/button";
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
    <a href="/" className="flex w-fit flex-col items-center justify-self-start leading-none text-plum">
      <Flower2 className="h-7 w-7" strokeWidth={1.5} />
      <span className="font-display text-3xl font-semibold md:text-4xl">NEER-NUT</span>
      <span className="mt-1 text-[8px] text-foreground/70">PURE • NATURAL • MITHILA</span>
    </a>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      {/* HERO */}
      <HomeHero>
        <header className="absolute inset-x-0 top-0 z-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:flex md:justify-between md:bg-cream/30 md:px-12 md:backdrop-blur-sm xl:px-24">
          <Logo />
          <nav className="hidden gap-9 text-sm font-medium lg:flex">
            {nav.map((n, i) => (
              <a key={n} href="#" className={`pb-2 ${i === 0 ? "border-b-2 border-plum" : "hover:text-plum"}`}>{n}</a>
            ))}
          </nav>
          <div className="hidden gap-4 lg:flex"><Search className="h-5 w-5" /><ShoppingBag className="h-5 w-5" /></div>
          <Button variant="ghost" size="icon" className="shrink-0 lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} aria-controls="mobile-nav">
            {open ? <X className="h-7 w-7 text-plum" /> : <Menu className="h-7 w-7 text-plum" />}
          </Button>
        </header>
        {open && (
          <div id="mobile-nav" className="absolute inset-x-4 top-24 z-20 rounded-lg bg-cream/95 p-6 shadow-xl backdrop-blur lg:hidden">
            {nav.map((n) => <a key={n} href="#" onClick={() => setOpen(false)} className="block py-2 font-medium">{n}</a>)}
          </div>
        )}
      </HomeHero>

      {/* STORY */}
      <section id="story" className="story-section relative bg-cream">
        <img src={art} alt="" aria-hidden width={576} height={1152} loading="lazy" className="story-art absolute left-0 top-0" />
        <div className="story-layout relative mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_1.3fr_auto] md:items-center">
          <div className="story-copy min-w-0">
            <p className="text-xs font-semibold tracking-[0.2em] text-plum">OUR STORY</p>
            <h2 className="mt-3 text-3xl font-semibold leading-[1.05] sm:text-4xl md:text-5xl">Rooted in<br />Mithila, Bihar</h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">In the tranquil ponds of Mithila, makhana grows — a gift of nature, nurtured by generations of farmers and a land rich in culture, tradition and wisdom.</p>
            <a href="#" className="mt-6 inline-flex items-center gap-2 border-b border-plum pb-1 text-sm font-medium text-plum">Discover Our Journey <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="story-film relative overflow-hidden rounded-lg md:rounded-none">
            <img src={story} alt="Lotus leaves with gold Madhubani patterns" width={1280} height={720} loading="lazy" className="aspect-[16/9] h-full w-full object-cover" />
            <Button variant="ghost" size="icon" aria-label="Play video" className="absolute inset-0 m-auto h-14 w-14 rounded-full border-2 border-primary-foreground text-primary-foreground transition hover:scale-110 hover:bg-plum/30 hover:text-primary-foreground"><Play className="h-6 w-6 fill-current" /></Button>
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
            <h2 className="mt-3 text-4xl font-semibold leading-[1.05] md:text-5xl">Nature's Goodness<br />in Every Bite</h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">Light, crisp and full of nutrition — our makhana is carefully selected and naturally processed to bring you the best, straight from Mithila.</p>
            <a href="#" className="mt-7 inline-flex items-center gap-2 rounded-full bg-plum px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg">View All Products <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {products.map((p) => (
              <article key={p.name} className="product-item group grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.5fr)_auto] items-center gap-3 overflow-hidden rounded-lg bg-cream/95 p-2 shadow-md transition hover:-translate-y-1 hover:shadow-xl md:block md:p-0">
                <img src={p.img} alt={p.name} width={896} height={752} loading="lazy" className="aspect-[1.5] w-full shrink-0 rounded-md object-cover md:aspect-[1.2] md:rounded-none" />
                <div className="min-w-0 flex-1 md:p-5">
                  <h3 className="font-display text-lg font-semibold leading-tight sm:text-xl md:font-sans md:text-base">{p.name}</h3>
                  <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground sm:text-xs">{p.tags.join("  |  ")}</p>
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
        <div className="absolute inset-0 bg-plum/50 md:bg-transparent" />
        <div className="relative px-5">
          <p className="text-[9px] opacity-80 md:text-[10px]">SUSTAINABLE TODAY • HEALTHY TOMORROW</p>
          <h2 className="mt-2 text-xl md:text-4xl">Supporting Farmers. Nourishing Lives.</h2>
          <a href="#" className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground px-6 py-2 text-xs transition hover:bg-primary-foreground hover:text-plum">Our Commitment <ArrowRight className="h-3 w-3" /></a>
        </div>
      </section>
    </main>
  );
}
