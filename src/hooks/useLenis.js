import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./useReducedMotion.js";

gsap.registerPlugin(ScrollTrigger);

/* Smooth scroll with Lenis, driven by GSAP's ticker so ScrollTrigger stays in sync.
   Skipped entirely when the visitor prefers reduced motion. */
export function useLenis() {
  const ref = useRef(null);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const lenis = new Lenis({ lerp: 0.1 });
    ref.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      ref.current = null;
    };
  }, []);
  return ref;
}
