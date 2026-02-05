import boysCampusImage from '@/assets/boys-campus.jpg';
import girlsCampusImage from '@/assets/girls-campus.jpg';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const campuses = [
  {
    title: "Boys Campus",
    description: "Our Boys Campus offers a dynamic learning environment designed to foster academic excellence, physical development, and character building. With state-of-the-art facilities, dedicated faculty, and a comprehensive curriculum, we prepare young men to become confident leaders and responsible citizens.",
    image: boysCampusImage,
    features: ["Grades 1-12", "Sports Complex", "Science Labs", "Library"],
  },
  {
    title: "Girls Campus",
    description: "The Girls Campus provides a nurturing and empowering educational setting where young women can thrive academically and personally. Our programs emphasize critical thinking, creativity, and leadership skills, preparing students for success in higher education and beyond.",
    image: girlsCampusImage,
    features: ["Grades 1-12", "Arts Center", "Modern Labs", "Sports Facilities"],
  },
];

const Campuses = () => {
  return (
    <section id="campuses" className="section-padding bg-background">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Campuses
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Two dedicated campuses providing specialized environments for 
            focused learning and holistic development.
          </p>
        </div>

        {/* Campus Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {campuses.map((campus, index) => (
            <div
              key={campus.title}
              className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border card-hover"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={campus.image}
                  alt={campus.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                  {campus.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {campus.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {campus.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campuses;
