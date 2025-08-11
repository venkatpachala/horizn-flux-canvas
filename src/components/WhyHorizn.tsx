import { GlassCard } from "./GlassCard";
import { Zap, Target, Bot, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Speed",
    description: "Lightning-fast websites that load in milliseconds and convert visitors instantly.",
    variant: "cyan" as const
  },
  {
    icon: Target,
    title: "Conversion-focused",
    description: "Every pixel designed with psychology and data to maximize your conversion rates.",
    variant: "blue" as const
  },
  {
    icon: Bot,
    title: "Automation-ready",
    description: "AI workflows that handle leads, follow-ups, and nurturing while you sleep.",
    variant: "mint" as const
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "24/7 monitoring, updates, and optimization to keep your momentum growing.",
    variant: "cyan" as const
  }
];

export const WhyHorizn = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">
            Why <span className="gradient-text">Horizn</span>?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We don't just build websites. We engineer momentum machines that compound your growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <GlassCard 
              key={feature.title}
              variant={feature.variant}
              hover
              className={`p-6 text-center scroll-reveal`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 flex justify-center">
                <feature.icon className="w-12 h-12 text-neon-cyan" />
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-3 text-text-primary">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};