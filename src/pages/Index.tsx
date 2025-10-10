import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Database, Users, Zap, Shield, Target, CheckCircle2, Server, Globe, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
// Assuming this path is correct and the asset is being processed by your build tool
import bghome from "@/assets/homebg.png" 
import bgbanner from "@/assets/bgbanner.jpg" 
import bg from "@/assets/web2.webp" 

import logod from "@/assets/logo-b.png" 
import whypart from "@/assets/index.jpg" 
// Assuming logo import from common components or assets for loader
// import logo from "@/assets/zentraa-logo.png"; // Removed logo import

const Index = () => {
    // 🚨 State for controlling the loading overlay visibility
    const [isLoading, setIsLoading] = useState(true); 
    
    const heroRef = useRef<HTMLDivElement>(null);

    // 1. Loading screen control logic
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            
            // 🚨 FIX: Force initial animation reveal 50ms after loading screen disappears
            // This ensures content already in the viewport becomes visible instantly after load.
            setTimeout(() => {
                document.querySelectorAll(".animate-on-scroll").forEach(el => {
                    if (el.classList.contains('opacity-0')) {
                        el.classList.remove("translate-y-4", "opacity-0");
                    }
                });
            }, 50);

        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    // 2. Scroll animation observer logic
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // 🚨 FIX: Remove initial hiding classes, let transition handle the smooth reveal
                        entry.target.classList.remove("translate-y-4", "opacity-0");
                        
                        // Optional: Stop observing element once animated
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Note: The 'animate-on-scroll' class is now just a selector
        document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const services = [
        {
            icon: Code,
            title: "Product Design & Development",
            description: "End-to-end product engineering with modern tech stacks and agile methodologies.",
        },
        {
            icon: Shield,
            title: "Quality Engineering",
            description: "Comprehensive testing and quality assurance for flawless digital experiences.",
        },
        {
            icon: Users,
            title: "UI/UX Design",
            description: "Human-centered design that creates intuitive and engaging user experiences.",
        },
        {
            icon: Database,
            title: "Data Analytics & Engineering",
            description: "Transform data into actionable insights with advanced analytics solutions.",
        },
        {
            icon: Target,
            title: "Strategic Business Consulting",
            description: "Strategic guidance to align technology with your business objectives.",
        },
        {
            icon: Zap,
            title: "Talent Solutions",
            description: "Access top-tier tech talent to accelerate your digital transformation.",
        },
    ];

    const expertise = [
        "Strategic Business Consulting",
        "Technology Consulting",
        "Managed Services",
        "Cloud Migration & DevOps",
        "AI & Machine Learning",
        "Cybersecurity",
    ];

    const techStack = [
        "React & Next.js",
        "Node.js & Python",
        "AWS & Azure",
        "Docker & Kubernetes",
        "PostgreSQL & MongoDB",
        "Terraform & Ansible",
    ];

    const whyChooseUs = [
        {
            icon: Lightbulb,
            title: "Innovation Focus",
            description: "We are committed to leveraging the latest technologies to give you a competitive edge.",
        },
        {
            icon: Globe,
            title: "Global Expertise",
            description: "Our diverse team brings a wealth of experience from various international markets.",
        },
        {
            icon: CheckCircle2,
            title: "Measurable Results",
            description: "We prioritize solutions that deliver clear, quantifiable business impact and ROI.",
        },
    ];

    // Render the loading overlay with custom image background
    if (isLoading) {
        return (
             <div 
            className="fixed inset-0 flex flex-col items-center justify-center bg-cover bg-center z-[9999] transition-opacity duration-500"
            style={{ backgroundImage: `url(${bg})` }}
            >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 flex items-center">
                {/* Spinner + Logo horizontally */}
                <div className="flex items-center justify-center gap-3">
                {/* Spinner */}
                <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin" />

                {/* Logos */}
                <div className="flex items-center justify-center">
                    {/* Light Theme Logo */}
                    <img
                    src={logod}
                    alt="ZENTRAA Light Logo"
                    className="block dark:hidden w-55 h-auto"
                    />
                    {/* Dark Theme Logo */}
                    <img
                    src={logod}
                    alt="ZENTRAA Dark Logo"
                    className="hidden dark:block w-55 h-auto"
                    />
                </div>
                </div>
            </div>
            </div>


        );
    }

    return (
        // Uses bg-background, which is White (light) or #2a3141 (dark)
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bghome})` }}
            >
                {/* Dark overlay over image uses the background color for blend */}
                <div className="absolute inset-0 bg-background/80" /> 
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAi IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAi IGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
                
                {/* Text color is explicitly set to WHITE/NEAR-WHITE (foreground) for readability on dark overlay */}
                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-foreground"> 
                    {/* Hero content animation */}
                    <div className="max-w-4xl mx-auto text-center space-y-8 animate-on-scroll">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            Transforming Ideas Into{" "}
                            <span className="text-primary">Digital Excellence</span> 
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
                                <Button size="lg" variant="outline" className="text-foreground border-primary hover:bg-primary/10 ">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Fade to background color */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
            </section>

            {/* Services Section - SLIDE UP STAGGERED (Fixed for Visibility) */}
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
                                // 🚨 Initial hidden state (translate-y-4 opacity-0) for smooth reveal
                                className={`animate-on-scroll card-hover border-border/50 bg-card transition-all duration-700 translate-y-4 opacity-0`}
                                style={{ transitionDelay: `${index * 150}ms` }} // Changed to transitionDelay for smoother staggered effect
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

            {/* Why Choose Us Section (New Section 1) - FIXED PARALLAX BACKGROUND */}
            <section className="py-24 relative overflow-hidden">
                {/* 1. Fixed Parallax Image Layer */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" 
                    style={{ backgroundImage: `url(${whypart})` }} // Using 'bg' image for parallax effect
                />
                
                {/* 2. Content Overlay Layer (Dark/Light responsive tint for readability) */}
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
                                // 🚨 Initial hidden state (translate-y-4 opacity-0) for smooth reveal
                                className={`animate-on-scroll text-center p-8 bg-card shadow-lg transition-all duration-700 translate-y-4 opacity-0`}
                                style={{ transitionDelay: `${index * 200}ms` }} // Staggered delay
                            >
                                <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                                <h3 className="text-2xl font-semibold text-card-foreground mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expertise Section (Progress Bars) - SLIDE UP (retains simple fade-in) */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="animate-on-scroll space-y-6">
                                <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Expertise</h2>
                                <p className="text-xl text-muted-foreground">
                                    We combine deep technical knowledge with strategic business insight to deliver solutions that drive real value.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {expertise.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                            <span className="text-foreground">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/about">
                                    <Button size="lg" variant="outline" className="mt-4">
                                        Discover More
                                    </Button>
                                </Link>
                            </div>

                            <div className="relative animate-on-scroll">
                                <div className="aspect-square rounded-2xl bg-primary opacity-20 blur-3xl absolute -inset-4" />
                                <Card className="relative border-border/50 shadow-elegant bg-card">
                                    <CardContent className="p-8 space-y-6">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium text-muted-foreground">Client Satisfaction</span>
                                                <span className="text-2xl font-bold text-primary">98%</span>
                                            </div>
                                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                                <div className="h-full w-[98%] bg-primary rounded-full" />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium text-muted-foreground">Project Success Rate</span>
                                                <span className="text-2xl font-bold text-primary">95%</span>
                                            </div>
                                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                                <div className="h-full w-[95%] bg-primary rounded-full" />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium text-muted-foreground">On-Time Delivery</span>
                                                <span className="text-2xl font-bold text-primary">97%</span>
                                            </div>
                                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                                <div className="h-full w-[97%] bg-primary rounded-full" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section (New Section 2) - Inherits text color from global theme */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Technology Stack</h2>
                        <p className="text-xl text-muted-foreground">
                            Building robust and scalable solutions using cutting-edge and industry-leading technologies.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center p-4 rounded-xl border border-border/50 bg-card shadow-sm transition-transform hover:scale-105 animate-on-scroll"
                                style={{ transitionDelay: `${index * 80}ms` }} // Changed to transitionDelay
                            >
                                <Server className="h-8 w-8 text-primary mb-2" />
                                <span className="text-sm font-medium text-card-foreground text-center">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section (The Accent Block with Image) - FIXED FOR TEXT COLOR */}
            <section 
                className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgbanner})` }} 
            >
                {/* Overlay: In Light Mode (default) it's mostly white (bg-background/90) for black text contrast.
                    In Dark Mode, it's dark charcoal (dark:bg-background/80) for white text contrast.
                */}
                <div className="absolute inset-0 bg-background/90 dark:bg-background/80" /> 
                {/* Grid pattern overlay (opacity 10%) */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAi IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAi IGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" />
                
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center space-y-8 animate-on-scroll">
                        {/* H2 text uses text-foreground: Black (light) / Near-White (dark) */}
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                            Ready to Transform Your Business?
                        </h2>
                        {/* P text uses muted-foreground (dark gray/light gray) for secondary text */}
                        <p className="text-xl text-muted-foreground">
                            Let's discuss how we can help you achieve your digital transformation goals.
                        </p>
                        <Link to="/contact">
                            {/* Primary button is visible against both light and dark overlays */}
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