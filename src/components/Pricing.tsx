import { useState } from "react";
import { PricingCard } from "./PricingCard";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { GlassCard } from "./GlassCard";

const pricingPlans = [
  {
    name: "Starter",
    price: {
      monthly: "$2,500",
      oneTime: "$5,000"
    },
    description: "Perfect for small businesses ready to make their mark online.",
    features: [
      "Custom website design",
      "Mobile-responsive development",
      "Basic SEO optimization",
      "Contact form integration",
      "1 month of support",
      "Basic analytics setup"
    ]
  },
  {
    name: "Growth",
    price: {
      monthly: "$4,500",
      oneTime: "$12,000"
    },
    description: "For growing companies that need automation and advanced features.",
    features: [
      "Everything in Starter",
      "AI automation workflows",
      "CRM integration",
      "Advanced SEO & CRO",
      "Email marketing setup",
      "3 months of support",
      "Performance monitoring",
      "A/B testing setup"
    ],
    isPopular: true
  },
  {
    name: "Pro",
    price: {
      monthly: "$8,500",
      oneTime: "$25,000"
    },
    description: "Enterprise-level solution with full automation and AI integration.",
    features: [
      "Everything in Growth",
      "Agentic RAG systems",
      "Custom AI integrations",
      "Advanced automation",
      "Multi-platform deployment",
      "6 months of support",
      "White-label solutions",
      "Priority support",
      "Custom analytics dashboard"
    ]
  }
];

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Choose the perfect plan to accelerate your growth. All plans include our proven methodology.
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <Label htmlFor="pricing-toggle" className="text-text-secondary">
              One-time Project
            </Label>
            <Switch
              id="pricing-toggle"
              checked={isMonthly}
              onCheckedChange={setIsMonthly}
              className="data-[state=checked]:bg-neon-cyan"
            />
            <Label htmlFor="pricing-toggle" className="text-text-secondary">
              Monthly Retainer
            </Label>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <div key={plan.name} className="scroll-reveal" style={{ animationDelay: `${index * 150}ms` }}>
              <PricingCard {...plan} isMonthly={isMonthly} />
            </div>
          ))}
        </div>

        {/* Custom Plan */}
        <div className="scroll-reveal">
          <GlassCard variant="blue" className="p-8 text-center">
            <h3 className="text-2xl font-poppins font-bold text-text-primary mb-4">
              Need Something Custom?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Enterprise solutions, custom integrations, or unique requirements? 
              Let's build something extraordinary together.
            </p>
            <button 
              className="text-neon-blue hover:text-neon-cyan transition-colors font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's talk custom solutions →
            </button>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};