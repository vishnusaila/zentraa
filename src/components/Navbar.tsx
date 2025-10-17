import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import logoDark from "@/assets/TM-white1.png"; 
import logo from "@/assets/TM-blue1.png"; 
// 🚨 FIX: Using a robust, guaranteed placeholder for the light logo
const logoLight = logo; 

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const businessSolutions = [
  { name: "MedIntel™", path: "/healthcare" },
  { name: "IntelZen™", path: "/human-experience" },
  { name: "Tech Consulting", path: "/tech-consulting" },
  ];


  // Check if the current path matches any path inside the businessSolutions array
  const isSolutionsActive = businessSolutions.some(
    (solution) => location.pathname === solution.path
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-22">
          
          {/* 🚨 LOGO SECTION: Dual Logo Implementation with Fallbacks */}
          <Link to="/" className="flex items-center group">
            {/* Logo for Light Mode (Visible by default, hidden in dark mode) */}
            <img 
              src={logoLight} 
              alt="Zentraa Logo (Light)" 
              className="h-24 w-auto transition-transform group-hover:scale-110 dark:hidden" 
            />
            {/* Logo for Dark Mode (Hidden by default, visible in dark mode) */}
            <img 
              src={logoDark} 
              alt="Zentraa Logo (Dark)" 
              className="h-24 w-auto transition-transform group-hover:scale-110 hidden dark:block" 
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/40x40/2a3141/ffffff?text=D' }} // Fallback for dark logo asset error
            />
          </Link>
          {/* End Logo Section */}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-base font-medium transition-colors hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>

            {/* Business Solutions Dropdown */}
            <div
              className="relative group"
            >
              <button 
                className={`flex items-center space-x-1 text-base font-medium transition-colors hover:text-primary ${
                  isSolutionsActive ? "text-primary" : "text-foreground"
                }`}
              >
                <span>Business Solutions</span>
                <ChevronDown className={`h-4 w-4 transition-transform group-hover:rotate-180 ${
                  isSolutionsActive ? "text-primary" : "text-foreground"
                }`} />
              </button>

              <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-elegant overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {businessSolutions.map((solution) => (
                  <Link
                    key={solution.path}
                    to={solution.path}
                    className={`block px-4 py-3.5 text-base transition-colors ${
                        location.pathname === solution.path 
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {solution.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Standard navLinks (About, Careers, Contact) */}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:bg-muted"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-lg">
            <div className="py-4 space-y-2">
              <Link
                to="/"
                className="block px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Standard navLinks */}
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Business Solutions Section (MOVED UP FOR PRIORITY) */}
              <div className="px-4 py-2">
                <p className={`text-base font-semibold mb-2 ${
                  isSolutionsActive ? "text-primary" : "text-muted-foreground"
                }`}>
                  Business Solutions
                </p>
                {businessSolutions.map((solution) => (
                  <Link
                    key={solution.path}
                    to={solution.path}
                    className={`block px-4 py-3 text-base rounded-md ${
                        location.pathname === solution.path 
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {solution.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
