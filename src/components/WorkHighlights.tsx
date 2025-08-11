import { useState } from "react";
import { GlassCard } from "./GlassCard";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FinTech SaaS Platform",
    category: "Web Development",
    tags: ["React", "AI Integration", "Analytics"],
    metrics: "+340% User Engagement",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    description: "Complete platform redesign with AI-powered insights and automated user workflows.",
    isVideo: false
  },
  {
    id: 2,
    title: "E-commerce Automation",
    category: "AI Automation",
    tags: ["n8n", "CRM Integration", "Email Marketing"],
    metrics: "+185% Conversion Rate",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    description: "End-to-end automation from lead capture to customer retention.",
    isVideo: true
  },
  {
    id: 3,
    title: "Healthcare Brand Identity",
    category: "Brand Design",
    tags: ["Brand Kit", "Logo Design", "Guidelines"],
    metrics: "+220% Brand Recognition",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    description: "Modern healthcare brand that builds trust and converts patients.",
    isVideo: false
  },
  {
    id: 4,
    title: "Real Estate CRO",
    category: "Landing Pages",
    tags: ["CRO", "A/B Testing", "Analytics"],
    metrics: "+95% Lead Quality",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    description: "High-converting landing pages with advanced lead qualification.",
    isVideo: false
  },
  {
    id: 5,
    title: "AI Knowledge System",
    category: "RAG Systems",
    tags: ["RAG", "AI", "Knowledge Base"],
    metrics: "+400% Query Accuracy",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    description: "Custom AI system that understands complex business documentation.",
    isVideo: true
  },
  {
    id: 6,
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    tags: ["Dashboard", "Data Viz", "UX"],
    metrics: "+150% User Retention",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    description: "Intuitive dashboard that makes complex data actionable.",
    isVideo: false
  }
];

export const WorkHighlights = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="work" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">
            Work <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            See how we've helped companies transform their digital presence and automate their growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <GlassCard 
              key={project.id}
              hover
              className={`overflow-hidden cursor-pointer scroll-reveal`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                
                {/* Video Play Overlay */}
                {project.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-12 h-12 bg-neon-cyan rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-bg-primary ml-1" />
                    </div>
                  </div>
                )}

                {/* Hover Overlay */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 to-transparent flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-text-secondary text-sm mb-2">{project.description}</p>
                      <div className="flex items-center gap-2 text-neon-cyan">
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">View Project</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-neon-blue font-medium">{project.category}</span>
                  <span className="text-sm text-neon-mint font-semibold">{project.metrics}</span>
                </div>
                
                <h3 className="text-xl font-poppins font-semibold mb-3 text-text-primary">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs bg-surface-elevated border-text-tertiary/30 text-text-secondary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};