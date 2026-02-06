import { motion } from "framer-motion";
import { Award, Leaf, Heart } from "lucide-react";

/**
 * About Page
 * 
 * Demonstrates React concepts:
 * - Route-based page rendering (accessed via React Router)
 * - Component structure for content pages
 * - Static content presentation
 */

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We partner with local farms and practice sustainable sourcing, minimizing our environmental footprint while maximizing flavor.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Every dish is crafted with love and dedication. Our team brings genuine care to every aspect of your dining experience.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue perfection in every detail, from ingredient selection to plating, ensuring an exceptional experience every time.",
  },
];

const About = () => {
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
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mt-3 mb-4">
              About Saveur
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A decade of passion, innovation, and unforgettable dining experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                From Dream to Reality
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Saveur was born from a simple belief: that exceptional food should 
                  be accessible without pretense. When Chef Isabella Moreno opened 
                  our doors in 2015, she envisioned a space where culinary artistry 
                  and genuine hospitality would create lasting memories.
                </p>
                <p>
                  After training in the world's most celebrated kitchens—from Lyon 
                  to Tokyo—Isabella returned to New York with a vision. She wanted 
                  to create a restaurant that honored classical techniques while 
                  embracing innovation and local ingredients.
                </p>
                <p>
                  Today, Saveur stands as a testament to that vision. Our team of 
                  passionate culinarians crafts each dish with intention, sourcing 
                  from partner farms within 100 miles and preparing everything 
                  in-house, from our artisan breads to house-cured charcuterie.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=400&h=500&fit=crop"
                alt="Restaurant interior"
                className="rounded-lg shadow-medium w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=500&fit=crop"
                alt="Chef at work"
                className="rounded-lg shadow-medium w-full h-64 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=500&fit=crop"
                alt="Fresh ingredients"
                className="rounded-lg shadow-medium w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=500&fit=crop"
                alt="Fine dining plate"
                className="rounded-lg shadow-medium w-full h-64 object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1583394293214-28ez45e6ba85?w=600&h=700&fit=crop&crop=faces"
                alt="Chef Isabella Moreno"
                className="rounded-lg shadow-elevated w-full max-w-md mx-auto"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=700&fit=crop";
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="text-accent text-sm font-medium uppercase tracking-wider">
                Meet Our Chef
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3 mb-6">
                Chef Isabella Moreno
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over two decades of culinary experience, Chef Isabella brings 
                  a unique perspective shaped by her training across three continents. 
                  Her cuisine celebrates the marriage of precision and creativity.
                </p>
                <p>
                  "I believe cooking is storytelling. Each dish should take you on a 
                  journey—awakening memories, sparking curiosity, and ultimately, 
                  bringing people together around the table."
                </p>
                <p className="font-display italic text-foreground">
                  — Chef Isabella Moreno
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-card rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">Trained At</p>
                  <p className="font-medium text-foreground">Le Cordon Bleu, Paris</p>
                </div>
                <div className="px-4 py-2 bg-card rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">Recognition</p>
                  <p className="font-medium text-foreground">James Beard Nominee</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              What Drives Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3">
              Our Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
