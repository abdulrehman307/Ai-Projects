import { motion } from "framer-motion";
import type { MenuItem } from "@/data/menuData";

interface DishCardProps {
  dish: MenuItem;
  index?: number;
}

/**
 * DishCard Component
 * 
 * Demonstrates React concepts:
 * - Functional component with TypeScript
 * - Props for data passing
 * - Optional props with defaults
 * - Conditional rendering (featured badge)
 */
const DishCard = ({ dish, index = 0 }: DishCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Featured Badge - Conditional Rendering */}
        {dish.featured && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
            Chef's Pick
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-lg font-semibold text-foreground">
            {dish.name}
          </h3>
          <span className="text-accent font-semibold whitespace-nowrap">
            ${dish.price}
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {dish.description}
        </p>
      </div>
    </motion.article>
  );
};

export default DishCard;
