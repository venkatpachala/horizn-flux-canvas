import { useState, useEffect } from "react";
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    company: "TechFlow Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    quote: "Horizn transformed our entire customer journey. The AI automation they built increased our conversion rate by 300% and saves us 20 hours per week.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Marketing",
    company: "GrowthLab",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "The landing page optimization and automation workflows delivered results beyond our expectations. ROI was 400% in the first quarter alone.",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Product Manager",
    company: "InnovateCorp",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote: "Working with Horizn was seamless. They understood our vision and delivered a website that perfectly represents our brand while driving real business results.",
    rating: 5
  },
  {
    name: "David Park",
    role: "Co-founder",
    company: "StartupHub",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "The RAG system they built for our customer support is incredible. It reduced response times by 80% and improved customer satisfaction dramatically.",
    rating: 5
  },
  {
    name: "Lisa Thompson",
    role: "VP of Operations",
    company: "ScaleUp Inc",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    quote: "Horizn's automation expertise is unmatched. They created workflows that handle our entire lead nurturing process automatically and intelligently.",
    rating: 5
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">
            What Our Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. See how we've helped companies achieve remarkable growth.
          </p>
        </div>

        <div 
          className="grid md:grid-cols-3 gap-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <div 
              key={`${testimonial.name}-${currentIndex}-${index}`}
              className="scroll-reveal"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-neon-cyan shadow-[0_0_10px_rgba(0,224,255,0.5)]' 
                  : 'bg-text-tertiary hover:bg-text-secondary'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};