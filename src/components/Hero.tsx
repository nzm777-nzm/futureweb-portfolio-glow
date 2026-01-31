import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-bg" />
      
      {/* Animated Lines */}
      <div className="animated-lines" />
      
      {/* Gradient Orbs */}
      <div className="gradient-orb gradient-orb-cyan w-96 h-96 -top-48 -left-48 animate-pulse-glow" />
      <div className="gradient-orb gradient-orb-purple w-96 h-96 -bottom-48 -right-48 animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-body text-sm text-muted-foreground uppercase tracking-wider">
              Full-Stack Development
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="neon-text-cyan">Build.</span>{" "}
            <span className="text-foreground">Sell.</span>{" "}
            <span className="neon-text-purple">Scale.</span>
          </h1>

          {/* Subheading */}
          <p className="font-body text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Full-Stack E-Commerce Solutions That Convert Visitors Into Customers
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a href="#contact" className="neon-button rounded-lg flex items-center gap-2">
              Hire Me
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#portfolio" className="neon-button rounded-lg neon-border-purple flex items-center gap-2" style={{ borderColor: 'hsl(var(--neon-purple))', color: 'hsl(var(--neon-purple))' }}>
              View Portfolio
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold neon-text-cyan">50+</p>
              <p className="font-body text-muted-foreground mt-1">Projects</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold text-foreground">5+</p>
              <p className="font-body text-muted-foreground mt-1">Years</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold neon-text-purple">100%</p>
              <p className="font-body text-muted-foreground mt-1">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
