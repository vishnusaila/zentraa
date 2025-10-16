import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";

// Core Page Imports
import Index from "./pages/Index";
import About from "./pages/About";
import Healthcare from "./pages/Healthcare";
import HumanExperience from "./pages/HumanExperience";
import TechConsulting from "./pages/TechConsulting";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// 🚨 Apply Page Import (Ensure this path matches your file system)
import ApplyPage from "./pages/ApplyPage.tsx"; 

// New Import for Scroll Functionality
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* ScrollToTop placed here to manage scroll position on all route changes */}
          <ScrollToTop /> 
          
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/human-experience" element={<HumanExperience />} />
            <Route path="/tech-consulting" element={<TechConsulting />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* 🚨 This route definition handles the application form: /apply */}
            <Route path="/apply" element={<ApplyPage />} /> 

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
