import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyHorizn } from "@/components/WhyHorizn";
import { Services } from "@/components/Services";
import { WorkHighlights } from "@/components/WorkHighlights";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  // Update document title and meta for SEO
  useEffect(() => {
    document.title = "Horizn - Web Creatives & AI Automations that Scale Momentum";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your business with cutting-edge web design, AI automation, and conversion optimization. Horizn creates digital experiences that drive real results.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhyHorizn />
        <Services />
        <WorkHighlights />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQAccordion />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
