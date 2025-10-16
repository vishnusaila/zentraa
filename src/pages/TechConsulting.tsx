import { useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Cloud,
  Cpu,
  Lock,
  Workflow,
  BarChart,
  ArrowRight,
  Map,
  TrendingUp,
  ShieldCheck,
  Zap,
  Code,
  Shield,
  Users,
  Database,
  Target,
  Server,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// 🚨 Images
import bghome from "@/assets/techback.png";
import bgbanner from "@/assets/techbg.jpg";
import tech1 from "@/assets/tech1.webp";
import tech2 from "@/assets/tech2.jpeg";
import tech3 from "@/assets/tech3.jpeg";
import bg from "@/assets/Consulting_Services.png";

const TechConsulting = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // --- Animation Setup (Intersection Observer Logic) ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "translate-y-4",
              "opacity-0",
              "translate-x-10",
              "-translate-x-10"
            );
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);
  // --- End Animation Setup ---

  // === NEW: Data from Index.jsx ===
  const services = [
    {
      icon: Code,
      title: "Product Design & Development",
      description:
        "End-to-end product engineering with modern tech stacks and agile methodologies.",
    },
    {
      icon: Shield,
      title: "Quality Engineering",
      description:
        "Comprehensive testing and quality assurance for flawless digital experiences.",
    },
    {
      icon: Users,
      title: "UI/UX Design",
      description:
        "Human-centered design that creates intuitive and engaging user experiences.",
    },
    {
      icon: Database,
      title: "Data Analytics & Engineering",
      description:
        "Transform data into actionable insights with advanced analytics solutions.",
    },
    {
      icon: Target,
      title: "Strategic Business Consulting",
      description:
        "Strategic guidance to align technology with your business objectives.",
    },
    {
      icon: Zap,
      title: "Talent Solutions",
      description:
        "Access top-tier tech talent to accelerate your digital transformation.",
    },
  ];

  const techStack = [
    "React & Next.js",
    "Node.js & Python",
    "AWS & Azure",
    "Docker & Kubernetes",
    "PostgreSQL & MongoDB",
    "Terraform & Ansible",
  ];

  const solutions = [
    {
      icon: BarChart,
      title: "Digital Transformation Strategy",
      description:
        "Define a clear technology roadmap that accelerates business outcomes and competitive advantage.",
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure Consulting",
      description:
        "Optimize cloud architecture, manage migration, and ensure scalability (AWS, Azure, GCP).",
    },
    {
      icon: Map,
      title: "Geospatial & Location Intelligence",
      description:
        "Leverage GIS and spatial data for advanced decision-making in Smart Cities and e-Governance.",
    },
    {
      icon: Cpu,
      title: "AI & Data Analytics",
      description:
        "Harness the power of AI and Big Data to automate processes and unlock new business insights.",
    },
    {
      icon: Lock,
      title: "Cybersecurity & Risk Management",
      description:
        "Protect digital assets with comprehensive security assessments and compliance solutions.",
    },
    {
      icon: Workflow,
      title: "DevOps & Software Modernization",
      description:
        "Accelerate software delivery with modern CI/CD pipelines, containerization, and automation.",
    },
  ];

  const techPillars = [
    {
      icon: Cloud,
      title: "Cloud-Native Architecture",
      description:
        "Design scalable, resilient, and cost-optimized infrastructure leveraging leading hyperscalers.",
      image: tech1,
    },
    {
      icon: Zap,
      title: "AI Integration & Data Science",
      description:
        "Implement machine learning models to extract critical intelligence and automate business processes.",
      image: tech2,
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Cybersecurity",
      description:
        "Establish Zero-Trust models and comprehensive risk frameworks to safeguard complex digital estates.",
      image: tech3,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bghome})` }}
      >
        <div className="absolute inset-0 bg-background/80 dark:bg-background/80" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Technology <span className="text-primary">Consulting</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Strategic guidance that accelerates digital transformation and
              drives long-term value
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-8 animate-on-scroll translate-y-4 opacity-0 transition-all duration-700">
            <h2 className="text-4xl font-bold text-foreground">
              Pioneering Management and Technology Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In an era of rapid technological change, making the right
              technology decisions is crucial for business success. Our
              technology consulting services help you navigate complexity,
              identify opportunities, and build a robust technology strategy
              that drives growth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We bring deep expertise across cloud computing, AI/ML,
              cybersecurity, and enterprise architecture. Our consultants work
              alongside your team to create actionable roadmaps for digital
              transformation.
            </p>
          </div>
        </div>
      </section>

      {/* === NEW SECTION 1: Our Services === */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-card-foreground">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions tailored to accelerate your digital
              transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="animate-on-scroll card-hover border-border/50 bg-background transition-all duration-700 translate-y-4 opacity-0"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Tech Pillars */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-card-foreground">
              Deep Technical Specialization
            </h2>
            <p className="text-xl text-muted-foreground">
              We don’t just advise — we deliver solutions built on proven
              expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {techPillars.map((pillar, index) => (
              <Card
                key={index}
                className={`animate-on-scroll p-0 border-border/50 shadow-xl transition-all duration-700 opacity-0 ${
                  index % 2 === 0 ? "-translate-x-10" : "translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="aspect-video overflow-hidden rounded-t-lg bg-primary/10">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <pillar.icon className="h-7 w-7 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Consulting Services */}
      {/* Our Consulting Services */}
        <section
        className="py-24 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bg})` }} // Replace with your preferred background image
        >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/80 dark:bg-background/70" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Our Consulting Services
            </h2>
            <p className="text-xl text-muted-foreground">
                Expert guidance across the entire technology spectrum.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
                <Card
                key={index}
                className="animate-on-scroll border-border/50 card-hover bg-card transition-all duration-700 translate-y-4 opacity-0"
                style={{ transitionDelay: `${index * 100}ms` }}
                >
                <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <solution.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                    {solution.title}
                    </h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
        </section>


      

      {/* === NEW SECTION 2: Our Technology Stack === */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Technology Stack
            </h2>
            <p className="text-xl text-muted-foreground">
              Building robust and scalable solutions using cutting-edge
              technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-border/50 bg-card shadow-sm transition-transform hover:scale-105 animate-on-scroll"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <Server className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium text-card-foreground text-center">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgbanner})` }}
      >
        <div className="absolute inset-0 bg-background/90 dark:bg-background/80" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to Accelerate Your Digital Transformation?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how our technology consulting can drive your
              business forward.
            </p>
            <Link to="/contact">
              <Button size="lg" className="shadow-lg">
                Get Started Today
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

export default TechConsulting;
