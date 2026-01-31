import { Monitor, Shield, Server, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Responsive UI",
    description: "Pixel-perfect designs that look stunning on every device, from mobile to desktop.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "PCI-compliant payment integrations with Stripe, PayPal, and more.",
  },
  {
    icon: Server,
    title: "Scalable Backend",
    description: "Cloud-native architecture built to handle millions of transactions.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights into sales, traffic, and customer behavior.",
  },
];

const Features = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Section Divider */}
      <div className="section-divider mb-24" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-primary uppercase tracking-widest mb-4">What I Offer</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            <span className="text-foreground">Why Choose </span>
            <span className="neon-text-cyan">futureweb.dev</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="neon-card group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
