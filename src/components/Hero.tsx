import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Spotlight Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-spotlight" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-spotlight animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/15 rounded-full blur-[100px] animate-float" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl font-bold mb-6 md:text-[3.95rem] leading-tight">
            <span className="gradient-text text-left">Hi!</span>
            <br></br>
            <span>I'm Badarinath Sai Balaji</span>
            <br></br>
            <span className="gradient-text">Aspiring Software Engineer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Building reliable, efficient, and intelligent solutions through clean code.
          </p>
          <br></br>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group glow-effect bg-gradient-to-r from-primary via-secondary to-accent text-white hover:opacity-90 transition-all px-8 py-6 text-lg" onClick={() => document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth"
          })}>
              Explore My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="hero" className="group px-8 py-6 text-lg" onClick={() => window.open("https://drive.google.com/uc?export=download&id=14UE95mC6-TBExacwVZpK51PUp2l8Sdpl", "_blank")}>
              <Download className="mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gradient-to-b from-primary to-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>;
};
export default Hero;
