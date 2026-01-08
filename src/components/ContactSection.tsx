import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <p className="font-mono text-primary mb-2">04.</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Precisa de uma Landing Page?
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Vamos criar uma landing page que converte visitantes em clientes.
              Entre em contato para discutir seu projeto!
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="text-primary" size={20} />
              <span>email@exemplo.com</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="text-primary" size={20} />
              <span>Brasil</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            variant="hero"
            size="xl"
            className="animate-pulse-glow"
            asChild
          >
            <a href="mailto:email@exemplo.com">
              <Send size={20} />
              Enviar Mensagem
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
