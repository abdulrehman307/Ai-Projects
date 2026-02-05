import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-school.jpg';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Excelsior Academy main building"
          className="w-full h-full object-cover"
        />
        <div className="overlay-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-slide-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
          Al-Falah Science School Jaurah
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 font-light max-w-2xl mx-auto">
          Nurturing Minds, Building Futures, Inspiring Excellence
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/#campuses">
            <Button size="lg" variant="secondary" className="text-base px-8">
              Explore Our Campuses
            </Button>
          </Link>
          <Link to="/academics">
            <Button size="lg" variant="outline" className="text-base px-8 border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/70 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
