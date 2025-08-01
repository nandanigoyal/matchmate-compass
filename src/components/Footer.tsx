import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const footerSections = {
    Product: [
      { name: "Features", href: "/features" },
      { name: "How It Works", href: "/how-it-works" },
      { name: "Pricing", href: "/pricing" },
      { name: "FAQs", href: "/faqs" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "GDPR", href: "/gdpr" },
    ],
    Support: [
      { name: "Contact Us", href: "/contact" },
      { name: "Help Center", href: "/help" },
      { name: "Safety Guidelines", href: "/safety" },
      { name: "Community", href: "/community" },
    ],
  };

  return (
    <footer className="bg-warm-brown text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-4">InTune</h2>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your vibe is the key to your perfect co-living match. In sync, In vibe, In tune.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <div className="p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Github className="h-5 w-5" />
              </div>
              <div className="p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Mail className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200 block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 InTune. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm mt-4 md:mt-0 flex items-center">
              Built for SheBuilds Hackathon by Team Naruto
              <span className="ml-2 text-red-400">♥</span>
              <span className="ml-1">🥷</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;