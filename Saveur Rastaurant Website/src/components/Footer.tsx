import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-semibold mb-4">Saveur</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              An intimate dining experience where culinary artistry meets warm hospitality. 
              Every dish tells a story.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Explore</h4>
            <ul className="space-y-2">
              {[
                { to: "/menu", label: "Our Menu" },
                { to: "/services", label: "Services" },
                { to: "/about", label: "Our Story" },
                { to: "/contact", label: "Reservations" },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>123 Culinary Lane<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone size={18} className="shrink-0" />
                <span>(212) 555-0123</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail size={18} className="shrink-0" />
                <span>hello@saveur.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span>5:00 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat</span>
                <span>5:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>4:00 PM - 9:00 PM</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Saveur Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
