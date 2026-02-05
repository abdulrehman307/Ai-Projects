import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, FlaskConical, Palette, Trophy, Globe, Calculator, Music, Laptop } from 'lucide-react';

const curriculum = [
  {
    level: "Primary School",
    grades: "Grades 1-5",
    description: "Building strong foundations through interactive learning, focusing on literacy, numeracy, and creative exploration.",
    subjects: ["English", "Mathematics", "Science", "Social Studies", "Art & Craft", "Physical Education"],
  },
  {
    level: "Middle School",
    grades: "Grades 6-8",
    description: "Expanding knowledge horizons with in-depth subject exploration and critical thinking development.",
    subjects: ["English", "Mathematics", "Science", "History", "Geography", "Computer Science", "Languages"],
  },
  {
    level: "High School",
    grades: "Grades 9-12",
    description: "Preparing students for higher education with specialized streams and comprehensive board exam preparation.",
    subjects: ["Sciences", "Commerce", "Humanities", "Computer Science", "Languages", "Physical Education"],
  },
];

const specialPrograms = [
  {
    icon: FlaskConical,
    title: "STEM Excellence",
    description: "Advanced science and technology programs with hands-on laboratory experiences and research projects.",
  },
  {
    icon: Globe,
    title: "Language Program",
    description: "Multilingual education with options for Hindi, French, and German as additional languages.",
  },
  {
    icon: Palette,
    title: "Arts & Culture",
    description: "Comprehensive arts education including visual arts, performing arts, and cultural studies.",
  },
  {
    icon: Trophy,
    title: "Sports Academy",
    description: "Professional coaching in cricket, football, basketball, athletics, and swimming.",
  },
  {
    icon: Music,
    title: "Music & Performing Arts",
    description: "Training in vocal and instrumental music, classical and contemporary dance forms.",
  },
  {
    icon: Laptop,
    title: "Digital Learning",
    description: "Technology-integrated classrooms with coding, robotics, and digital literacy programs.",
  },
];

const facilities = [
  "Smart Classrooms with Interactive Boards",
  "Well-equipped Science Laboratories",
  "Computer Labs with Latest Technology",
  "Extensive Library with Digital Resources",
  "Sports Complex & Swimming Pool",
  "Auditorium & Performing Arts Center",
  "Art Studios & Music Rooms",
  "Cafeteria with Healthy Meal Options",
];

const Academics = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 bg-primary">
        <div className="container-width section-padding !py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Academics
          </h1>
          <p className="text-primary-foreground/90 text-lg max-w-2xl">
            Our comprehensive curriculum is designed to nurture intellectual curiosity, 
            critical thinking, and a lifelong love for learning.
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Curriculum Overview
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12" />

          <div className="space-y-8">
            {curriculum.map((level, index) => (
              <div key={level.level} className="bg-card rounded-lg border border-border overflow-hidden">
                <div className="md:flex">
                  <div className="bg-primary p-6 md:p-8 md:w-1/3">
                    <BookOpen className="w-10 h-10 text-primary-foreground mb-4" />
                    <h3 className="text-2xl font-bold text-primary-foreground">{level.level}</h3>
                    <p className="text-primary-foreground/80 mt-1">{level.grades}</p>
                  </div>
                  <div className="p-6 md:p-8 md:w-2/3">
                    <p className="text-muted-foreground mb-4">{level.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {level.subjects.map((subject) => (
                        <span key={subject} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Special Programs
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialPrograms.map((program) => (
              <div key={program.title} className="bg-card p-6 rounded-lg border border-border card-hover">
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <program.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{program.title}</h3>
                <p className="text-muted-foreground text-sm">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="lg:flex lg:gap-12 items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                World-Class Facilities
              </h2>
              <div className="w-24 h-1 bg-primary mb-6" />
              <p className="text-muted-foreground mb-6">
                Our state-of-the-art infrastructure supports diverse learning experiences 
                and extracurricular activities. Every facility is designed to inspire 
                creativity, encourage exploration, and facilitate holistic development.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-secondary rounded-lg p-8 text-center">
                <Calculator className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Academic Excellence</h3>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div>
                    <p className="text-3xl font-bold text-primary">98%</p>
                    <p className="text-muted-foreground text-sm">Pass Rate</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">45+</p>
                    <p className="text-muted-foreground text-sm">Faculty Members</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">1:20</p>
                    <p className="text-muted-foreground text-sm">Teacher Ratio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academics;
