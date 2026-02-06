import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

/**
 * NotFound Page (404)
 * 
 * Demonstrates React concepts:
 * - Route handling for unmatched paths
 * - Navigation with React Router NavLink
 */
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="pt-20 min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-8xl md:text-9xl font-bold text-accent mb-4">
            404
          </h1>
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to our delicious offerings.
          </p>
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            <Home size={18} />
            Back to Home
          </NavLink>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;
