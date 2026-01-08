import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-mono text-lg font-bold text-primary">
            {"<dev />"}
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/rafael"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:email@exemplo.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} Desenvolvido com ♥
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
