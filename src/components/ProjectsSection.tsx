import { ExternalLink, Github, Folder } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Make beauty',
      description:
        'Landing Page de alta conversão para profissional de beleza (Noivas & Eventos). Inclui sistema de agendamento automático para reduzir gestão manual e galeria de portfólio otimizada.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: '#',
      live: '#',
    },
    {
      title: 'Clarice',
      description:
        'Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em tempo real, notificações e integração com calendário.',
      tags: ['CI/CD', 'Github Actions'],
      github: '#',
      live: '#',
    },
    {
      title: 'Pedido de namoro',
      description:
        'Dashboard interativo para visualização de dados com gráficos customizáveis, exportação de relatórios e alertas automatizados.',
      tags: ['React', 'D3.js', 'Python', 'FastAPI'],
      github: 'https://github.com/rafaelgavarron/pedido-namoro',
      live: 'https://quiz-do-amor1.vercel.app/',
    },
    {
      title: 'API Gateway',
      description:
        'Microserviço de API Gateway com rate limiting, autenticação JWT, cache distribuído e monitoramento de performance.',
      tags: ['Go', 'Redis', 'Docker', 'Kubernetes'],
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projetos" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <p className="font-mono text-primary mb-2">02.</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Projetos em Destaque
            </h2>
            <div className="w-24 h-1 bg-primary mt-4 mx-auto rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <article
                key={index}
                className="group relative p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <Folder className="text-primary" size={40} />
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Ver código no GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Ver projeto ao vivo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
