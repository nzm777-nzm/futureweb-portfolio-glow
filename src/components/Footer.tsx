import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="font-heading text-lg font-bold tracking-wider">
            <span className="neon-text-cyan">future</span>
            <span className="text-foreground">web</span>
            <span className="text-muted-foreground">.dev</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:shadow-[0_0_15px_hsl(180_100%_50%_/_0.3)]"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} futureweb.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
