import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Database, Users, Zap, Shield, Target, CheckCircle2, Globe, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Images
import bghome from "@/assets/homebg.png";
import bgbanner from "@/assets/bgbanner.jpg";
import bg from "@/assets/web2.webp";
import logod from "@/assets/logo-b.png";
import whypart from "@/assets/index.jpg";

import logoDark from "@/assets/for-dark.png"; 

import medintel from "@/assets/medintel.jpg";
import zedintel from "@/assets/intelzen.png";
import tech from "@/assets/tech.png";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  // Loader effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        document.querySelectorAll(".animate-on-scroll").forEach(el => {
          if (el.classList.contains("opacity-0")) {
            el.classList.remove("translate-y-4", "opacity-0");
          }
        });
      }, 50);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("translate-y-4", "opacity-0");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Services
  const services = [
    { icon: Code, title: "Product Design & Development", description: "End-to-end product engineering with modern tech stacks and agile methodologies." },
    { icon: Shield, title: "Quality Engineering", description: "Comprehensive testing and quality assurance for flawless digital experiences." },
    { icon: Users, title: "UI/UX Design", description: "Human-centered design that creates intuitive and engaging user experiences." },
    { icon: Database, title: "Data Analytics & Engineering", description: "Transform data into actionable insights with advanced analytics solutions." },
    { icon: Target, title: "Strategic Business Consulting", description: "Strategic guidance to align technology with your business objectives." },
    { icon: Zap, title: "Talent Solutions", description: "Access top-tier tech talent to accelerate your digital transformation." },
  ];

  // Featured Services
  const featuredServices = [
    {
      title: "MedIntel",
      description: "Innovative digital solutions tailored for the healthcare industry.",
      bgImage: medintel,
      link: "/healthcare",
      buttonText: "Learn More"
    },
    {
      title: "IntelZen",
      description: "Enhancing customer and employee experiences through smart solutions.",
      bgImage: zedintel,
      link: "/human-experience",
      buttonText: "Learn More"
    },
    {
      title: "Tech Consulting",
      description: "Guiding businesses with cutting-edge technology strategies.",
      bgImage: tech,
      link: "/tech-consulting",
      buttonText: "Learn More"
    },
  ];

  const whyChooseUs = [
    { icon: Lightbulb, title: "Innovation Focus", description: "We are committed to leveraging the latest technologies to give you a competitive edge." },
    { icon: Globe, title: "Global Expertise", description: "Our diverse team brings a wealth of experience from various international markets." },
    { icon: CheckCircle2, title: "Measurable Results", description: "We prioritize solutions that deliver clear, quantifiable business impact and ROI." },
  ];

  // Loading screen
  if (isLoading) {
    return (
      <div
        className="fixed inset-0 flex flex-col items-center justify-center bg-cover bg-center z-[9999] transition-opacity duration-500"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center gap-3">
          <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4 md:mb-0 md:mr-4" />
          <div className="flex flex-col items-center justify-center">
            <img src={logoDark} alt="ZENTRAA Light Logo" className="block dark:hidden w-50 h-auto" />
            <img src={logoDark} alt="ZENTRAA Dark Logo" className="hidden dark:block w-50 h-auto" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat transition-colors duration-500"
        style={{ backgroundImage: `url(${bghome})` }}
      >
        <div className="absolute inset-0 dark:bg-background/80 bg-[#dbeeff]/80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-foreground">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-on-scroll">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transforming Ideas Into <span className="text-primary">Digital Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Strategic technology consulting and product engineering that drives innovation and delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="group shadow-glow bg-primary hover:text-black">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-foreground border-primary hover:bg-primary/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>
  {/* Featured Services Section */}
<section className="py-24 bg-background">
  <div className="container mx-auto px-4 lg:px-8">
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
        Business Solutions
      </h2>
      <p className="text-xl text-muted-foreground">
        Explore specialized solutions for key industries and business needs.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {featuredServices.map((service, index) => (
        <Card
          key={index}
          className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
          {/* Image Section */}
          <div className="h-56 overflow-hidden">
            <img
              src={service.bgImage}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <CardContent className="p-6 flex flex-col items-center text-center bg-[#16b8d4]/80 dark:bg-[#16b8d4]/80 rounded-xl">
            <div className="mb-3 text-white text-3xl">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-white">
              {service.title}
            </h3>
            <p className="text-white/90 text-sm mb-6 leading-relaxed">
              {service.description}
            </p>

            {/* Centered Learn More Button */}
            <Link to={service.link}>
              <Button
                size="sm"
                className="px-6 py-2 rounded-full font-medium border border-white text-[#00B7B3] bg-white hover:bg-black hover:text-white transition"
              >
                {service.buttonText}
              </Button>
            </Link>
          </CardContent>

        </Card>
      ))}
    </div>
  </div>
</section>



      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions tailored to accelerate your digital transformation journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`animate-on-scroll card-hover border-border/50 bg-card transition-all duration-700 translate-y-4 opacity-0`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      


      {/* Why Choose Us Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${whypart})` }} />
        <div className="absolute inset-0 bg-background/90 dark:bg-background/80" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Why Partner With Us?</h2>
            <p className="text-xl text-muted-foreground">
              Driving your success with unparalleled expertise and a commitment to quality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className={`animate-on-scroll text-center p-8 bg-card shadow-lg transition-all duration-700 translate-y-4 opacity-0`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-card-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat transition-colors duration-500"
        style={{ backgroundImage: `url(${bgbanner})` }}
      >
        <div className="absolute inset-0 bg-[#dbeeff]/80 dark:bg-background/80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can help you achieve your digital transformation goals.
            </p>
            <Link to="/contact">
              <Button size="lg" className="shadow-lg">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
