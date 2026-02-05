import { Target, Eye } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Our School
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Founded on the principles of academic excellence and character development, 
            Excelsior Academy has been shaping future leaders for over three decades. 
            Our commitment to quality education, discipline, and holistic development 
            sets us apart as a premier educational institution.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Mission Card */}
          <div className="bg-card p-8 rounded-lg shadow-sm card-hover border border-border">
            <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide a comprehensive educational experience that develops 
              intellectual curiosity, critical thinking, and strong moral values. 
              We strive to create an environment where every student can discover 
              their potential and achieve academic excellence while becoming 
              responsible citizens of tomorrow.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-card p-8 rounded-lg shadow-sm card-hover border border-border">
            <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be recognized as a leading educational institution that produces 
              well-rounded individuals equipped with knowledge, skills, and values 
              necessary for success in a rapidly changing world. We envision a 
              community of lifelong learners who contribute positively to society 
              and make a meaningful difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
