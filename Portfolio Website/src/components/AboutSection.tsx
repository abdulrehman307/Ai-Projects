import headshot from '@/assets/headshot.jpeg';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-secondary">
              <img 
                src={headshot} 
                alt="Abdul Rehman - Frontend Developer"
                className="w-full h-full object-cover object-top"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-primary/20 hidden md:block" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-primary/10 -z-10 hidden md:block" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="section-title">About Me</p>
            <h2 className="section-heading">
              Turning ideas into
              <br />
              elegant solutions
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a frontend developer with a deep appreciation for clean design 
                and intuitive user experiences. My journey in web development started 
                with curiosity and has evolved into a genuine passion for crafting 
                interfaces that feel both beautiful and effortless.
              </p>
              <p>
                I believe great software is built at the intersection of technical 
                excellence and human-centered design. Every line of code I write 
                serves a purpose — to create experiences that are fast, accessible, 
                and delightful to use.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, 
                contributing to open-source projects, or learning about the latest 
                frontend technologies.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="text-3xl font-semibold text-foreground">3+</p>
                  <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-foreground">20+</p>
                  <p className="text-sm text-muted-foreground mt-1">Projects Built</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
