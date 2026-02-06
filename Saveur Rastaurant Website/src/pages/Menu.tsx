import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DishCard from "@/components/DishCard";
import { menuData, categories, type CategoryId } from "@/data/menuData";

/**
 * Menu Page
 * 
 * Demonstrates React concepts:
 * - useState hook for local state management
 * - Controlled component pattern (category filter)
 * - Conditional rendering based on state
 * - Lifting state up (filter state controls what's rendered)
 * - Array filtering and mapping
 */
const Menu = () => {
  // State: Currently selected category filter
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');

  // Derived state: Filtered menu items based on category selection
  const filteredMenu = activeCategory === 'all'
    ? menuData
    : menuData.filter((dish) => dish.category === activeCategory);

  // Handler: Update category filter (could be lifted up if needed by parent)
  const handleCategoryChange = (categoryId: CategoryId) => {
    setActiveCategory(categoryId);
  };

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
              Our Offerings
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mt-3 mb-4">
              The Menu
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Seasonally inspired dishes crafted with locally sourced ingredients 
              and prepared with passion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Filter - Controlled by state */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Results Count - Conditional info display */}
          <p className="text-center text-sm text-muted-foreground mb-8">
            Showing {filteredMenu.length} {filteredMenu.length === 1 ? 'item' : 'items'}
            {activeCategory !== 'all' && (
              <span> in {categories.find(c => c.id === activeCategory)?.label}</span>
            )}
          </p>

          {/* Menu Grid - Animated transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredMenu.map((dish, index) => (
                <DishCard key={dish.id} dish={dish} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State - Conditional rendering */}
          {filteredMenu.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Dietary Info */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-semibold mb-4">
            Dietary Accommodations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We're happy to accommodate dietary restrictions and allergies. 
            Please inform your server of any requirements when ordering.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Nut-Free'].map((diet) => (
              <span
                key={diet}
                className="px-4 py-2 bg-card text-sm text-foreground rounded-full border border-border"
              >
                {diet} Options Available
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
