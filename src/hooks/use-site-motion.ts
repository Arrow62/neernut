import { useEffect } from "react";

/** GSAP scroll motion for the homepage: hero depth parallax and section reveals. */
export function useSiteMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from(".hero-copy > *:not(.hero-wash)", { y: 40, opacity: 0, filter: "blur(8px)", duration: 1.3, stagger: .14, ease: "expo.out", delay: .2 });
        gsap.fromTo(".hero-picture", { scale: 1.18 }, { scale: 1, duration: 2.4, ease: "power3.out" });
        gsap.to(".hero-picture", { yPercent: 22, ease: "none", scrollTrigger: { trigger: ".pond-scene", start: "top top", end: "bottom top", scrub: .6 } });
        gsap.to(".hero-copy", { yPercent: -40, opacity: 0, ease: "none", scrollTrigger: { trigger: ".pond-scene", start: "top top", end: "bottom 20%", scrub: .6 } });
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, { y: 60, opacity: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
        });
        gsap.utils.toArray<HTMLElement>(".wellness-bg, #products > img").forEach((el) => {
          gsap.fromTo(el, { yPercent: -8, scale: 1.15 }, { yPercent: 8, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
        });
        gsap.from(".product-cutout", { rotate: -12, scale: .85, duration: 1.4, ease: "back.out(1.4)", scrollTrigger: { trigger: ".product-display", start: "top 80%" } });
      });
    })();
    return () => { cancelled = true; ctx?.revert(); };
  }, []);
}
