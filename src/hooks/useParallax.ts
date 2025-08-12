import { useEffect } from "react";

export const useParallax = (el: React.RefObject<HTMLElement>, speed = 0.15) => {
  useEffect(() => {
    const node = el.current;
    if (!node) return;

    let raf = 0;
    const update = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      const centerDistance = rect.top + rect.height / 2 - vh / 2; // distance from viewport center
      const translate = -centerDistance * speed;
      node.style.transform = `translate3d(0, ${translate.toFixed(2)}px, 0)`;
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);

    return () => cancelAnimationFrame(raf);
  }, [el, speed]);
};
