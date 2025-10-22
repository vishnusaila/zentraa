import { useEffect, useState, useRef } from "react"; 
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react"; 
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Link } from "react-router-dom";

// 🚨 EMAILJS CONFIGURATION - REPLACE THESE STRING PLACEHOLDERS 
// WITH YOUR ACTUAL, LIVE CREDENTIALS FROM THE EMAILJS CONSOLE.
const EMAILJS_SERVICE_ID = "service_821de98";
const EMAILJS_TEMPLATE_ID = "template_whpfjsi";
const EMAILJS_PUBLIC_KEY = "N4PFTNQbKcFBGKYbo";// Often referred to as User ID

// 🚨 IMPORTANT: Assuming these images exist and are used for the backgrounds
import bghome from "@/assets/contactcta.jpg"; 
import bgbanner from "@/assets/contactbg.jpg"; 

const Contact = () => {
  // --- Form State and Refs ---
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Animation Setup (Intersection Observer Logic) ---
  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Remove initial hiding/transform classes, triggering the CSS transition (motion)
                    entry.target.classList.remove("translate-y-4", "opacity-0");
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
    
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
    setIsSubmitting(true);

    const formData = new FormData(form.current);
    const data: { [key: string]: string } = {};
    formData.forEach((value, key) => {
        data[key] = value.toString();
    });

    // 🚨 EMAILJS INTEGRATION LOGIC (Actual fetch call structure)
    try {
        const payload = {
            service_id: EMAILJS_SERVICE_ID,
            template_id: EMAILJS_TEMPLATE_ID,
            user_id: EMAILJS_PUBLIC_KEY,
            template_params: {
                user_name: data.name,
                user_email: data.email,
                user_phone: data.phone,
                user_company: data.company,
                message: data.message,
            }
        };

        // Attempting the actual API call to EmailJS
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (response.status !== 200) {
            // Throw an error if EmailJS reports a failure (e.g., bad API key, wrong template ID)
            throw new Error(`EmailJS failed with status: ${response.status}`);
        }

        toast.success("Inquiry Sent!", {
            description: "Thank you for reaching out. We will connect with you shortly.",
        });
        form.current.reset();

    } catch (error) {
        console.error("Submission error:", error);
        toast.error("Failed to send message.", {
            description: "Please verify your EmailJS setup (IDs and Network settings) or try again later.",
        });
    } finally {
        setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Sales@zentraahub.com",
      link: "mailto:Sales@zentraahub.com",
    },
    
    {
      icon: MapPin,
      title: "Address",
      value: "8 The Green, Suite B, Dover, DE 19901",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar/>

      {/* Hero Section - Image Background, Responsive Overlay, and Consistent Width */}
      <section 
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bghome})` }} // Image background
      >
        {/* Overlay: Dark in dark mode, light in light mode, with grid pattern */}
        <div className="absolute inset-0 bg-background/80 dark:bg-background/80" /> 
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAi IGhlaWdodD0iNjAi IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAw IDAgMTAi IGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Text color is text-foreground (Black/White responsive text) */}
            <h1 className="text-5xl md:text-6xl font-bold text-foreground opacity-0 animate-[fadeInUp_0.8s_ease-out_0.15s_forwards]">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground opacity-0 animate-[fadeInUp_0.8s_ease-out_0.35s_forwards]">
              Let's discuss how we can help transform your business with technology
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Form and Info Cards (Main Contact Content) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info (Left Column) */}
            <div className="space-y-8">
              <div className="animate-on-scroll translate-y-4 opacity-0 transition-all duration-700">
                <h2 className="text-4xl font-bold mb-4 text-foreground">Let's Connect</h2>
                <p className="text-lg text-muted-foreground">
                  Have a project in mind? We'd love to hear from you. Fill out the form or reach out 
                  through any of the contact methods below.
                </p>
              </div>

              {/* Contact Info Cards - STAGGERED SLIDE UP */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className="animate-on-scroll border-border/50 bg-card translate-y-4 opacity-0 transition-all duration-700"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="p-6">
                      <a
                        href={info.link}
                        className="flex items-center space-x-4 group"
                      >
                        {/* Icon circle uses primary/10 accent */}
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.title}</p>
                          {/* Text uses foreground/primary color */}
                          <p className="font-medium text-card-foreground group-hover:text-primary transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Business Hours Card (Slide Up with Delay) */}
              <Card 
                className="animate-on-scroll border-primary bg-secondary translate-y-4 opacity-0 transition-all duration-700"
                style={{ transitionDelay: `${contactInfo.length * 150}ms` }} // Delay after info cards finish
              >
                <CardContent className="p-6 text-secondary-foreground">
                  <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                  <div className="space-y-1 text-secondary-foreground/90">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form - SLIDE UP WITH DELAY */}
            <Card 
                className="animate-on-scroll border-border/50 shadow-elegant bg-card translate-y-4 opacity-0 transition-all duration-700"
                style={{ transitionDelay: '300ms' }} // Start slightly after the left column starts
            >
              <CardContent className="p-8">
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  {/* Form fields now include NAME attributes */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-card-foreground">Full Name *</label>
                    <Input id="name" name="name"  required className="bg-background"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-card-foreground">Email Address *</label>
                    <Input id="email" name="email" type="email"  required className="bg-background"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-card-foreground">Phone Number</label>
                    <Input id="phone" name="phone" type="tel"  className="bg-background"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-card-foreground">Company</label>
                    <Input id="company" name="company"  className="bg-background"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-card-foreground">Message *</label>
                    <Textarea id="message" name="message"  required rows={5} className="bg-background"/>
                  </div>

                  <Button type="submit" size="lg" className="w-full " disabled={isSubmitting}>
                      {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send className="h-5 w-5 mr-2 " />
                                Send Message
                            </>
                        )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Maps Section - SLIDE UP */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto animate-on-scroll translate-y-4 opacity-0 transition-all duration-700">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Location</h2>
            <div className="aspect-video overflow-hidden rounded-xl border border-border/50 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.336448994483!2d-75.5226713846449!3d39.15816897952343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7015c06d152dd%3A0x68c768a05aa7ed5a!2s8%20The%20Green%2C%20Suite%20B%2C%20Dover%2C%20DE%2019901!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section - Image Background, Responsive Overlay, and Consistent Width */}
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
              Ready to start your project?
            </h2>
            <p className="text-xl text-muted-foreground">
              Book a consultation with our experts today.
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

export default Contact;
