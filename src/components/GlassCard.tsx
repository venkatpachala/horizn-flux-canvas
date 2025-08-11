import { cn } from "@/lib/utils";
import { ReactNode, HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'cyan' | 'blue' | 'mint';
  hover?: boolean;
}

export const GlassCard = ({ children, className, variant = 'default', hover = false, ...props }: GlassCardProps) => {
  const variants = {
    default: 'glass-card',
    cyan: 'glass-card neon-border-cyan',
    blue: 'glass-card neon-border-blue', 
    mint: 'glass-card neon-border-mint'
  };

  return (
    <div 
      className={cn(
        variants[variant],
        hover && 'hover-lift hover-glow cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};