import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile-placeholder.jpeg";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-in fade-in slide-in-from-top-10 duration-700">
            <img
              src={profileImg}
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-accent shadow-card"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
            hi, i'm SHEDRACK MOSSES MOLLEL
          </h1>

          <p className="text-xl md:text-2xl text-accent font-semibold mb-6 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
           Data Science Engineer  Machine Learning & Full-Stack Integration  Turning Data Into Scalable Solutions

          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            Transforming data into actionable insights through machine learning, analytics, and visualization. 
            Passionate about solving real-world problems with data-driven solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="bg-gradient-accent hover:opacity-90 transition-opacity"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-4 justify-center mt-8 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-700">
            <Button variant="ghost" size="icon" className="hover:text-accent hover:scale-110 transition-all">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent hover:scale-110 transition-all">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent hover:scale-110 transition-all">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
