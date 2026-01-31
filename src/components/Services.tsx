import { ShoppingCart, Palette, CreditCard, LayoutDashboard, Wrench } from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "Full-Stack E-Commerce",
    description: "Complete online stores with shopping cart, checkout, inventory management, and order tracking.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Modern, conversion-focused designs that create seamless shopping experiences.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Secure payment gateways including Stripe, PayPal, Square, and cryptocurrency options.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description: "Powerful admin panels for managing products, orders, customers, and analytics.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing technical support, updates, security patches, and performance optimization.",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Section Divider */}
      <div className="section-divider mb-24" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-primary uppercase tracking-widest mb-4">What I Do</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            <span className="text-foreground">My </span>
            <span className="neon-text-cyan">Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-lg bg-card border border-border hover:border-secondary transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-8 h-8 text-secondary" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:neon-text-purple transition-all duration-300">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Glow */}
              <div 
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 30px hsl(270 100% 56% / 0.1)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
