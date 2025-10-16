import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Briefcase, Heart, TrendingUp, Users, Coffee, Award, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// 🚨 IMPORTANT: Import the same background images used in Index.tsx and About.tsx
import bghome from "@/assets/careerbg.jpg"; 
import bgbanner from "@/assets/careercta.jpg"; 

const Careers = () => {
    // --- Animation Setup (Intersection Observer Logic) ---
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // 🚨 REMOVE initial hiding/transform classes to trigger the CSS transition (motion)
                        entry.target.classList.remove("translate-y-4", "scale-95", "opacity-0", "-translate-x-10");
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

    const benefits = [
        {
            icon: TrendingUp,
            title: "Career Growth",
            description: "Continuous learning opportunities and clear career progression paths.",
        },
        {
            icon: Users,
            title: "Great Team",
            description: "Work with talented, passionate professionals in a collaborative environment.",
        },
        {
            icon: Heart,
            title: "Work-Life Balance",
            description: "Flexible work arrangements and generous time-off policies.",
        },
        {
            icon: Coffee,
            title: "Modern Workplace",
            description: "State-of-the-art facilities and tools to do your best work.",
        },
        {
            icon: Award,
            title: "Competitive Benefits",
            description: "Comprehensive health coverage, retirement plans, and performance bonuses.",
        },
        {
            icon: Briefcase,
            title: "Exciting Projects",
            description: "Work on cutting-edge technology projects for leading global brands.",
        },
    ];

    const openings = [
        {
            title: "Senior Full Stack Developer",
            location: "Remote / Hybrid",
            type: "Full-time",
            description: "Build scalable web applications using modern JavaScript frameworks.",
        },
        {
            title: "DevOps Engineer",
            location: "Remote",
            type: "Full-time",
            description: "Design and maintain CI/CD pipelines and cloud infrastructure.",
        },
        {
            title: "UI/UX Designer",
            location: "Hybrid",
            type: "Full-time",
            description: "Create beautiful, user-centered designs for web and mobile applications.",
        },
        {
            title: "Data Engineer",
            location: "Remote",
            type: "Full-time",
            description: "Build data pipelines and analytics solutions for enterprise clients.",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section - Image Background, Responsive Overlay, and Consistent Width */}
            <section 
                className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bghome})` }}
            >
                {/* Overlay: Dark in dark mode, light in light mode */}
                <div className="absolute inset-0 bg-background/80 dark:bg-background/80" /> 
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
                
                <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-5xl md:text-6xl font-bold text-foreground opacity-0 animate-[fadeInUp_0.8s_ease-out_0.1s_forwards]">
                            Join Our <span className="text-primary">Team</span>
                        </h1>
                        <p className="text-xl text-muted-foreground opacity-0 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards]">
                            Build your career with a company that values innovation, collaboration, and continuous growth
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Join Section - MOTION: ZOOM/SCALE-IN FADE */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Why Join Zentraa?</h2>
                        <p className="text-xl text-muted-foreground">
                            We're committed to creating an environment where talented people can thrive
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card 
                                key={index} 
                                // 🚨 Initial State: scale-95 opacity-0 for zoom-in fade effect
                                className="animate-on-scroll border-border/50 card-hover bg-card transition-all duration-700 scale-95 opacity-0"
                                style={{ transitionDelay: `${index * 120}ms` }}
                            >
                                <CardContent className="p-6 space-y-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <benefit.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-card-foreground">{benefit.title}</h3>
                                    <p className="text-muted-foreground">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions - MOTION: STAGGERED RIGHT SLIDE-IN */}
            <section className="py-24 bg-card">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-card-foreground">Open Positions</h2>
                        <p className="text-xl text-muted-foreground">
                            Find your next opportunity and grow with us
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {openings.map((job, index) => (
                            <Card 
                                key={index} 
                                // 🚨 Initial State: -translate-x-10 opacity-0 for slide-in from right effect
                                className="animate-on-scroll border-border/50 hover:shadow-elegant transition-all duration-700 bg-background -translate-x-10 opacity-0"
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <CardContent className="p-8">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-semibold text-foreground">{job.title}</h3>
                                            <p className="text-muted-foreground">{job.description}</p>
                                            <div className="flex flex-wrap gap-3 text-sm">
                                                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                                                    {job.location}
                                                </span>
                                                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
                                                    {job.type}
                                                </span>
                                            </div>
                                        </div>
                                        {/* 🚨 UPDATED LINK: Points to ApplyPage with job title parameter */}
                                        <Link to={`/apply?job=${encodeURIComponent(job.title)}`}>
                                            <Button>Apply Now</Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Image Background, Responsive Overlay, and Consistent Width */}
            <section 
                className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgbanner})` }} 
            >
                {/* Overlay: Light (bg-background/90) in light mode for black text. Dark (dark:bg-background/80) in dark mode for white text. */}
                <div className="absolute inset-0 bg-background/90 dark:bg-background/80" /> 
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAi IGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAw IDAgMTAi IGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" />
                
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center space-y-8 animate-on-scroll">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                            Don't See The Right Role?
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            We're always looking for talented individuals. Send us your resume and let's talk!
                        </p>
                        {/* 🚨 UPDATED LINK: Points to a generic application path */}
                        <Link to="/apply"> 
                            <Button size="lg" className="shadow-lg">
                                Get In Touch
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

export default Careers;
