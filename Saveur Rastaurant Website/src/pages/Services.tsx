import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { UtensilsCrossed, Truck, Users, PartyPopper, ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

/**
 * Services Page
 * 
 * Demonstrates React concepts:
 * - Reusable component usage (ServiceCard)
 * - Props-driven UI pattern
 * - Data-driven rendering
 * - Clean component boundaries
 * - Passing different props to same component
 */

// Service data - could be moved to a data file if needed
const services = [
  {
    id: 1,
    title: "Dine-In Experience",
    description: "Immerse yourself in our elegant dining room where exceptional cuisine meets warm hospitality. Perfect for intimate dinners or special occasions.",
    icon: UtensilsCrossed,
    features: [
      "Elegant ambiance",
      "Full bar service",
      "Seasonal tasting menus",
      "Private dining available",
    ],
  },
  {
    id: 2,
    title: "Delivery & Takeout",
    description: "Enjoy Saveur's signature dishes in the comfort of your home. Our packaging ensures every dish arrives as intended.",
    icon: Truck,
    features: [
      "Contactless delivery",
      "Temperature-controlled packaging",
      "Full menu available",
      "Wine pairing recommendations",
    ],
  },
  {
    id: 3,
    title: "Catering Services",
    description: "Bring the Saveur experience to your event. Our catering team creates custom menus tailored to your occasion and guest count.",
    icon: Users,
    features: [
      "Custom menu creation",
      "Full-service staff",
      "Equipment provided",
      "Events of all sizes",
    ],
  },
  {
    id: 4,
    title: "Private Events",
    description: "Host your celebration in our private dining spaces. From corporate gatherings to milestone celebrations, we create unforgettable experiences.",
    icon: PartyPopper,
    features: [
      "Exclusive venue access",
      "Personalized service",
      "Custom décor options",
      "Audio/visual equipment",
    ],
  },
];

const Services = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              What We Offer
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mt-3 mb-4">
              Our Services
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From intimate dinners to grand celebrations, we offer a range of 
              services to bring exceptional dining to any occasion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Reusable ServiceCard components */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map through services data, passing props to reusable component */}
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Ready to Plan Your Event?
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Our events team is here to help you create an unforgettable experience. 
              Contact us to discuss your vision.
            </p>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-medium rounded-md hover:bg-accent/90 transition-colors"
            >
              Get in Touch
              <ArrowRight size={18} />
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="font-display text-2xl md:text-3xl italic text-foreground leading-relaxed mb-6">
              "Saveur catered our wedding and exceeded every expectation. 
              The food was impeccable, the service was seamless, and our 
              guests are still talking about it months later."
            </blockquote>
            <cite className="text-muted-foreground not-italic">
              — Sarah & Michael, Wedding Reception 2024
            </cite>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;
