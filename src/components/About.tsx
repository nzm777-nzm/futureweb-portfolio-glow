import { Code2, Database, Cloud, Smartphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "Node.js / Express", level: 90 },
  { name: "TypeScript", level: 92 },
  { name: "PostgreSQL / MongoDB", level: 88 },
  { name: "Stripe / Payment APIs", level: 94 },
  { name: "AWS / Vercel", level: 85 },
];

const expertise = [
  { icon: Code2, label: "Frontend" },
  { icon: Database, label: "Backend" },
  { icon: Cloud, label: "Cloud" },
  { icon: Smartphone, label: "Mobile" },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="about" className="relative py-24 overflow-hidden">
      {/* Section Divider */}
      <div className="section-divider mb-24" />

      {/* Background Orbs */}
      <div className="gradient-orb gradient-orb-cyan w-[400px] h-[400px] top-0 right-0 opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="font-body text-primary uppercase tracking-widest mb-4">About Me</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            <span className="text-foreground">The Developer Behind </span>
            <span className="neon-text-cyan">futureweb.dev</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Avatar */}
          <div className={`flex justify-center lg:justify-end scroll-hidden-left ${isVisible ? 'scroll-visible-x' : ''}`}>
            <div className="relative">
              {/* Avatar Container */}
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl neon-border overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="font-heading text-7xl font-bold text-gradient">FW</span>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-lg bg-card border border-primary flex items-center justify-center animate-float">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-lg bg-card border border-secondary flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Database className="w-8 h-8 text-secondary" />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`scroll-hidden-right ${isVisible ? 'scroll-visible-x' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Full-Stack E-Commerce Specialist
            </h3>
            <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 5 years of experience building high-converting e-commerce platforms, 
              I specialize in creating seamless shopping experiences that drive revenue and 
              customer satisfaction. From startups to enterprise clients, I've helped businesses 
              scale their online presence.
            </p>
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              My approach combines cutting-edge technology with battle-tested best practices, 
              ensuring your store is fast, secure, and ready to grow.
            </p>

            {/* Expertise Icons */}
            <div className="flex gap-4 mb-8">
              {expertise.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors"
                >
                  <item.icon className="w-6 h-6 text-primary" />
                  <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-body text-sm text-foreground">{skill.name}</span>
                    <span className="font-body text-sm text-primary">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill transition-all duration-1000"
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
