const skills = [
  { name: 'HTML5', category: 'Core' },
  { name: 'CSS3', category: 'Core' },
  { name: 'JavaScript', category: 'Core' },
  { name: 'TypeScript', category: 'Core' },
  { name: 'React', category: 'Framework' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'SCSS', category: 'Styling' },
  { name: 'Framer Motion', category: 'Animation' },
  { name: 'Git', category: 'Tools' },
  { name: 'Figma', category: 'Design' },
  { name: 'REST APIs', category: 'Integration' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-title">Skills & Tools</p>
          <h2 className="section-heading">
            Technologies I work with
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I stay current with modern frontend technologies while maintaining 
            a strong foundation in the fundamentals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="skill-badge cursor-default"
            >
              {skill.name}
            </span>
          ))}
        </div>

        {/* Additional expertise */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 7h10" />
                <path d="M7 12h10" />
                <path d="M7 17h10" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Responsive Design</h3>
            <p className="text-sm text-muted-foreground">
              Mobile-first approach ensuring seamless experiences across all devices.
            </p>
          </div>

          <div className="text-center p-8">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Clean Code</h3>
            <p className="text-sm text-muted-foreground">
              Writing maintainable, well-documented code that scales.
            </p>
          </div>

          <div className="text-center p-8">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
                <path d="M2 20h20" />
                <path d="M14 12v.01" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Performance</h3>
            <p className="text-sm text-muted-foreground">
              Optimized loading times and smooth interactions for better UX.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
