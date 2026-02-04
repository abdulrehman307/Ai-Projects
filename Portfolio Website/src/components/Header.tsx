import { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-main py-4 flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-semibold tracking-tight transition-opacity hover:opacity-70"
          >
            AR<span className="text-primary">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground link-underline transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="btn-primary text-sm hidden md:inline-flex"
          >
            Get in Touch
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-background border-l border-border z-50 md:hidden transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <span className="text-xl font-semibold tracking-tight">
              AR<span className="text-primary">.</span>
            </span>
            <button
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-6">
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  className={`transform transition-all duration-300 ${
                    isMobileMenuOpen
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${(index + 1) * 75}ms` : '0ms',
                  }}
                >
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block py-3 px-4 text-lg font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Drawer Footer */}
          <div
            className={`p-6 border-t border-border transform transition-all duration-300 ${
              isMobileMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
            style={{
              transitionDelay: isMobileMenuOpen ? '400ms' : '0ms',
            }}
          >
            <a
              href="#contact"
              onClick={handleNavClick}
              className="btn-primary w-full text-center block"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
