import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, Shield, Activity, Users, Database, Smartphone, ArrowRight, TrendingUp, Zap, Server, ShieldCheck, Cpu, Gauge, Clock, RefreshCw, Layers, BarChart, ShoppingCart, MapPin, Tablet, MoveRight } from "lucide-react"; 
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// 🚨 IMPORTANT: Image imports
import bghome from "@/assets/healthbg.jpg"; 
import bgbanner from "@/assets/healthcta.webp"; 
import m2 from "@/assets/medintel2.jpg";
import m3 from "@/assets/medintel3.jpg";
import m4 from "@/assets/medintel4.jpg";

const Healthcare = () => {
    // --- Animation Setup (Intersection Observer Logic) ---
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
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

    const solutions = [
        { icon: Layers, title: "Seamless Integration Hub", description: "Comprehensive tools for Manufacturers to manage products/orders and Practices to manage providers/orders." },
        { icon: BarChart, title: "Advanced Analytics", description: "Track revenue trends, market share analysis, and customer retention with real-time dashboards." },
        { icon: ShoppingCart, title: "Smart Inventory Management", description: "AI-powered inventory control with color-coded alerts, automated reordering, and category filtering." },
        { icon: MapPin, title: "Provider Network Management", description: "Comprehensive relationship management including satisfaction tracking and contract renewals." },
        { icon: Tablet, title: "Patient Eligibility (IVR)", description: "Quick eligibility checks via IVR directly embedded in the system for fast, compliant ordering." },
        { icon: ShieldCheck, title: "Enterprise Security", description: "Bank-level encryption, HIPAA compliance, and SOC 2 certification for complete data protection." },
    ];

    const successMetrics = [
        { icon: Gauge, value: "18%", label: "Inventory Cost Reduction" },
        { icon: Clock, value: "35%", label: "Faster Order Fulfillment" },
        { icon: RefreshCw, value: "99.99%", label: "Compliance Score" },
    ];

    const outcomes = [
        { icon: Zap, title: "Accelerated Supply Chain", description: "Enabling clinical centers and medical merchants to directly contact manufacturers and place orders." },
        { icon: TrendingUp, title: "Data-Driven Production", description: "Manufacturers gain instant, granular insight into clinic demand and product needs for optimal production planning." },
    ];

    const compliance = [
        { icon: ShieldCheck, title: "Automated Audit Trails", description: "Every transaction, inventory adjustment, and eligibility check is logged automatically for simplified reporting." },
        { icon: Server, title: "256-bit Encryption & SOC 2", description: "Guaranteeing data integrity and security across the entire manufacturer-to-clinic supply chain." },
    ];

    const galleryImages = [
        { src: m3, title: "Automated Reordering Workflow", description: "Digital management of supply restocking processes." },
        { src: m4, title: "Secure Order Placement", description: "Ensuring HIPAA-compliant order and patient eligibility data transfer." },
        { src: m2, title: "Practice Inventory Dashboard", description: "Real-time visualization of clinical supply levels." },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section 
                className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bghome})` }}
            >
                <div className="absolute inset-0 bg-background/80 dark:bg-background/80" /> 
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
                
                <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-5xl md:text-6xl font-bold text-foreground opacity-0 animate-[fadeInUp_0.8s_ease-out_0.1s_forwards]">
                           <span className="text-primary">MedIntel<sup className="text-2xl md:text-3xl align-super font-bold tracking-tight">™</sup> </span> Transform your End to End Practice Integration 
                        </h1>
                        <p className="text-xl text-muted-foreground opacity-0 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards]">
                            A vital software product connecting Clinics, Medical Centers and Equipment Manufacturers for seamless Ordering, Logistics, Insurance verification (CMS, Private Billers), Compliance (EMR Integration) and Home delivery in the DME world
                        </p>
                    </div>
                </div>
            </section>

            {/* Clinical Outcomes & Compliance Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Outcomes Section */}
                    <div className="max-w-6xl mx-auto space-y-8 p-8 md:p-12 border border-primary/30 rounded-xl shadow-2xl shadow-primary/10 bg-card mb-16 animate-on-scroll">
                        <h2 className="text-4xl font-bold text-foreground mb-6 text-center">Manufacturer-to-Clinic Integration</h2>
                        
                        <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
                            <div className="space-y-6">
                                {outcomes.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className="flex items-start space-x-4 p-4 bg-background rounded-lg shadow-md animate-on-scroll opacity-0 -translate-x-10 transition-all duration-700"
                                        style={{ transitionDelay: `${index * 150}ms` }}
                                    >
                                        <item.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-foreground border-l-4 border-primary pl-3">Centralized Ordering and Supply Chain</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    MedIntel<sup className="text-xs align-super font-semibold tracking-tight">™</sup> acts as the <strong>central hub</strong> where clinical center workers and medical merchants can directly place equipment and supply orders to manufacturers. This cuts out unnecessary layers, speeds up delivery, and provides manufacturers with accurate, real-time demand signals.
                                </p>
                            </div>
                        </div>

                        <div className="w-full aspect-video overflow-hidden shadow-xl border border-border/50 rounded-lg mt-8">
                            <img 
                                src={galleryImages[0].src}
                                alt="Centralized order management dashboard" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Compliance Section */}
                    <div className="max-w-6xl mx-auto space-y-8 p-8 md:p-12 border border-primary/30 rounded-xl shadow-2xl shadow-primary/10 bg-card animate-on-scroll">
                        <h2 className="text-4xl font-bold text-foreground mb-6 text-center">Regulatory Confidence & Security</h2>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-6 md:order-first">
                                {compliance.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className="flex items-start space-x-4 p-4 bg-background rounded-lg shadow-md animate-on-scroll opacity-0 translate-x-10 transition-all duration-700"
                                        style={{ transitionDelay: `${index * 150}ms` }}
                                    >
                                        <item.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="space-y-6 md:order-last">
                                <h3 className="text-2xl font-bold text-foreground border-l-4 border-primary pl-3">Iron-Clad Governance Framework</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    MedIntel<sup className="text-xs align-super font-semibold tracking-tight">™</sup> delivers a fully governed, audit-ready data environment that connects manufacturers and clinics securely, ensuring every order and transaction maintains <strong>complete data protection and regulatory compliance</strong>.
                                </p>
                                <div className="aspect-video rounded-lg overflow-hidden shadow-xl border border-border/50">
                                    <img 
                                        src={galleryImages[2].src}
                                        alt="HIPAA compliant security interface" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MedIntel Success Metrics */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Quantifiable Supply Chain Impact</h2>
                        <p className="text-xl text-muted-foreground">
                            Proven results optimizing logistics and reducing administrative overhead.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {successMetrics.map((metric, index) => (
                            <Card 
                                key={index} 
                                className="animate-on-scroll text-center p-8 bg-card shadow-lg transition-all duration-700 translate-y-4 opacity-0"
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <metric.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                                <div className="text-5xl font-bold text-primary mb-2">{metric.value}</div>
                                <p className="text-lg font-semibold text-card-foreground">{metric.label}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-24 bg-card">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-card-foreground">MedIntel<sup className="text-2xl md:text-2xl align-super">™</sup> Features</h2>
                        <p className="text-xl text-muted-foreground">
                            Comprehensive tools designed specifically for manufacturers, practices, and providers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <Card 
                                key={index} 
                                className="animate-on-scroll border-border/50 card-hover bg-background transition-all duration-700 translate-y-4 opacity-0"
                                style={{ transitionDelay: `${index * 150}ms` }} 
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

            {/* Healthcare Image Gallery */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Analytics & Inventory In Action</h2>
                        <p className="text-xl text-muted-foreground">
                            Visualizing the critical data streams for manufacturers and clinics.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-7xl mx-auto">
                        {galleryImages.map((item, index) => (
                            <div 
                                key={index} 
                                className="aspect-square overflow-hidden rounded-xl group relative cursor-pointer shadow-lg animate-on-scroll"
                                style={{ transitionDelay: `${index * 80}ms` }}
                            >
                                <img 
                                    src={item.src} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-primary/70 dark:bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-white/90">{item.description}</p>
                                    <MoveRight className="h-6 w-6 text-white mt-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-card">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center space-y-4 animate-on-scroll">
                        <h3 className="text-3xl font-bold text-card-foreground">Ready to streamline your ordering process?</h3>
                        <p className="text-lg text-muted-foreground">
                            Integrate MedIntel<sup className="text-xs align-super">™</sup> today and start benefiting from intelligent supply chain management.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main CTA Section */}
            <section 
                className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgbanner})` }} 
            >
                <div className="absolute inset-0 bg-background/90 dark:bg-background/80" /> 
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" />
                
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center space-y-8 animate-on-scroll">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                            Ready to Implement MedIntel<sup className="text-2xl md:text-2xl align-super">™</sup> for Manufacturers
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Schedule a free Manufacturers assessment and demo of the MedIntel<sup className="text-xs align-super">™</sup> platform.
                        </p>
                        <Link to="/contact">
                            <Button size="lg" className="shadow-lg text-white hover:text-black dark:text-black hover:dark:text-white">
                                Book a Demo
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

export default Healthcare;
