import { useEffect, useState } from "react";

interface SectionDotsProps {
  sections?: string[];
}

export const SectionDots = ({ sections = [
  "about",
  "services",
  "work",
  "process",
  "pricing",
  "testimonials",
  "faq",
  "contact",
] }: SectionDotsProps) => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  const onJump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      {sections.map((id) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            aria-label={`Jump to ${id}`}
            onClick={() => onJump(id)}
            className={`relative h-3.5 w-3.5 rounded-full border transition-transform ${
              isActive ? "scale-110 border-neon-cyan" : "opacity-70 hover:opacity-100 border-text-tertiary/30"
            }`}
          >
            <span
              className={`absolute inset-1 rounded-full transition-colors ${
                isActive ? "bg-neon-cyan" : "bg-text-secondary/20"
              }`}
            />
          </button>
        );
      })}
    </aside>
  );
};
