import { NeonButton } from "./NeonButton";
import { GlassCard } from "./GlassCard";
import heroImage from "@/assets/hero-dashboard.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 scroll-reveal">
            <h1 className="text-5xl lg:text-7xl font-poppins font-bold leading-tight">
              <span className="text-text-primary">Web Creatives &</span>
              <br />
              <span className="gradient-text">AI Automations</span>
              <br />
              <span className="text-text-primary">that Scale Momentum.</span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-lg leading-relaxed">
              We craft fast websites and automated workflows that turn clicks into pipeline.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <NeonButton 
                variant="primary" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start your project
              </NeonButton>
              <NeonButton 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View work
              </NeonButton>
            </div>
          </div>

          {/* Right Content - Interactive Dashboard */}
          <div className="relative scroll-reveal">
            <GlassCard className="p-6 hover-lift pulse-glow" hover>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={heroImage} 
                  alt="AI Automation Dashboard Interface"
                  className="w-full h-auto rounded-lg"
                />
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-neon-cyan rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-neon-mint rounded-full animate-pulse delay-1000"></div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-glass/50 to-transparent rounded-lg"></div>
                
                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="text-text-secondary">Performance</span>
                      <div className="text-neon-cyan font-semibold">+247%</div>
                    </div>
                    <div className="text-sm">
                      <span className="text-text-secondary">Automation</span>
                      <div className="text-neon-mint font-semibold">Active</div>
                    </div>
                    <div className="text-sm">
                      <span className="text-text-secondary">Conversions</span>
                      <div className="text-neon-blue font-semibold">+156%</div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};