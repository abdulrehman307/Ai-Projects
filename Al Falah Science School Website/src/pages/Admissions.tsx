import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, FileText, Users, Clock, ArrowRight } from 'lucide-react';

const admissionSteps = [
  {
    step: 1,
    title: "Submit Application",
    description: "Complete the online application form with all required information and documents.",
  },
  {
    step: 2,
    title: "Entrance Assessment",
    description: "Students will undergo an age-appropriate assessment to evaluate academic readiness.",
  },
  {
    step: 3,
    title: "Parent Interview",
    description: "A brief interaction with parents to understand expectations and share our vision.",
  },
  {
    step: 4,
    title: "Admission Decision",
    description: "Receive admission decision within 5-7 working days of completing all steps.",
  },
];

const requirements = [
  "Completed application form",
  "Birth certificate (original and copy)",
  "Previous academic records",
  "Transfer certificate (if applicable)",
  "Passport-size photographs (4)",
  "Parent/Guardian ID proof",
  "Medical fitness certificate",
  "Address proof",
];

const importantDates = [
  { event: "Application Opens", date: "January 15, 2025" },
  { event: "Early Admission Deadline", date: "February 28, 2025" },
  { event: "Regular Admission Deadline", date: "April 15, 2025" },
  { event: "Entrance Assessments", date: "March - May 2025" },
  { event: "Results Announcement", date: "Within 7 days of assessment" },
  { event: "Session Begins", date: "June 1, 2025" },
];

const Admissions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 bg-primary">
        <div className="container-width section-padding !py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Admissions
          </h1>
          <p className="text-primary-foreground/90 text-lg max-w-2xl">
            Join the Excelsior Academy family. We welcome students who are eager to learn, 
            grow, and contribute to our vibrant academic community.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Admission Process
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-card p-6 rounded-lg border border-border h-full">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                {item.step < 4 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-muted-foreground -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Dates */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Requirements */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Required Documents</h3>
              </div>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Dates */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Important Dates</h3>
              </div>
              <div className="space-y-4">
                {importantDates.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-foreground font-medium">{item.event}</span>
                    <span className="text-muted-foreground text-sm">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Notice */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="bg-secondary rounded-lg p-8 md:p-12 text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Schedule a Campus Visit
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              We encourage prospective families to visit our campus and experience the 
              Excelsior Academy environment firsthand. Meet our faculty, explore our 
              facilities, and learn about our comprehensive fee structure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Schedule Visit
              </Button>
              <Button size="lg" variant="outline">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;
