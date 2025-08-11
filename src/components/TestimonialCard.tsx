import { GlassCard } from "./GlassCard";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export const TestimonialCard = ({ name, role, company, avatar, quote, rating }: TestimonialCardProps) => {
  return (
    <GlassCard className="p-6 h-full flex flex-col">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-neon-cyan text-neon-cyan" />
        ))}
      </div>
      
      <div className="mb-6 flex-grow">
        <Quote className="w-8 h-8 text-neon-blue mb-4 opacity-50" />
        <p className="text-text-secondary leading-relaxed italic">
          "{quote}"
        </p>
      </div>

      <div className="flex items-center gap-4">
        <img 
          src={avatar} 
          alt={`${name} avatar`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-text-primary">{name}</h4>
          <p className="text-sm text-text-secondary">{role}</p>
          <p className="text-sm text-neon-cyan">{company}</p>
        </div>
      </div>
    </GlassCard>
  );
};