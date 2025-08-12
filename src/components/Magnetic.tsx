import { cloneElement, ReactElement, useEffect, useRef } from "react";

interface MagneticProps {
  children: ReactElement;
  strength?: number; // px translate max
  rotate?: number; // deg
}

export const Magnetic = ({ children, strength = 12, rotate = 6 }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0, rx: 0, ry: 0 });
  const current = useRef({ x: 0, y: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = Math.max(-1, Math.min(1, (e.clientX - cx) / (rect.width / 2)));
      const dy = Math.max(-1, Math.min(1, (e.clientY - cy) / (rect.height / 2)));
      target.current.x = dx * strength;
      target.current.y = dy * strength;
      target.current.rx = -dy * rotate;
      target.current.ry = dx * rotate;
      tick();
    };

    const onLeave = () => {
      target.current = { x: 0, y: 0, rx: 0, ry: 0 } as any;
      tick();
    };

    const tick = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      const loop = () => {
        const c = current.current;
        const t = target.current;
        // springy ease
        c.x += (t.x - c.x) * 0.15;
        c.y += (t.y - c.y) * 0.15;
        c.rx += (t.rx - c.rx) * 0.15;
        c.ry += (t.ry - c.ry) * 0.15;
        if (ref.current) {
          ref.current.style.transform = `translate3d(${c.x}px, ${c.y}px, 0) rotateX(${c.rx}deg) rotateY(${c.ry}deg)`;
        }
        const settled = Math.abs(c.x - t.x) < 0.1 && Math.abs(c.y - t.y) < 0.1 && Math.abs(c.rx - t.rx) < 0.1 && Math.abs(c.ry - t.ry) < 0.1;
        if (!settled) rafRef.current = requestAnimationFrame(loop);
      };
      rafRef.current = requestAnimationFrame(loop);
    };

    const node = el.parentElement ?? el;
    node.addEventListener("mousemove", onMove);
    node.addEventListener("mouseleave", onLeave);
    return () => {
      node.removeEventListener("mousemove", onMove);
      node.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="inline-block will-change-transform" ref={ref}>
      {cloneElement(children, { className: children.props.className })}
    </div>
  );
};
