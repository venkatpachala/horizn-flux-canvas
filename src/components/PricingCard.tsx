import { GlassCard } from "./GlassCard";
import { NeonButton } from "./NeonButton";
import { Check, Star } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: {
    monthly: string;
    oneTime: string;
  };
  description: string;
  features: string[];
  isPopular?: boolean;
  isMonthly: boolean;
}

export const PricingCard = ({ name, price, description, features, isPopular, isMonthly }: PricingCardProps) => {
  return (
    <GlassCard 
      variant={isPopular ? "cyan" : "default"}
      className={`p-8 relative ${isPopular ? 'lg:scale-105' : ''}`}
      hover
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-neon-cyan text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
            <Star className="w-4 h-4" />
            Most Popular
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-geist font-bold text-text-primary mb-2">
          {name}
        </h3>
        <p className="text-text-secondary mb-6">
          {description}
        </p>
        <div className="mb-6">
          <span className="text-4xl font-bold text-neon-cyan">
            {isMonthly ? price.monthly : price.oneTime}
          </span>
          <span className="text-text-secondary ml-2">
            {isMonthly ? '/month' : 'one-time'}
          </span>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <Check className="w-5 h-5 text-neon-mint flex-shrink-0" />
            <span className="text-text-secondary">{feature}</span>
          </div>
        ))}
      </div>

      <NeonButton 
        variant={isPopular ? "primary" : "outline"} 
        className="w-full"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Get Started
      </NeonButton>
    </GlassCard>
  );
};