import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container-width text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
          Begin Your Child's Journey Today
        </h2>
        <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Give your child the gift of quality education. Contact us to schedule a campus visit, 
          learn about our admission process, or speak with our counselors about how Excelsior 
          Academy can shape your child's future.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-base px-8">
              Contact Us
            </Button>
          </Link>
          <Link to="/admissions">
            <Button size="lg" variant="outline" className="text-base px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Schedule a Visit
            </Button>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-primary-foreground/90">
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
            <Phone className="w-5 h-5" />
            <span>+1 (234) 567-890</span>
          </a>
          <span className="hidden sm:block">|</span>
          <a href="mailto:info@excelsioracademy.edu" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
            <Mail className="w-5 h-5" />
            <span>info@excelsioracademy.edu</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
