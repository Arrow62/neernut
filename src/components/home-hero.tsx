import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import pond from "@/assets/hero-pond.png.asset.json";

export function HomeHero({ children }: { children: React.ReactNode }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const scene = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = scene.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let x = 0;
    let y = 0;
    const render = () => {
      const bounds = element.getBoundingClientRect();
      const progress = Math.max(0, Math.min(bounds.height, -bounds.top));
      const offset = progress * .16;
      element.style.setProperty("--pond-x", `${x}px`);
      element.style.setProperty("--pond-y", `${offset + y}px`);
      element.style.setProperty("--copy-y", `${offset * -.22}px`);
      element.style.setProperty("--foreground-y", `${progress * -.12}px`);
      element.style.setProperty("--art-y", `${progress * .08}px`);
      frame = 0;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(render); };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const bounds = element.getBoundingClientRect();
      x = ((event.clientX - bounds.left) / bounds.width - .5) * -12;
      y = ((event.clientY - bounds.top) / bounds.height - .5) * -10;
      schedule();
    };
    const reset = () => { x = 0; y = 0; schedule(); };
    window.addEventListener("scroll", schedule, { passive: true });
    element.addEventListener("pointermove", move);
    element.addEventListener("pointerleave", reset);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", reset);
    };
  }, []);

  useEffect(() => {
    if (!api) return;
    const update = () => setSelected(api.selectedScrollSnap());
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => { api.off("select", update); api.off("reInit", update); };
  }, [api]);

  return (
    <div ref={scene} className="pond-scene">
    <Carousel opts={{ loop: true }} setApi={setApi} aria-label="NEER-NUT highlights" className="home-hero bg-aqua">
      <CarouselContent className="ml-0">
        {[0, 1, 2].map((slide) => (
          <CarouselItem key={slide} className="relative pl-0" aria-label={`${slide + 1} of 3`} aria-hidden={selected !== slide}>
            <div className="hero-picture" aria-hidden="true">
              <img src={pond.url} alt="" className="hero-photo" width={1194} height={768} fetchPriority={slide === 0 ? "high" : "auto"} />
            </div>
            <div className="hero-copy relative z-10">
              <div className="hero-wash pointer-events-none" aria-hidden="true" />
              <p className="text-[10px] font-semibold sm:text-xs">FROM THE PONDS OF MITHILA</p>
              {slide === 0 ? <h1 className="hero-title">Nature’s Pearl,<br />Mithila’s Pride</h1> : <h2 className="hero-title">Nature’s Pearl,<br />Mithila’s Pride</h2>}
              <p className="hero-description text-foreground/85">From Mithila’s freshwater ponds to your everyday rituals. Hand-harvested, sun-dried and traditionally popped—pure, light and naturally wholesome makhana.</p>
              <Button asChild variant="outline" tabIndex={selected === slide ? 0 : -1} className="hero-cta rounded-full border-plum bg-plum text-primary-foreground hover:bg-plum/90 hover:text-primary-foreground">
                <a href="#products">Explore Our Makhana <ArrowRight /></a>
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {children}
      <div className="hero-controls absolute z-10 flex items-center gap-3">
        <span className="min-w-12 text-xs font-medium tabular-nums" aria-live="polite" aria-atomic="true">0{selected + 1} / 03</span>
        <div className="flex items-center gap-1">
          {[0, 1, 2].map((slide) => <Button key={slide} variant="ghost" size="icon" onClick={() => api?.scrollTo(slide)} aria-label={`Go to slide ${slide + 1}`} aria-pressed={selected === slide} className="h-10 w-8 rounded-none hover:bg-transparent"><span className={`h-0.5 w-7 ${selected === slide ? "bg-foreground" : "bg-foreground/30"}`} /></Button>)}
        </div>
        <Button variant="ghost" size="icon" onClick={() => api?.scrollPrev()} aria-label="Previous slide" title="Previous slide" className="rounded-full border border-foreground/30 bg-cream/60"><ArrowLeft /></Button>
        <Button variant="ghost" size="icon" onClick={() => api?.scrollNext()} aria-label="Next slide" title="Next slide" className="rounded-full border border-foreground/30 bg-cream/60"><ArrowRight /></Button>
      </div>
      <Button asChild variant="ghost" size="icon" className="hero-scroll absolute z-10 rounded-full border border-primary-foreground text-primary-foreground hover:bg-plum/40 hover:text-primary-foreground">
        <a href="#story" aria-label="Scroll to our story"><ArrowDown /></a>
      </Button>
    </Carousel>
    </div>
  );
}