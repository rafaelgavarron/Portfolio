import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';

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
              <span>rafael.gavarron@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="text-primary" size={20} />
              <span>Brasil</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="hero"
              size="xl"
              className="animate-pulse-glow"
              asChild
            >
              <a href="mailto:rafael.gavarron@gmail.com">
                <Send size={20} />
                Enviar Mensagem
              </a>
            </Button>
            <Button variant="hero" size="xl" className="animate-pulse-glow">
              <a href="https://calendly.com/rafael-gavarron/new-meeting">
                Agende uma reunião
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
