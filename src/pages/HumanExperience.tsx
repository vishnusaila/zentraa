import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Zap, CheckCircle2, LayoutDashboard, Cpu, Lock, Workflow, Monitor, Eye, Briefcase, Layers, TrendingUp, Smartphone, Users, BarChart } from "lucide-react"; 
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react"; 

import bghome from "@/assets/humanback.jpg";
import bgbanner from "@/assets/humancta.jpeg";
import bg from "@/assets/ai power.webp";

// 🚨 FALLBACK PLACEHOLDERS: Replace these URLs with your actual local image paths
const BGHOME_URL = bghome;
const BGBANNER_URL = bgbanner;
const BGSERVICE_URL = bg;

const HumanExperience = () => {
    const sectionRef = useRef<HTMLElement>(null);

    // --- Animation Setup (ROBUST Intersection Observer Logic) ---
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // FIX: Remove initial hiding/transform classes, let transition handle the smooth reveal
                        entry.target.classList.remove("translate-y-4", "opacity-0", "translate-x-10", "-translate-x-10");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
        
        // FALLBACK: Reveals content already in the viewport upon initial load
        setTimeout(() => {
            document.querySelectorAll(".animate-on-scroll").forEach(el => {
                if (el.getBoundingClientRect().top < window.innerHeight) {
                     el.classList.remove("translate-y-4", "opacity-0", "translate-x-10", "-translate-x-10");
                }
            });
        }, 50);

        return () => observer.disconnect();
    }, []);
    // --- End Animation Setup ---

    // Section 3: Key Features (Content adapted from brief)
    const features = [
        { icon: Cpu, title: "AI-Powered Categorization", description: "Automatically identifies issue types (electrical, plumbing, safety, housekeeping, etc.) from text or images." },
        { icon: Workflow, title: "Smart Assignment Engine", description: "Automatically assigns each issue to the right department or technician based on category and priority." },
        { icon: Monitor, title: "Real-Time Tracking", description: "Track every issue through its lifecycle with live status updates, notifications, and audit trails." },
        { icon: BarChart, title: "Analytics Dashboard", description: "Visualize performance, SLA compliance, and recurring issues across sites." },
        { icon: Layers, title: "Multi-Site Oversight", description: "Manage multiple properties or facilities effortlessly from one unified dashboard." },
        { icon: Zap, title: "Automation & Alerts", description: "Get instant notifications, performance alerts, and SLA reminders — keeping everyone aligned." },
    ];
    
    // Section 5: Our Vision Pillars (Content adapted from brief)
    const visionPillars = [
        { icon: Users, title: "Empowerment", description: "Enable every stakeholder—from tenants to technicians—to report, track, and resolve issues effortlessly." },
        { icon: Briefcase, title: "AI-Driven Governance", description: "Bring accountability and automation to every part of facility operations, ensuring SLAs and compliance are met." },
        { icon: LayoutDashboard, title: "Comprehensive Monitoring", description: "Access real-time dashboards, reports, and performance insights that help leadership make data-driven decisions." },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section (Section 0) */}
            <section
                ref={sectionRef}
                className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${BGHOME_URL})` }}
            >
                <div className="absolute inset-0 bg-background/80 dark:bg-background/80" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

                <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32 text-foreground"> 
                    <div className="max-w-4xl mx-auto text-center space-y-8 animate-on-scroll">
                        <h1 className="text-5xl md:text-6xl font-bold text-foreground opacity-0 animate-[fadeInUp_0.8s_ease-out_0.15s_forwards]">
                            <span className="text-primary">IntelZen<sup className="text-2xl md:text-3xl align-super font-bold tracking-tight">™</sup></span> Smarter Intelligent Facility Management. <span className="text-primary">Powered by AI.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground opacity-0 animate-[fadeInUp_0.8s_ease-out_0.35s_forwards]">
                            Transform the way you manage buildings, workplaces, and industrial sites with intelligent issue tracking, automated task routing, and real-time analytics—all in one platform.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link to="/contact">
                                <Button size="lg" className="group shadow-glow bg-primary hover:text-black">
                                    Request a Demo
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
        
                            <Button size="lg" variant="outline">See IntelZen™ in Action</Button>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Section 1: The Challenge & Section 2: The Solution */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                        
                        {/* LEFT: The Challenge (Section 1 Content) */}
                        <div className="space-y-6 animate-on-scroll translate-y-4 opacity-0 transition-all duration-700">
                            <h2 className="text-4xl font-bold text-foreground">Facility Management Is Complex — IntelZen™ Makes It Simple</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Managing multiple properties, offices, or plants involves hundreds of maintenance requests, safety checks, and service tasks every week. Without structure and visibility, issues go unresolved, SLAs are missed, and costs rise.
                            </p>
                            <p className="text-lg font-semibold text-primary/80 leading-relaxed">
                                IntelZen™ brings order, automation, and intelligence to the process—so nothing falls through the cracks.
                            </p>
                        </div>

                        {/* RIGHT: The Solution (Section 2 Content) */}
                        <div className="space-y-6 animate-on-scroll translate-y-4 opacity-0 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
                            <h2 className="text-4xl font-bold text-foreground">AI-Powered Issue Management for Modern Facilities</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                IntelZen™ is an <strong>AI-enabled platform</strong> that allows teams to <strong>capture, categorize, assign, and track</strong> facility-related issues in real time. Our smart engine analyzes every submission and routes it automatically to the right team for resolution.
                            </p>
                            
                            <h3 className="text-xl font-semibold text-foreground border-l-4 border-primary pl-3">Built For:</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-center space-x-2"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" /> <span>Property Management Firms – Streamline operations across multiple buildings and enhance tenant satisfaction.</span></li>
                                <li className="flex items-center space-x-2"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" /> <span>Corporate Offices – Ensure safe, efficient, and productive work environments.</span></li>
                                <li className="flex items-center space-x-2"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" /> <span>Industrial Facilities – Reduce downtime, improve asset reliability, and boost operational efficiency.</span></li>
                            </ul>
                            <Button className="mt-4">Explore Features</Button>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Section 3: Key Features (Staggered Slide Up Motion) */}
            <section className="py-24 bg-card">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll translate-y-4 opacity-0 transition-all duration-700">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-card-foreground">Powerful Features, Simple Experience</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card 
                                key={index} 
                                // Motion Effect: Staggered Slide Up
                                className="animate-on-scroll border-border/50 card-hover bg-background transition-all duration-700 translate-y-4 opacity-0"
                                style={{ transitionDelay: `${index * 120}ms` }} 
                            >
                                <CardContent className="p-6 space-y-4">
                                    <feature.icon className="h-10 w-10 text-primary" />
                                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: How IntelZen™ Works (Steps Layout) */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-16 text-foreground animate-on-scroll translate-y-4 opacity-0 transition-all duration-700">From Report to Resolution — Simplified</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[ 
                                { step: "01", title: "Capture", description: "Staff or tenants log issues via mobile app, web portal, or QR code." },
                                { step: "02", title: "Analyze", description: "IntelZen™’s AI reads, categorizes, and prioritizes the request." },
                                { step: "03", title: "Assign", description: "Automatically routes the issue to the right team or technician." },
                                { step: "04", title: "Resolve", description: "Track, validate, and close issues with full visibility and analytics." },
                            ].map((phase, index) => (
                                <div 
                                    key={index} 
                                    className="animate-on-scroll text-center space-y-4 translate-y-4 opacity-0 transition-all duration-700"
                                    style={{ transitionDelay: `${index * 150}ms` }}
                                >
                                    <div className="text-5xl font-bold text-primary/40">{phase.step}</div>
                                    <h3 className="text-xl font-semibold text-foreground">{phase.title}</h3>
                                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-12 animate-on-scroll translate-y-4 opacity-0 transition-all duration-700" style={{ transitionDelay: '800ms' }}>
                            <Button size="lg">Watch IntelZen™ Demo</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Our Vision (Adapted from Retizen Vision) */}
            <section className="py-24 bg-card">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-6xl mx-auto space-y-8 animate-on-scroll translate-y-4 opacity-0 transition-all duration-700">
                        <h2 className="text-4xl font-bold text-foreground mb-6">The IntelZen™ Vision: Intelligence. Clarity. Control.</h2>
                        
                        <div className="grid md:grid-cols-3 gap-8 pt-4">
                            {visionPillars.map((pillar, index) => (
                                <div 
                                    key={index} 
                                    className="animate-on-scroll p-6 bg-background rounded-lg shadow-md border-t-4 border-primary transition-all duration-700 translate-y-4 opacity-0"
                                    style={{ transitionDelay: `${index * 150}ms` }}
                                >
                                    <pillar.icon className="h-8 w-8 text-primary mb-3" />
                                    <h3 className="text-xl font-semibold text-foreground mb-2">{pillar.title}</h3>
                                    <p className="text-sm text-muted-foreground">{pillar.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Section 6: Insights & Analytics (NEW SECTION) */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 animate-on-scroll translate-y-4 opacity-0 transition-all duration-700">
                            <h2 className="text-4xl font-bold text-foreground">From Reactive to Predictive Operations</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                IntelZen™’s analytics go beyond tracking—they help you anticipate problems before they occur. Discover recurring issues, forecast maintenance needs, and benchmark performance across all your properties or departments using <strong>real-time data dashboards</strong>.
                            </p>
                            <h3 className="text-xl font-semibold text-primary pt-2">Key Metrics Visibility:</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li><CheckCircle2 className="h-5 w-5 text-primary inline mr-2" /> Top issue categories & recurring problems.</li>
                                <li><CheckCircle2 className="h-5 w-5 text-primary inline mr-2" /> Average resolution time vs. SLA compliance rate.</li>
                                <li><CheckCircle2 className="h-5 w-5 text-primary inline mr-2" /> Cost and resource utilization trends.</li>
                            </ul>
                        </div>
                        
                        {/* Visual Suggestion Placeholder */}
                        <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/50 animate-on-scroll translate-y-4 opacity-0 transition-all duration-700" style={{ transitionDelay: '300ms' }}>
                            <img 
                                src={bg}
                                alt="Analytics Dashboard" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Section 7 & 8: Value & Testimonials (Combined) */}
            <section className="py-24 bg-card">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
                        
                        {/* Value Highlights (Section 7) */}
                        <div className="space-y-6 md:col-span-1 animate-on-scroll translate-y-4 opacity-0 transition-all duration-700">
                            <h2 className="text-4xl font-bold text-foreground">The Smartest Way to Manage Operations</h2>
                            <ul className="space-y-3 text-muted-foreground">
                                <li><CheckCircle2 className="h-5 w-5 text-primary inline mr-2" /> Resolve issues faster with AI-driven workflows.</li>
                                <li><CheckCircle2 className="h-5 w-5 text-primary inline mr-2" /> Gain full visibility with data-backed insights.</li>
                                <li><CheckCircle2 className="h-5 w-5 text-primary inline mr-2" /> Strengthen compliance and operational control.</li>
                                <li><CheckCircle2 className="h-5 w-5 text-primary inline mr-2" /> Improve communication between teams and tenants.</li>
                                <li><CheckCircle2 className="h-5 w-5 text-primary inline mr-2" /> Scale seamlessly across multiple sites or organizations.</li>
                            </ul>
                        </div>

                        {/* Testimonials (Section 8) */}
                        <div className="space-y-8 md:col-span-2">
                            <Card className="animate-on-scroll bg-background transition-all duration-700 translate-y-4 opacity-0" style={{ transitionDelay: '300ms' }}>
                                <CardContent className="p-6">
                                    <p className="text-lg italic text-foreground mb-4">
                                        “IntelZen™ helped us cut issue resolution time by nearly 40%. Our teams can now focus on proactive maintenance instead of chasing pending tickets.”
                                    </p>
                                    <p className="font-semibold text-primary">— Operations Head, Global Property Management Firm</p>
                                </CardContent>
                            </Card>
                            <Card className="animate-on-scroll bg-background transition-all duration-700 translate-y-4 opacity-0" style={{ transitionDelay: '450ms' }}>
                                <CardContent className="p-6">
                                    <p className="text-lg italic text-foreground mb-4">
                                        “AI categorization alone saved us hours of manual triage each week. It’s transformed how we run our facilities.”
                                    </p>
                                    <p className="font-semibold text-primary">— Facilities Director, Fortune 500 Office</p>
                                </CardContent>
                            </Card>
                        </div>

                    </div>
                </div>
            </section>

            {/* Section 9: Final Call to Action */}
            <section
                className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${BGBANNER_URL})` }}
            >
                <div className="absolute inset-0 bg-background/90 dark:bg-background/80" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAw IDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8 animate-on-scroll">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                            Bring Zen to Your Facility Operations
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Join leading property and operations teams using IntelZen™ to make facility management intelligent, transparent, and effortless.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link to="/contact">
                                <Button size="lg" className="shadow-lg text-white hover:text-black dark:text-black hover:dark:text-white">
                                    Request a Demo
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button size="lg" variant="outline">
                                    Talk to Our Experts
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HumanExperience;
