import { useEffect, useRef } from "react";

// Ambient glow cursor overlay using radial-gradient with theme tokens
// GPU-friendly: transforms and opacity only
export const CursorGlow = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x = 0, y = 0;
    let tx = 0, ty = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const loop = () => {
      // ease towards cursor
      tx += (x - tx) * 0.12;
      ty += (y - ty) * 0.12;
      el.style.setProperty("--x", `${tx}px`);
      el.style.setProperty("--y", `${ty}px`);
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove as any);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40"
      style={{
        // Use theme tokens; fallback alpha keeps it subtle
        background:
          "radial-gradient(180px circle at var(--x) var(--y), hsl(var(--neon-cyan) / 0.18), transparent 60%)",
        transition: "background-position 120ms ease-out",
      }}
    />
  );
};

