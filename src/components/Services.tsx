import { useState } from "react";
import { GlassCard } from "./GlassCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Palette, Code, Bot, Database, Target, Wrench } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Design & Development",
    description: "Custom websites built for speed, conversion, and user experience.",
    details: [
      "Responsive design across all devices",
      "Core Web Vitals optimization",
      "SEO-first architecture", 
      "Advanced animations and interactions",
      "CMS integration for easy content management"
    ],
    workflow: "Wireframes → Design → Development → Testing → Launch"
  },
  {
    icon: Palette,
    title: "Brand Kits",
    description: "Complete visual identity systems that resonate with your audience.",
    details: [
      "Logo design and variations",
      "Color palette and typography",
      "Brand guidelines document",
      "Marketing collateral templates",
      "Social media brand assets"
    ],
    workflow: "Discovery → Concepts → Refinement → Brand Guide → Assets"
  },
  {
    icon: Bot,
    title: "AI Automation (n8n workflows)",
    description: "Intelligent workflows that handle repetitive tasks automatically.",
    details: [
      "Lead qualification and scoring",
      "Email marketing automation",
      "CRM data synchronization",
      "Social media management",
      "Customer support chatbots"
    ],
    workflow: "Process Mapping → Workflow Design → Testing → Deployment → Monitoring"
  },
  {
    icon: Database,
    title: "Agentic RAG Systems",
    description: "AI knowledge systems that understand your business and customers.",
    details: [
      "Custom knowledge base creation",
      "Document processing and indexing",
      "Intelligent query understanding",
      "Multi-modal content support",
      "API integrations for live data"
    ],
    workflow: "Data Collection → Processing → Training → Integration → Optimization"
  },
  {
    icon: Target,
    title: "Landing Pages & CRO",
    description: "High-converting pages optimized for your specific audience.",
    details: [
      "A/B testing and optimization",
      "Conversion funnel analysis",
      "Heat mapping and user behavior",
      "Mobile-first design approach",
      "Performance monitoring"
    ],
    workflow: "Research → Design → Build → Test → Optimize"
  },
  {
    icon: Wrench,
    title: "Care & Maintenance",
    description: "Ongoing support to keep your digital assets performing at peak.",
    details: [
      "Security updates and monitoring",
      "Performance optimization",
      "Content updates and changes",
      "Analytics and reporting",
      "Technical support and troubleshooting"
    ],
    workflow: "Monitor → Analyze → Update → Optimize → Report"
  }
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-geist font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From concept to conversion, we handle every aspect of your digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <GlassCard 
              key={service.title}
              hover
              className={`p-6 cursor-pointer scroll-reveal`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedService(service)}
            >
              <div className="mb-4">
                <service.icon className="w-10 h-10 text-neon-blue mb-4" />
                <h3 className="text-xl font-geist font-semibold mb-3 text-text-primary">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="text-neon-cyan text-sm font-medium hover:text-neon-mint transition-colors">
                Learn more →
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Service Modal */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="glass-card border-text-tertiary/20 text-text-primary max-w-2xl">
            {selectedService && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-geist font-bold gradient-text flex items-center gap-3">
                    <selectedService.icon className="w-8 h-8" />
                    {selectedService.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <p className="text-text-secondary text-lg">
                    {selectedService.description}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-neon-cyan">What's Included:</h4>
                    <ul className="space-y-2">
                      {selectedService.details.map((detail, index) => (
                        <li key={index} className="flex items-center gap-3 text-text-secondary">
                          <div className="w-1.5 h-1.5 bg-neon-mint rounded-full"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-neon-blue">Workflow:</h4>
                    <div className="glass-card p-4 border border-text-tertiary/20">
                      <p className="text-text-secondary">{selectedService.workflow}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};