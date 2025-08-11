import { GlassCard } from "./GlassCard";
import { Search, Palette, Code, Bot, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Deep dive into your business, audience, and goals to create the perfect strategy.",
    color: "neon-cyan"
  },
  {
    icon: Palette,
    title: "Design",
    description: "Craft beautiful, conversion-focused designs that resonate with your brand.",
    color: "neon-blue"
  },
  {
    icon: Code,
    title: "Build",
    description: "Develop fast, scalable solutions using cutting-edge technologies.",
    color: "neon-mint"
  },
  {
    icon: Bot,
    title: "Automate",
    description: "Implement AI workflows that handle tasks and nurture leads automatically.",
    color: "neon-cyan"
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Deploy, monitor, and optimize for maximum performance and growth.",
    color: "neon-blue"
  }
];

export const Process = () => {
  return (
    <section id="process" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A proven methodology that turns ideas into momentum-generating digital experiences.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px gradient-line -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative scroll-reveal" style={{ animationDelay: `${index * 200}ms` }}>
                {/* Step Number */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-surface-glass border-2 border-neon-cyan rounded-full flex items-center justify-center relative z-10">
                    <span className="text-xl font-bold text-neon-cyan">
                      {index + 1}
                    </span>
                  </div>
                </div>

                <GlassCard className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <step.icon className={`w-8 h-8 text-${step.color}`} />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold mb-3 text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </GlassCard>

                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-px h-8 bg-gradient-to-b from-neon-cyan to-neon-blue"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};