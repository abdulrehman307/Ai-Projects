import { GraduationCap, Building2, Shield, Award } from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: "Qualified Faculty",
    description: "Our experienced educators are dedicated professionals with advanced degrees and a passion for teaching. They employ innovative methods to inspire and guide students.",
  },
  {
    icon: Building2,
    title: "Modern Facilities",
    description: "From well-equipped science laboratories to digital classrooms and extensive libraries, our infrastructure supports comprehensive learning experiences.",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Student safety is our priority. Our campuses feature secure premises, CCTV monitoring, trained staff, and strict protocols for a worry-free learning environment.",
  },
  {
    icon: Award,
    title: "Academic Excellence",
    description: "Our students consistently achieve outstanding results in board examinations and competitive tests, reflecting our commitment to academic rigor.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover what makes Excelsior Academy the right choice for your child's education.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card p-6 md:p-8 rounded-lg text-center card-hover border border-border"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
