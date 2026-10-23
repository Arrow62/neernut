import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, X, Leaf, ShieldCheck, Sprout, Heart, Activity, Sparkles, Wheat, HandHeart } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { Button } from "@/components/ui/button";
import art from "@/assets/mithila-story-refined.png";
import banner from "@/assets/banner.jpg";
import productBg from "@/assets/products-bg-v2.jpg";
import wellnessBg from "@/assets/wellness-bg-v2.jpg";
import { useSiteMotion } from "@/hooks/use-site-motion";
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

const navigation = [ ["Home", "#home"], ["Our Story", "#story"], ["Pond to Palm", "#journey"], ["Our Makhana", "#products"], ["Nutrition & Wellness", "#wellness"], ["Sustainable Sourcing", "#sourcing"], ["Order Inquiry", "#inquiry"] ];
const journey = [
  ["01", "Sown in the pokhar", "Seeds rest on the muddy bed of shallow ponds; by spring, broad floating leaves cover the water."],
  ["02", "Dived & gathered", "From August to October, skilled divers collect the fallen seeds from the pond floor by hand."],
  ["03", "Washed & sun-dried", "Seeds are cleaned, sieved and dried under the Bihar sun, then graded by size."],
  ["04", "Roasted & popped", "Roasted over wood fire and struck with a wooden mallet, the hard shell cracks and a white pearl pops out."],
  ["05", "Sorted & packed", "Pops are hand-sorted for size and colour, then sealed fresh."],
  ["06", "To your hand", "From a Darbhanga pond straight to your pantry—pure, light and crunchy."],
];
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
  useSiteMotion();
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

    <section id="story" className="story-v4 relative overflow-hidden bg-cream">
      <img src={art} alt="Red Mithila painting of lotus blossoms and ornamental fish" width={512} height={2064} loading="lazy" className="story-art-v4" />
      <div className="story-v4-grid page-container relative">
        <div data-reveal className="story-copy-v4">
          <p className="section-label">OUR STORY · DARBHANGA, BIHAR</p>
          <h2>Born in the Wetland<br />Ponds of Mithila</h2>
          <blockquote>“Makhana is not just a crop; it is the cultural soul, pride and heritage of Mithila.”</blockquote>
          <p>In the pokhars of Darbhanga and Madhubani, the Gorgon nut (<i>Euryale ferox</i>) grows beneath giant, thorny floating leaves. Mithila’s mineral-rich pond beds and warm monsoon climate make it the heartland of makhana—most of India’s harvest comes from these wetlands, and Mithila Makhana carries its own GI tag.</p>
          <dl className="story-stats"><div><dt>GI</dt><dd>Tagged Mithila Makhana</dd></div><div><dt>Aug–Oct</dt><dd>Harvest season</dd></div><div><dt>100%</dt><dd>Hand-harvested</dd></div></dl>
        </div>
        <figure data-reveal className="story-film-v4"><div className="story-film-frame"><video src={farming.url} autoPlay muted loop playsInline preload="metadata" aria-label="Lotus pond footage" /></div><figcaption>The calm waters where every seed begins.</figcaption></figure>
      </div>
    </section>

    <section id="journey" className="journey relative overflow-hidden">
      <div className="page-container relative">
        <div data-reveal className="journey-head"><p className="section-label">FROM A DARBHANGA POND TO YOUR HAND</p><h2>The Journey of a Pearl</h2><p>Every crisp makhana takes months of patient, skilled work by Mithila’s pond families before it reaches your bowl.</p></div>
        <ol className="journey-steps">{journey.map(([n, title, text]) => <li key={n} data-reveal className="journey-step"><span className="journey-n">{n}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
      </div>
    </section>

    <section id="products" className="products-v4 relative overflow-hidden">
      <img src={productBg} alt="" aria-hidden="true" width={1536} height={1024} loading="lazy" className="products-v4-bg" />
      <div className="page-container products-v4-grid relative">
        <div data-reveal className="products-v4-copy"><p className="section-label">OUR MAKHANA</p><h2>Nature’s Goodness<br />in Every Bite</h2><p>Light, crisp and naturally wholesome. Graded by size, slow-roasted and popped the traditional way—nothing added, nothing taken away.</p>
          <ul className="spec-list">{[["Origin", "Mithila, Bihar"], ["Grade", "Premium large pops"], ["Process", "Sun-dried · roasted · popped"], ["Ingredients", "100% foxnut"]].map(([k, v]) => <li key={k}><span>{k}</span><span>{v}</span></li>)}</ul>
          <Button asChild className="mt-8 rounded-full bg-plum px-7 text-primary-foreground hover:bg-plum/90"><a href="#inquiry">Ask about ordering <ArrowRight /></a></Button>
        </div>
        <article data-reveal className="product-display products-v4-card"><div className="products-v4-halo" /><img src={premium} alt="Premium white Mithila makhana served on a fresh green lotus leaf" width={1024} height={1024} loading="lazy" className="product-cutout" /><div className="products-v4-tag"><Leaf className="h-4 w-4" strokeWidth={1.3} /><span>The Mithila Original</span></div><h3>Premium Makhana</h3><p>Pure · Natural · Traditionally popped</p></article>
      </div>
    </section>

    <section aria-label="Our promise" className="promise-v4">
      <div className="page-container">
        <p data-reveal className="promise-quote">100% natural, GI-tagged authentic Mithila foxnuts—hand-harvested from freshwater wetlands, sun-dried and traditionally popped.</p>
        <div className="promise-grid">
          {[[ShieldCheck, "Authentic Mithila Origin", "GI Certified Region"], [Sprout, "High Protein & Fiber", "Naturally wholesome"], [Leaf, "Zero Trans Fat", "Cholesterol Free · Non-GMO"], [HandHeart, "Direct from Local", "Farmer Collectives"]].map(([I, title, text]) => { const Icon = I as typeof Leaf; return <div key={title as string} data-reveal className="promise-item"><Icon className="h-6 w-6" strokeWidth={1.3} /><p>{title as string}</p><span>{text as string}</span></div>; })}
        </div>
      </div>
    </section>

    <section id="wellness" className="wellness-v4 relative overflow-hidden">
      <img src={wellnessBg} alt="" aria-hidden="true" width={1024} height={1536} loading="lazy" className="wellness-bg wellness-v4-bg" />
      <div className="page-container relative">
        <div data-reveal className="wellness-v4-head"><p className="section-label">NUTRITION & WELLNESS SPOTLIGHT</p><h2>Why Nutritionists<br />Choose Makhana</h2><p>Four quiet strengths of a seed grown in Mithila’s ponds.</p></div>
        <div className="wellness-v4-grid">{wellness.map(({ icon: Icon, number, title, text }) => <article key={number} data-reveal className="wellness-v4-card"><div className="wellness-v4-top"><Icon className="h-5 w-5" strokeWidth={1.4} /><span>{number}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>

    <section id="sourcing" className="sourcing-v4 relative overflow-hidden">
      <img src={banner} alt="" aria-hidden="true" width={1536} height={512} loading="lazy" className="sourcing-v4-bg" />
      <div className="page-container sourcing-v4-grid relative">
        <div data-reveal><p className="section-label">QUALITY & SUSTAINABLE SOURCING</p><h2>Empowering the Hands that Harvest.</h2></div>
        <div data-reveal><p>Makhana harvesting is an artisanal, labour-intensive craft carried by Mithila’s Mallah communities, who dive to the pond bed to gather seeds by hand. By shortening supply chains and removing layered middlemen, NeerNut supports transparent pricing for pond-growers while delivering batch-tested, clean-label foxnuts to your door.</p><div className="sourcing-v4-sign"><HandHeart className="h-8 w-8 shrink-0" strokeWidth={1.2} /><p>Supporting Farmers. Nourishing Lives.</p></div></div>
      </div>
    </section>
    <OrderInquiry />
    <footer className="page-container flex flex-wrap items-center justify-between gap-4 py-7"><a href="#home" className="font-display text-2xl font-semibold text-plum">NEER-NUT</a><p className="text-[10px] text-muted-foreground">PURE · NATURAL · MITHILA</p><a href="#home" className="text-xs text-plum">Back to top ↑</a></footer>
  </main>;
}
