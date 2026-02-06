import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  index?: number;
}

/**
 * ServiceCard Component
 * 
 * Demonstrates React concepts:
 * - Reusable component pattern
 * - Props-driven UI rendering
 * - Component composition with icons
 * - Array mapping for dynamic content
 */
const ServiceCard = ({ title, description, icon: Icon, features, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
        <Icon className="w-7 h-7 text-accent" />
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Features List - Mapped from props */}
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;
