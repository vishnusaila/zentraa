
import { useState, useRef, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Send, TrendingUp, Users, Heart, Coffee, Award, Briefcase } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner"; // Assuming sonner toast is available

// 🚨 LIVE EMAILJS CREDENTIALS (As provided by the user)
const EMAILJS_SERVICE_ID = "service_821de98";
const EMAILJS_TEMPLATE_ID = "template_ynpe1xp";
const EMAILJS_PUBLIC_KEY = "N4PFTNQbKcFBGKYbo";

const ApplyPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // Get the job title from the URL query string
    const jobTitle = searchParams.get('job') || "General Application";

    // Set page title dynamically
    useEffect(() => {
        document.title = `Apply for ${jobTitle} | Zentraa`;
    }, [jobTitle]);

    const benefits = [
        { icon: TrendingUp, title: "Career Growth", description: "Continuous learning and clear progression paths." },
        { icon: Users, title: "Great Team", description: "Collaborative, passionate, and talented professionals." },
        { icon: Heart, title: "Work-Life Balance", description: "Flexible work arrangements and generous time-off." },
        { icon: Coffee, title: "Modern Workplace", description: "State-of-the-art facilities and best-in-class tools." },
        { icon: Award, title: "Competitive Benefits", description: "Comprehensive health coverage and performance bonuses." },
        { icon: Briefcase, title: "Exciting Projects", description: "Work on cutting-edge technology for global brands." },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!form.current) return;

        setIsSubmitting(true);

        const formData = new FormData(form.current);
        const data: { [key: string]: string } = {};
        // Add job title to data for the template
        data['job_applied_for'] = jobTitle; 
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        // 🚨 EMAILJS INTEGRATION LOGIC (ACTUAL FETCH IMPLEMENTATION)
        try {
            const payload = {
                service_id: EMAILJS_SERVICE_ID,
                template_id: EMAILJS_TEMPLATE_ID,
                user_id: EMAILJS_PUBLIC_KEY,
                template_params: {
                    user_name: data.user_name,
                    user_email: data.user_email,
                    job_applied_for: data.job_applied_for, // The hidden field 
                    linkedin: data.linkedin,
                    message: data.message,
                }
            };

            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (response.status !== 200) {
                // If status is not 200, something is wrong with EmailJS setup (e.g., IDs, Network)
                throw new Error(`Email delivery failed with status: ${response.status}`);
            }
            
            // --- SUCCESS ---
            toast.success(`Application for '${jobTitle}' submitted successfully!`, {
                description: "We will review your application and contact you shortly.",
            });
            form.current.reset();

        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Failed to submit application.", {
                description: `Please verify your EmailJS keys or check network connectivity. Error: ${error instanceof Error ? error.message : String(error)}`,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Application Form Section */}
            <section className="py-32 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* --- Company Benefits Section --- */}
                    <div className="max-w-6xl mx-auto mb-16">
                        <div className="text-center max-w-4xl mx-auto mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Work at Zentraa?</h2>
                            <p className="text-xl text-muted-foreground">Discover the unique culture and rewards waiting for you.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {benefits.map((benefit, index) => (
                                <Card key={index} className="bg-card border-border/50 shadow-md">
                                    <CardContent className="p-4 md:p-6 text-center space-y-2">
                                        <benefit.icon className="h-7 w-7 text-primary mx-auto" />
                                        <h3 className="text-lg font-semibold text-card-foreground">{benefit.title}</h3>
                                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                    {/* --- End Company Benefits Section --- */}

                    {/* --- Job Application Form --- */}
                    <div className="max-w-4xl mx-auto">
                        
                        <Button 
                            variant="ghost" 
                            onClick={() => navigate(-1)} 
                            className="mb-6 text-muted-foreground hover:text-primary  bg-primary text-white hover:text-black dark:text-black hover:dark:text-white "
                        >
                            <ArrowLeft className="h-5 w-5 mr-2 " /> Back to Careers
                        </Button>
                        
                        <Card className="border-primary/30 shadow-elegant bg-card animate-on-scroll">
                            <CardContent className="p-8 md:p-10 space-y-6">
                                <h1 className="text-4xl font-bold text-foreground border-b border-border pb-4">
                                    Apply for: <span className="text-primary">{jobTitle}</span>
                                </h1>
                                
                                <p className="text-muted-foreground">
                                    Please fill out the form below. For security, we recommend submitting your resume as a link (e.g., Google Drive or Dropbox link) in the message field.
                                </p>

                                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                                    {/* Include hidden field for job title in the template payload */}
                                    <input type="hidden" name="job_applied_for" value={jobTitle} /> 
                                    
                                    <div className="space-y-2">
                                        <label htmlFor="user_name" className="text-sm font-medium text-card-foreground">Full Name *</label>
                                        <Input
                                            id="user_name"
                                            name="user_name"
                                            
                                            required
                                            className="bg-background"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="user_email" className="text-sm font-medium text-card-foreground">Email Address *</label>
                                        <Input
                                            id="user_email"
                                            name="user_email"
                                            type="email"
                                          
                                            required
                                            className="bg-background"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="linkedin" className="text-sm font-medium text-card-foreground">LinkedIn Profile URL</label>
                                        <Input
                                            id="linkedin"
                                            name="linkedin"
                                          
                                            className="bg-background"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-card-foreground">Message / Resume Link *</label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            className="bg-background"
                                        />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="h-5 w-5 mr-2" />
                                                Submit Application
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                    {/* --- End Job Application Form --- */}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ApplyPage;
