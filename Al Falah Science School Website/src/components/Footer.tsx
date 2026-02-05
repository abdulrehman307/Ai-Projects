import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/#about' },
    { label: 'Campuses', href: '/#campuses' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'Contact', href: '/contact' },
  ],
  academics: [
    { label: 'Admissions', href: '/admissions' },
    { label: 'Academics', href: '/academics' },
    { label: 'Faculty', href: '/academics' },
    { label: 'Calendar', href: '/contact' },
    { label: 'Results', href: '/academics' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-width section-padding !py-12 md:!py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* School Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-foreground font-serif font-bold text-xl">E</span>
              </div>
              <span className="font-serif text-xl font-semibold">
                Al-Falah Science School
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Nurturing minds and building futures since 1990. 
              A premier institution committed to academic excellence 
              and holistic development.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Academics</h4>
            <ul className="space-y-2">
              {footerLinks.academics.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-background/70 flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  123 Education Street,<br />
                  Academic City, AC 12345
                </span>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@excelsioracademy.edu" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>info@excelsioracademy.edu</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-10 pt-6 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Excelsior Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
