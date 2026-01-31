import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "TechGear Store",
    description: "Premium electronics e-commerce platform",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "Fashion Hub",
    description: "Multi-vendor fashion marketplace",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
  },
  {
    title: "Artisan Market",
    description: "Handcrafted goods marketplace",
    tech: ["Vue.js", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "FitLife Pro",
    description: "Fitness subscription platform",
    tech: ["React", "Stripe", "Supabase"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
  },
  {
    title: "GourmetBox",
    description: "Food subscription service",
    tech: ["Next.js", "Prisma", "AWS"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
  },
  {
    title: "BookNest",
    description: "Digital bookstore platform",
    tech: ["React", "GraphQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop",
  },
];

const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="portfolio" className="relative py-24 overflow-hidden">
      {/* Section Divider */}
      <div className="section-divider mb-24" />

      {/* Background Orb */}
      <div className="gradient-orb gradient-orb-purple w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="font-body text-primary uppercase tracking-widest mb-4">My Work</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            <span className="text-foreground">Featured </span>
            <span className="neon-text-purple">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-lg overflow-hidden bg-card border border-border hover:border-primary transition-all duration-300 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:neon-text-cyan transition-all duration-300">
                  {project.title}
                </h3>
                <p className="font-body text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-body uppercase tracking-wider bg-muted rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Demo Button */}
                <button className="flex items-center gap-2 font-body text-sm uppercase tracking-wider text-primary hover:text-primary/80 transition-colors">
                  View Demo
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow: 'inset 0 0 30px hsl(180 100% 50% / 0.1)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
