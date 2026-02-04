import { ExternalLink, Github } from 'lucide-react';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectTaskmanager from '@/assets/project-taskmanager.jpg';
import projectPortfolio from '@/assets/project-portfolio.jpg';
import projectWeather from '@/assets/project-weather.jpg';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern shopping experience with cart functionality, product filtering, and seamless checkout flow.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    image: projectEcommerce,
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with drag-and-drop, real-time updates, and team workspaces.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    image: projectTaskmanager,
  },
  {
    title: 'Portfolio Generator',
    description: 'A tool that helps developers create beautiful portfolios with customizable themes and components.',
    tech: ['React', 'Framer Motion', 'SCSS'],
    liveUrl: '#',
    githubUrl: '#',
    image: projectPortfolio,
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather tracking with location-based forecasts and beautiful data visualizations.',
    tech: ['React', 'Chart.js', 'OpenWeather API'],
    liveUrl: '#',
    githubUrl: '#',
    image: projectWeather,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-title">Selected Work</p>
          <h2 className="section-heading">
            Projects I've built
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Here are some projects that showcase my skills and approach to 
            solving problems through thoughtful design and code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card group"
            >
              {/* Project image */}
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/0 transition-colors duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-secondary rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors link-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors link-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
