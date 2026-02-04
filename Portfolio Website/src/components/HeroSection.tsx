import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container-main">
        <div className="max-w-4xl stagger-children">
          <p className="section-title mb-6">Frontend Developer</p>
          
          <h1 className="hero-headline mb-8 text-balance">
            Hi, I'm Abdul Rehman.
            <br />
            <span className="text-muted-foreground">I build interfaces</span>
            <br />
            <span className="text-muted-foreground">that people love.</span>
          </h1>
          
          <p className="hero-subheadline mb-12">
            I craft thoughtful, pixel-perfect web experiences with a focus on 
            performance, accessibility, and clean code. Currently open to new opportunities.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Let's Talk
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
