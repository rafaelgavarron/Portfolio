import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-background" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-petrol-light/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="font-mono text-primary mb-4 animate-fade-up opacity-0 delay-100">
            Olá, meu nome é
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up opacity-0 delay-200">
            <span className="text-foreground">Rafael</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-8 animate-fade-up opacity-0 delay-300">
            Desenvolvo <span className="text-gradient">soluções digitais</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up opacity-0 delay-400">
            Desenvolvedor de software especializado em criar experiências web
            modernas, performáticas e acessíveis. Transformo ideias em código.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up opacity-0 delay-500">
            <Button variant="hero" size="xl" asChild>
              <a href="#projetos">Ver Projetos</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contato">Entre em Contato</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-fade-up opacity-0 delay-600">
            <a
              href="https://github.com/rafaelgavarron"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-gavarron/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:rafael.gavarron@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#sobre" aria-label="Scroll para baixo">
            <ArrowDown className="text-muted-foreground" size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
