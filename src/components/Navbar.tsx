import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import intuneLogoCircle from "@/assets/intune-logo-circle.png";
import userAvatarCircle from "@/assets/user-avatar-circle.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Circle */}
          <div className="flex items-center space-x-3">
            <img 
              src={intuneLogoCircle} 
              alt="InTune Logo" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <h1 className="text-2xl font-bold text-primary">InTune</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="nav"
                  className="text-base font-medium"
                >
                  {link.name}
                </Button>
              ))}
            </div>
          </div>

          {/* User Avatar */}
          <div className="hidden md:flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-warm-brown to-accent p-0.5 cursor-pointer hover:scale-105 transition-transform duration-200">
              <img 
                src={userAvatarCircle} 
                alt="User Avatar" 
                className="w-full h-full rounded-full object-cover bg-background"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-warm-brown to-accent p-0.5">
              <img 
                src={userAvatarCircle} 
                alt="User Avatar" 
                className="w-full h-full rounded-full object-cover bg-background"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2 shadow-lg">
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  className="w-full justify-start text-left"
                >
                  {link.name}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;