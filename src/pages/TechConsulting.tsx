import { useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Cloud, Cpu, Lock, Workflow, BarChart, Cog, ArrowRight, Layers, Map, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// 🚨 IMPORTANT: Image imports for backgrounds
import bghome from "@/assets/techback.png"; 
import bgbanner from "@/assets/techbg.jpg"; 
import tech1 from "@/assets/tech1.webp"; 
import tech2 from "@/assets/tech2.jpeg"; 
import tech3 from "@/assets/tech3.jpeg"; 

const TechConsulting = () => {
    const sectionRef = useRef<HTMLElement>(null);

    // --- Animation Setup (Intersection Observer Logic) ---
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Remove initial hiding/transform classes, triggering the CSS transition (motion)
                        entry.target.classList.remove("translate-y-4", "opacity-0", "translate-x-10", "-translate-x-10");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Apply observer to all elements that should animate on scroll
        document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
    // --- End Animation Setup ---

    const solutions = [
        {
            icon: BarChart,
            title: "Digital Transformation Strategy",
            description: "Define a clear technology roadmap that accelerates business outcomes and competitive advantage.",
        },
        {
            icon: Cloud,
            title: "Cloud & Infrastructure Consulting",
            description: "Optimize cloud architecture, manage migration, and ensure scalability (AWS, Azure, GCP).",
        },
        {
            icon: Map,
            title: "Geospatial & Location Intelligence",
            description: "Leverage GIS and spatial data for advanced decision-making in Smart Cities and e-Governance.",
        },
        {
            icon: Cpu,
            title: "AI & Data Analytics",
            description: "Harness the power of AI and Big Data to automate processes and unlock new business insights.",
        },
        {
            icon: Lock,
            title: "Cybersecurity & Risk Management",
            description: "Protect digital assets with comprehensive security assessments and compliance solutions.",
        },
        {
            icon: Workflow,
            title: "DevOps & Software Modernization",
            description: "Accelerate software delivery with modern CI/CD pipelines, containerization, and automation.",
        },
    ];

    // UPDATED CONTENT: Technology Focus Pillars with Image URLs
    const techPillars = [
        {
            icon: Cloud, title: "Cloud-Native Architecture", description: "Design scalable, resilient, and cost-optimized infrastructure leveraging leading hyperscalers.",
            image:tech1
        },
        {
            icon: Zap, title: "AI Integration & Data Science", description: "Implement machine learning models to extract critical intelligence and automate business processes.",
            image: tech2
        },
        {
            icon: ShieldCheck, title: "Enterprise Cybersecurity", description: "Establish Zero-Trust models and comprehensive risk frameworks to safeguard complex digital estates.",
            image: tech3
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section - Image Background, Responsive Overlay, and Consistent Width */}
            <section
                ref={sectionRef}
                className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bghome})` }}
            >
                {/* Overlay: Dark in dark mode, light in light mode, with grid pattern */}
                <div className="absolute inset-0 bg-background/80 dark:bg-background/80" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAi IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAi IGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

                <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-5xl md:text-6xl font-bold text-foreground opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
                            Technology <span className="text-primary">Consulting</span>
                        </h1>
                        <p className="text-xl text-muted-foreground opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
                            Strategic guidance that accelerates digital transformation and drives long-term value
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-6xl mx-auto space-y-8 animate-on-scroll translate-y-4 opacity-0 transition-all duration-700">
                        <h2 className="text-4xl font-bold text-foreground">Pioneering Management and Technology Solutions</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            In an era of rapid technological change, making the right technology decisions is crucial for 
                            business success. Our technology consulting services help you navigate complexity, identify 
                            opportunities, and build a robust technology strategy that drives growth. We specialize in 
                            integrating domain expertise with contemporary technologies at the highest standards.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We bring deep technical expertise across cloud computing, AI/ML, cybersecurity, and enterprise 
                            architecture. Our consultants work alongside your team to assess your current state, define your 
                            target architecture, and create actionable roadmaps for digital transformation, including niche 
                            areas like Geospatial data and E-Governance solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Solutions Grid - Staggered Slide Up Motion (bg-card for separation) */}
            <section className="py-24 bg-card">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll translate-y-4 opacity-0 transition-all duration-700">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-card-foreground">Our Consulting Services</h2>
                        <p className="text-xl text-muted-foreground">
                            Expert guidance across the entire technology spectrum
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <Card 
                                key={index} 
                                // Initial State: Hidden and slightly low for Slide Up
                                className="animate-on-scroll border-border/50 card-hover bg-background transition-all duration-700 translate-y-4 opacity-0"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <CardContent className="p-6 space-y-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <solution.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground">{solution.title}</h3>
                                    <p className="text-muted-foreground">{solution.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- NEW SECTION 1: Technology Consulting Pillars (Horizontal Slide-In Motion) --- */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll translate-y-4 opacity-0 transition-all duration-700">
                        <h2 className="text-4xl font-bold text-foreground">Deep Technical Specialization</h2>
                        <p className="text-xl text-muted-foreground">
                            We don't just advise; we deliver solutions built on proven expertise in critical domains.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {techPillars.map((pillar, index) => (
                            <Card 
                                key={index} 
                                // 🚨 Motion: Alternating Horizontal Slide-In
                                className={`animate-on-scroll p-0 border-border/50 shadow-xl transition-all duration-700 opacity-0 ${
                                    index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'
                                }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="aspect-video overflow-hidden rounded-t-lg bg-primary/10">
                                    <img 
                                        src={pillar.image} 
                                        alt={pillar.title} 
                                        className="w-full h-full object-cover opacity-60"
                                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/600x400/2a3141/ffffff?text=Tech+Image+Placeholder' }}
                                    />
                                </div>
                                <CardContent className="p-6 space-y-3">
                                    <pillar.icon className="h-7 w-7 text-primary" />
                                    <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
                                    <p className="text-muted-foreground text-sm">{pillar.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Approach Section - Staggered Slide Up Motion */}
            <section className="py-24 bg-card">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-16 text-card-foreground animate-on-scroll translate-y-4 opacity-0 transition-all duration-700">Our Consulting Approach</h2>
                        <div className="space-y-8">
                            {[
                                {
                                    title: "Discovery & Assessment",
                                    description: "We start by understanding your business goals, current technology landscape, and pain points.",
                                },
                                {
                                    title: "Strategy Development",
                                    description: "We craft a comprehensive technology strategy aligned with your business objectives and market realities.",
                                },
                                {
                                    title: "Roadmap Creation",
                                    description: "We develop detailed implementation roadmaps with clear milestones, timelines, and success metrics.",
                                },
                                {
                                    title: "Implementation Support",
                                    description: "We provide hands-on support throughout implementation, ensuring successful execution of the strategy.",
                                },
                            ].map((phase, index) => (
                                <Card 
                                    key={index} 
                                    // Motion Effect Applied
                                    className="animate-on-scroll border-border/50 bg-background transition-all duration-700 translate-y-4 opacity-0"
                                    style={{ transitionDelay: `${index * 120}ms` }}
                                >
                                    <CardContent className="p-8">
                                        <div className="flex items-start space-x-4">
                                            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                                                {index + 1}
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-xl font-semibold text-foreground">{phase.title}</h3>
                                                <p className="text-muted-foreground">{phase.description}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* --- NEW SECTION 2: Why Choose Zentraa (Metrics & Vision) --- */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 animate-on-scroll translate-y-4 opacity-0 transition-all duration-700">
                            <h2 className="text-4xl font-bold text-foreground">Future-Proofing Your Business</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our consulting is focused not just on current problems, but on creating an **adaptable, future-proof digital core**. We deliver technology that scales, secures, and drives continuous innovation, ensuring you stay ahead of market demands.
                            </p>
                            <ul className="space-y-3 pt-4">
                                <li className="flex items-start space-x-2 text-foreground">
                                    <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                    <span>**2x faster ROI** via optimized cloud spending.</span>
                                
                                </li>
                                <li className="flex items-start space-x-2 text-foreground">
                                    <BarChart className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                    <span>**98% project success rate** based on measurable business goals.</span>
                                </li>
                            </ul>
                            <Link to="/about">
                                <Button size="lg" variant="outline" className="mt-4">
                                    Read Success Stories
                                </Button>
                            </Link>
                        </div>
                        
                        <div className="relative p-8 bg-card rounded-xl shadow-2xl animate-on-scroll translate-y-4 opacity-0 transition-all duration-700" style={{ transitionDelay: '300ms' }}>
                            <h3 className="text-2xl font-bold text-foreground mb-4">A Visionary Partnership</h3>
                            <p className="text-muted-foreground italic mb-6">
                                "Zentraa provides the rare combination of deep technical intelligence and true business foresight. They don't just solve problems; they anticipate the future of our digital strategy."
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                    VP
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Jane Doe</p>
                                    <p className="text-sm text-muted-foreground">VP of Strategy, GlobalTech</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* CTA Section - Image Background, Responsive Overlay */}
            <section
                className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgbanner})` }}
            >
                {/* Overlay: Light (bg-background/90) in light mode for dark text. Dark (dark:bg-background/80) in dark mode for light text. */}
                <div className="absolute inset-0 bg-background/90 dark:bg-background/80" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAi IGhlaWdodD0iNjAi IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAw IDAgMTAi IGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center space-y-8 animate-on-scroll">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                            Ready to Accelerate Your Digital Transformation?
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Let's discuss how our technology consulting can drive your business forward.
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
