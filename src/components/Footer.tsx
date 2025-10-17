import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
// 🚨 UPDATED LOGO IMPORTS for dual theme support
import logoLight from "@/assets/blue.png"; 
// Assuming the dark logo is named 'logo-dark.png'
import logoDark from "@/assets/white1.png"; 

export const Footer = () => {
  return (
    <>
    {/* Setting background to bg-card for theme consistency (dark charcoal blue in dark mode) */}
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            
            {/* 🚨 DUAL LOGO IMPLEMENTATION (replaces logo image and text span) */}
            <div className="flex items-center space-x-2">
              {/* Light Logo (Visible by default, hidden in dark mode) */}
              <img 
                src={logoLight} 
                alt="Zentraa Logo" 
                className="h-20 w-auto dark:hidden" 
              />
              {/* Dark Logo (Hidden by default, visible in dark mode) */}
              <img 
                src={logoDark} 
                alt="Zentraa Logo" 
                className="h-20 w-auto hidden dark:block" 
                // Fallback added in case dark asset path is incorrect
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/40x40/2a3141/ffffff?text=D' }}
              />
            </div>
            {/* END DUAL LOGO */}

            {/* Using muted-foreground for secondary text blocks */}
            <p className="text-sm text-muted-foreground">
              Empowering businesses through innovative technology consulting and product engineering solutions.
            </p>
            <div className="flex space-x-4">
              {/* Social icons use foreground text color and hover to primary color */}
              <a href="#" className="hover:text-primary transition-colors text-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                {/* Links use foreground for black/white switching */}
                <Link to="/about" className="text-sm text-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/healthcare" className="text-sm text-foreground hover:text-primary transition-colors">
                  Healthcare Solutions
                </Link>
              </li>
              <li>
                <Link to="/human-experience" className="text-sm text-foreground hover:text-primary transition-colors">
                  Human Experience
                </Link>
              </li>
              <li>
                <Link to="/tech-consulting" className="text-sm text-foreground hover:text-primary transition-colors">
                  Tech Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              {/* Text uses foreground for better contrast */}
              <li className="flex items-start space-x-2 text-sm text-foreground">
                {/* Icons use primary color for highlight */}
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                <span>8 The Green, Suite B, Dover, DE 19901</span>
              </li>
             
              <li className="flex items-center space-x-2 text-sm text-foreground">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <span>Sales@zentraahub.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Zentraa. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
};
