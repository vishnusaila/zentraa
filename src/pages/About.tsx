import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Target, Users, Zap, Award, ArrowRight, Lightbulb, TrendingUp, HeartHandshake, ShieldCheck, Code, Settings } from "lucide-react"; 
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react"; 

// IMPORTANT: Assuming these images exist and are used for the backgrounds
import bghome from "@/assets/bgabout.jpg";
import bgbanner from "@/assets/aboutcta.jpg";
// Assuming you have team member images
import teamMember1 from "@/assets/about.jpg"; // Placeholder
import teamMember2 from "@/assets/about.jpg"; // Placeholder

import medintel from "@/assets/medintel.jpg";
import zedintel from "@/assets/intelzen.png";
import tech from "@/assets/tech.png";

const About = () => {
  // --- Animation Setup (Intersection Observer Logic) ---
  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // 🚨 FIX: Remove initial hiding/transform classes, triggering the transition (motion)
                    entry.target.classList.remove("translate-y-4", "opacity-0", "translate-x-10", "-translate-x-10");
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // --- UPDATED CORE VALUES ---
  const values = [
    {
      icon: Lightbulb,
      title: "Strategic Innovation",
      description: "We don't just build; we strategize, leveraging emerging tech to create future-proof solutions for our clients.",
    },
    {
      icon: TrendingUp,
      title: "Impactful Results",
      description: "Our focus is on tangible business outcomes, ensuring every project drives measurable growth and efficiency.",
    },
    {
      icon: HeartHandshake,
      title: "Client Partnership",
      description: "We work as an extension of your team, fostering deep trust and collaborative transparency from concept to launch.",
    },
    {
      icon: ShieldCheck,
      title: "Uncompromising Quality",
      description: "We commit to the highest standards of engineering and security, delivering reliable and resilient products.",
    },
  ];

  // --- NEW TEAM DATA ---
  const team = [
    {
      name: "Elara Vance",
      title: "Chief Executive Officer",
      image: teamMember1,
      bio: "A visionary leader with 20+ years in tech, driving our mission to integrate strategic consulting with innovative engineering.",
    },
    {
      name: "Marcus Chen",
      title: "Chief Technology Officer",
      image: teamMember2,
      bio: "A full-stack architecture expert, leading our technical teams and ensuring our solutions are scalable and cutting-edge.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Themed and Image Background */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bghome})` }}
      >
        <div className="absolute inset-0 bg-background/80 dark:bg-background/80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAi IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAi IGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
              About <span className="text-primary">Zentraa</span>
            </h1>
            <p className="text-xl text-muted-foreground opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
              Empowering businesses through innovative technology solutions and strategic consulting
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12 animate-on-scroll">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Zentraa, we're on a mission to transform businesses through **strategic technology consulting** and
                world-class product engineering. We combine deep technical expertise with business acumen to deliver
                solutions that not only meet but exceed our clients' expectations.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are a team of passionate technologists, strategists, and innovators dedicated to helping
                organizations navigate their digital transformation journey. With years of experience across
                multiple industries, we bring a unique blend of technical prowess and strategic thinking to
                every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - FIXED PARALLAX BACKGROUND + Staggered Slide Up Motion */}
      <section className="py-24 relative overflow-hidden">
        {/* 1. Fixed Parallax Image Layer */}
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" 
            style={{ backgroundImage: `url(${teamMember1})` }}
        />
        
        {/* 2. Content Overlay Layer (Dark/Light responsive tint for readability) */}
        <div className="absolute inset-0 bg-background/90 dark:bg-background/80" />
        
        {/* 3. Content Container (z-10) */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              **Impressive, Client-Focused Principles** that drive our performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index} 
                // Motion: Starts low and hidden, transitions up
                className="animate-on-scroll border-border/50 hover:shadow-xl transition-shadow duration-700 bg-card translate-y-4 opacity-0"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- Leadership & Team Section - Alternating Slide Motion --- */}
      

      {/* --- Our Technology & Approach --- Staggered Slide Up Motion */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-card-foreground">Our Approach & Technology</h2>
              <p className="text-xl text-muted-foreground">
                Merging proven methodologies with a modern, future-ready tech stack.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {[{
                    title: "Agile Delivery", icon: Code,
                    description: "We adopt a highly iterative and collaborative Agile methodology to deliver working software faster, adapting seamlessly to changing requirements."
                }, {
                    title: "Cloud-Native Focus", icon: Settings,
                    description: "Building for scale and resilience using modern cloud services (AWS, Azure, Google Cloud). This ensures cost-efficiency, global availability, and robust security."
                }, {
                    title: "Outcome-Centric", icon: Target,
                    description: "Every decision is backed by data. We use analytics and metrics to validate product features and strategic direction, ensuring technology meets business objectives."
                }].map((phase, index) => (
                <div 
                    key={index} 
                    // Motion: Starts low and hidden, transitions up
                    className="animate-on-scroll space-y-4 p-6 border-l-4 border-primary/70 bg-background rounded-lg translate-y-4 opacity-0 transition-all duration-700"
                    style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <phase.icon className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-semibold text-foreground">{phase.title}</h3>
                  </div>
                  <p className="text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Alternating background (bg-card) */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "200+", label: "Happy Clients" },
              { number: "50+", label: "Team Members" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Services Mission Section */}
      <section className="py-24 bg-gray-50 dark:bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* MedIntel */}
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-card cursor-pointer">
              <div className="h-64 overflow-hidden">
                <img
                  src={medintel}
                  alt="MedIntel"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-lg text-foreground mb-4">
                  MedIntel<sup className="text-1xl md:text-1xl align-super">™</sup> transforms healthcare through innovative digital solutions, empowering smarter decisions, better patient care, and operational excellence.
                </p>
                <Link to="/healthcare">
                  <Button size="sm" className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>

            {/* IntelZen */}
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-card cursor-pointer">
              <div className="h-64 overflow-hidden">
                <img
                  src={zedintel}
                  alt="IntelZen"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-lg text-foreground mb-4">
                  IntelZen<sup className="text-1xl md:text-1xl align-super">™</sup> enhances human experiences with smart solutions, creating seamless engagement and impactful interactions across teams and customers.
                </p>
                <Link to="/human-experience">
                  <Button size="sm" className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>

            {/* Tech Consulting */}
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-card cursor-pointer">
              <div className="h-64 overflow-hidden">
                <img
                  src={tech}
                  alt="Tech Consulting"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-lg text-foreground mb-4">
                  Our tech consulting empowers businesses with cutting-edge strategies, transforming operations and enabling measurable growth and innovation.
                </p>
                <Link to="/tech-consulting">
                  <Button size="sm" className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section (The Accent Block with Image) */}
      <section
        className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgbanner})` }}
      >
        <div className="absolute inset-0 bg-background/90 dark:bg-background/80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAi IGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAi IGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to start your digital journey?
            </h2>
            <p className="text-xl text-muted-foreground">
              Contact us today for a strategic consultation.
            </p>
            <Link to="/contact">
              <Button size="lg" className="shadow-lg text-white hover:text-black dark:text-black hover:dark:text-white">
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

export default About;