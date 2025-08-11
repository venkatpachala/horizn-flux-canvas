import { useState } from "react";
import { GlassCard } from "./GlassCard";
import { NeonButton } from "./NeonButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MessageCircle, Calendar, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    interests: [] as string[],
    message: ''
  });

  const budgetOptions = [
    "Under $5,000",
    "$5,000 - $15,000", 
    "$15,000 - $50,000",
    "$50,000+"
  ];

  const interestOptions = [
    "Web Development",
    "Brand Design", 
    "AI Automation",
    "RAG Systems",
    "Landing Pages",
    "Ongoing Support"
  ];

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent! 🚀",
        description: "Thanks for reaching out! We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        interests: [],
        message: ''
      });
      
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">
            Ready to <span className="gradient-text">Scale Your Momentum</span>?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Let's discuss your project and create a strategy that drives real results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="scroll-reveal">
            <GlassCard className="p-8 h-full">
              <h3 className="text-2xl font-poppins font-bold mb-6 text-text-primary">
                Get In Touch
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neon-cyan/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">WhatsApp</h4>
                    <p className="text-text-secondary">Quick response guaranteed</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Book a Call</h4>
                    <p className="text-text-secondary">30-minute strategy session</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <NeonButton 
                  variant="primary" 
                  className="w-full justify-center"
                  onClick={() => window.open('https://wa.me/XXXXXXXXXX', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </NeonButton>
                
                <NeonButton 
                  variant="outline" 
                  className="w-full justify-center"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Call
                </NeonButton>
              </div>
            </GlassCard>
          </div>

          {/* Contact Form */}
          <div className="scroll-reveal">
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-text-primary">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="mt-2 bg-surface-glass border-text-tertiary/30 text-text-primary"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-text-primary">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="mt-2 bg-surface-glass border-text-tertiary/30 text-text-primary"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-text-primary">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      className="mt-2 bg-surface-glass border-text-tertiary/30 text-text-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="budget" className="text-text-primary">Budget Range</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                      <SelectTrigger className="mt-2 bg-surface-glass border-text-tertiary/30 text-text-primary">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="bg-surface-glass border-text-tertiary/30">
                        {budgetOptions.map((option) => (
                          <SelectItem key={option} value={option} className="text-text-primary">
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="text-text-primary mb-3 block">Services of Interest</Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {interestOptions.map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                          className="border-text-tertiary/30 data-[state=checked]:bg-neon-cyan"
                        />
                        <Label htmlFor={interest} className="text-text-secondary text-sm">
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-text-primary">Project Details</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="mt-2 bg-surface-glass border-text-tertiary/30 text-text-primary min-h-[120px]"
                  />
                </div>

                <NeonButton 
                  type="submit" 
                  variant="primary" 
                  className="w-full justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </NeonButton>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};