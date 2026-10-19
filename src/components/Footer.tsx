import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
   return (
      <footer className="py-12 border-t border-border">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-items-center gap-6">
               {/* Logo */}
               <a href="#" className="font-mono text-lg font-bold text-primary md:justify-self-start">
                  {"<dev />"}
               </a>

               {/* Social Links */}
               <div className="flex items-center gap-6 ">
                  <a
                     href="https://github.com/rafaelgavarron"
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
               <p className="text-sm text-muted-foreground  font-mono md:justify-self-end">
                  © {new Date().getFullYear()} Rafael Gavarron. Todos os
                  direitos reservados.
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
