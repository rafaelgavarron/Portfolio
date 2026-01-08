const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Design",
      skills: ["UI/UX Design", "Figma", "Design Responsivo", "Prototipação", "Design System"],
    },
    {
      title: "Desenvolvimento",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Animações"],
    },
    {
      title: "Conversão",
      skills: ["Copywriting", "A/B Testing", "CRO", "Analytics", "SEO"],
    },
    {
      title: "Integrações",
      skills: ["Formulários", "Email Marketing", "Pagamentos", "CRM", "Automações"],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <p className="font-mono text-primary mb-2">03.</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Skills & Tecnologias
            </h2>
            <div className="w-24 h-1 bg-primary mt-4 mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                      <span className="font-mono text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
