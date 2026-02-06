import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import DishCard from "@/components/DishCard";
import { menuData } from "@/data/menuData";

/**
 * Home Page
 * 
 * Demonstrates React concepts:
 * - Functional components
 * - Component composition (using DishCard)
 * - Props passing to child components
 * - Array filtering and mapping
 * - Rendering lists with keys
 */
const Home = () => {
  // Filter featured dishes from menu data
  const featuredDishes = menuData.filter((dish) => dish.featured);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-primary/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-accent-foreground text-sm font-medium mb-6">
              <Star size={16} className="text-gold" />
              Fine Dining Experience
            </span>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-primary-foreground mb-6 leading-tight">
              Where Every Bite<br />
              <span className="italic font-normal">Tells a Story</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Experience culinary artistry crafted with passion, seasonal ingredients, 
              and time-honored techniques in an intimate setting.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-medium rounded-md hover:bg-accent/90 transition-colors"
              >
                Reserve Your Table
                <ArrowRight size={18} />
              </NavLink>
              <NavLink
                to="/menu"
                className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-medium rounded-md hover:bg-primary-foreground/10 transition-colors"
              >
                Explore Menu
              </NavLink>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Dishes Section */}
      <section id="featured" className="py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              From Our Kitchen
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-3 mb-4">
              Chef's Selections
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Signature dishes that embody our commitment to exceptional flavors 
              and artful presentation.
            </p>
          </motion.div>

          {/* Dishes Grid - Using map() to render DishCard components */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <DishCard key={dish.id} dish={dish} index={index} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <NavLink
              to="/menu"
              className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
            >
              View Full Menu
              <ArrowRight size={18} />
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section id="story" className="py-24 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent text-sm font-medium uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mt-3 mb-6">
                A Passion for<br />Culinary Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded in 2015, Saveur represents a dream to bring world-class 
                dining to an intimate neighborhood setting. Our kitchen is led by 
                Chef Isabella Moreno, whose innovative approach blends classical 
                techniques with contemporary creativity.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every ingredient is thoughtfully sourced from local farms and 
                artisan producers, ensuring each dish celebrates the season's 
                finest offerings.
              </p>
              <NavLink
                to="/about"
                className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
              >
                Learn More About Us
                <ArrowRight size={18} />
              </NavLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=700&fit=crop"
                alt="Chef preparing a dish"
                className="rounded-lg shadow-elevated w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-medium">
                <p className="font-display text-3xl font-semibold text-accent">10+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
