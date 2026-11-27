import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./useReducedMotion.js";

gsap.registerPlugin(ScrollTrigger);

/* Fades and lifts every [data-reveal] child of the returned ref as it enters the viewport.
   Port reference-site animations into hooks like this one so cleanup is automatic. */
export function useReveal() {
  const scope = useRef(null);
  useLayoutEffect(() => {
    if (!scope.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 28, opacity: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    }, scope);
    return () => ctx.revert();
  }, []);
  return scope;
}
