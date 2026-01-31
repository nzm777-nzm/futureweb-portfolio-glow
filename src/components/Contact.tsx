import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Section Divider */}
      <div className="section-divider mb-24" />

      {/* Background Orbs */}
      <div className="gradient-orb gradient-orb-cyan w-[300px] h-[300px] top-1/4 left-1/4 opacity-15" />
      <div className="gradient-orb gradient-orb-purple w-[300px] h-[300px] bottom-1/4 right-1/4 opacity-15" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-body text-primary uppercase tracking-widest mb-4">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Let's Build Something </span>
            <span className="neon-text-purple">Amazing</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to take your e-commerce business to the next level? Let's discuss your project.
          </p>
        </div>

        {/* Email CTA */}
        <div className="flex flex-col items-center justify-center animate-fade-up">
          <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 group">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <p className="font-body text-muted-foreground text-center mb-4">
              Drop me an email at
            </p>
            
            <a
              href="mailto:hellofuturewebdev@gmail.com"
              className="block text-center font-heading text-xl md:text-2xl font-semibold transition-all duration-300 hover:scale-105"
              style={{
                color: 'hsl(var(--neon-cyan))',
                textShadow: '0 0 10px hsl(180 100% 50% / 0.8), 0 0 20px hsl(180 100% 50% / 0.5)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'hsl(var(--neon-purple))';
                e.currentTarget.style.textShadow = '0 0 10px hsl(270 100% 56% / 0.8), 0 0 20px hsl(270 100% 56% / 0.5), 0 0 30px hsl(270 100% 56% / 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'hsl(var(--neon-cyan))';
                e.currentTarget.style.textShadow = '0 0 10px hsl(180 100% 50% / 0.8), 0 0 20px hsl(180 100% 50% / 0.5)';
              }}
            >
              hellofuturewebdev@gmail.com
            </a>
          </div>
          
          {/* Additional Info */}
          <p className="font-body text-sm text-muted-foreground mt-8 text-center">
            Usually respond within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
