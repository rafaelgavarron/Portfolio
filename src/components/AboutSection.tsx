import { Code2, Rocket, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Rocket,
      title: "Alta Conversão",
      description: "Landing pages otimizadas para transformar visitantes em clientes",
    },
    {
      icon: Code2,
      title: "Performance",
      description: "Páginas ultra-rápidas que rankeiam bem no Google",
    },
    {
      icon: Users,
      title: "Foco no Cliente",
      description: "Entendo seu negócio para criar páginas que vendem",
    },
  ];

  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p className="font-mono text-primary mb-2">01.</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-primary mt-4 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Sou especialista em criar landing pages que realmente convertem.
                Combino design atrativo, copywriting persuasivo e técnicas de
                otimização para entregar páginas que transformam visitantes em
                clientes.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Já ajudei dezenas de empresas e empreendedores a aumentar suas
                vendas com landing pages profissionais. Desde páginas de captura
                até funis completos de vendas, entrego resultados mensuráveis.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Cada projeto é único. Estudo seu público-alvo, seu produto e
                seus objetivos para criar uma página personalizada que realmente
                funciona para o seu negócio.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
