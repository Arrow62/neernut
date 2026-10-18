import { useEffect, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import pond from "@/assets/mithila-pond.jpeg.asset.json";

export function HomeHero({ children }: { children: React.ReactNode }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => setSelected(api.selectedScrollSnap());
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => { api.off("select", update); api.off("reInit", update); };
  }, [api]);

  return (
    <Carousel opts={{ loop: true }} setApi={setApi} aria-label="NEER-NUT highlights" className="home-hero bg-aqua">
      <CarouselContent className="ml-0">
        {[0, 1, 2].map((slide) => (
          <CarouselItem key={slide} className="relative pl-0" aria-label={`${slide + 1} of 3`} aria-hidden={selected !== slide}>
            <div className="hero-picture" aria-hidden="true">
              <img src={pond.url} alt="" className="hero-photo" width={1194} height={768} fetchPriority={slide === 0 ? "high" : "auto"} />
            </div>
            <div className="hero-wash absolute inset-0 pointer-events-none" />
            <div className="hero-copy relative z-10">
              <p className="text-[10px] font-semibold sm:text-xs">FROM THE PONDS OF MITHILA</p>
              {slide === 0 ? <h1 className="hero-title">Nature’s Pearl,<br />Mithila’s Pride</h1> : <h2 className="hero-title">Nature’s Pearl,<br />Mithila’s Pride</h2>}
              <p className="hero-description text-foreground/85">Premium makhana, grown in the pure waters of Bihar, rooted in tradition, crafted for a healthier tomorrow.</p>
              <Button asChild tabIndex={selected === slide ? 0 : -1} className="hero-cta rounded-full">
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
  );
}