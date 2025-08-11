import { MessageCircle, Twitter, Linkedin, Github, Instagram } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const footerLinks = {
    Services: [
      { name: "Web Development", href: "#services" },
      { name: "Brand Design", href: "#services" },
      { name: "AI Automation", href: "#services" },
      { name: "RAG Systems", href: "#services" }
    ],
    Company: [
      { name: "About", href: "#about" },
      { name: "Process", href: "#process" },
      { name: "Work", href: "#work" },
      { name: "Pricing", href: "#pricing" }
    ],
    Support: [
      { name: "FAQ", href: "#faq" },
      { name: "Contact", href: "#contact" },
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" }
    ]
  };

  return (
    <footer className="py-20 px-6 border-t border-text-tertiary/20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-3xl font-poppins font-bold gradient-text mb-4">
              horizn
            </div>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Web creatives and AI automations that scale momentum for forward-thinking businesses.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-surface-glass border border-text-tertiary/30 rounded-lg flex items-center justify-center text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-poppins font-semibold text-text-primary mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-text-secondary hover:text-neon-cyan transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-text-tertiary/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            © 2024 Horizn. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-text-secondary hover:text-neon-cyan transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-text-secondary hover:text-neon-cyan transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-text-secondary hover:text-neon-cyan transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button for Mobile */}
      <button
        className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-neon-cyan text-bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(0,224,255,0.5)] transition-all duration-300 z-40"
        onClick={() => window.open('https://wa.me/XXXXXXXXXX', '_blank')}
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </footer>
  );
};