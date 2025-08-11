import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

export const NeonButton = ({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  className, 
  ...props 
}: NeonButtonProps) => {
  const variants = {
    primary: 'bg-neon-cyan hover:bg-neon-cyan/80 text-bg-primary border-neon-cyan hover:shadow-[0_0_30px_rgba(0,224,255,0.5)] transition-all duration-300',
    secondary: 'bg-transparent hover:bg-neon-blue/10 text-neon-blue border-neon-blue hover:shadow-[0_0_20px_rgba(51,178,255,0.4)] transition-all duration-300',
    outline: 'bg-transparent hover:bg-surface-glass text-text-primary border-text-secondary hover:border-neon-mint hover:text-neon-mint hover:shadow-[0_0_20px_rgba(122,247,227,0.3)] transition-all duration-300'
  };

  return (
    <Button
      className={cn(
        "font-medium tracking-wide border",
        variants[variant],
        className
      )}
      size={size}
      {...props}
    >
      {children}
    </Button>
  );
};