import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Reservations" },
];

// Scroll links for home page sections
const scrollLinks = [
  { to: "#featured", label: "Featured" },
  { to: "#story", label: "Our Story" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Track scroll position for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Smooth scroll to section
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-14" : "h-16"
        }`}>
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <motion.span 
              className={`font-display font-semibold tracking-tight transition-all duration-300 ${
                isScrolled 
                  ? "text-xl text-foreground" 
                  : isHomePage 
                    ? "text-2xl text-primary-foreground" 
                    : "text-2xl text-foreground"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              Saveur
            </motion.span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md relative ${
                    isActive
                      ? "text-accent"
                      : isScrolled || !isHomePage
                        ? "text-muted-foreground hover:text-foreground"
                        : "text-primary-foreground/80 hover:text-primary-foreground"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Scroll links - only visible on home page */}
            {isHomePage && (
              <>
                <span className={`w-px h-4 mx-2 ${isScrolled ? "bg-border" : "bg-primary-foreground/30"}`} />
                {scrollLinks.map((link) => (
                  <a
                    key={link.to}
                    href={link.to}
                    onClick={(e) => scrollToSection(e, link.to)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                      isScrolled
                        ? "text-muted-foreground hover:text-foreground"
                        : "text-primary-foreground/70 hover:text-primary-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </>
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className={`inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isScrolled || !isHomePage
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-accent text-accent-foreground hover:bg-accent/90"
              }`}
            >
              Book a Table
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 transition-colors ${
              isScrolled || !isHomePage ? "text-foreground" : "text-primary-foreground"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${
                      location.pathname === link.to
                        ? "bg-secondary text-accent"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              {/* Mobile scroll links */}
              {isHomePage && (
                <>
                  <div className="h-px bg-border my-2" />
                  {scrollLinks.map((link, index) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navLinks.length + index) * 0.05 }}
                    >
                      <a
                        href={link.to}
                        onClick={(e) => scrollToSection(e, link.to)}
                        className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground rounded-md transition-colors"
                      >
                        ↓ {link.label}
                      </a>
                    </motion.div>
                  ))}
                </>
              )}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block mt-4 px-4 py-3 bg-primary text-primary-foreground text-center font-medium rounded-md"
                >
                  Book a Table
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
