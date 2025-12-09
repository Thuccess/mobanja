
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Check initial theme
    setIsDark(document.documentElement.classList.contains('dark'));

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <>
      {/* Desktop & Mobile Floating Header */}
      <header 
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled ? 'top-4 px-4 md:px-6' : 'top-0 px-0'
        }`}
      >
        <div className={`max-w-[1200px] mx-auto flex items-center justify-between transition-all duration-500 ${
          isScrolled 
            ? 'glass rounded-full py-3 px-6 shadow-lg shadow-black/5' 
            : 'bg-transparent py-6 px-6 md:px-8'
        }`}>
          
          {/* Logo */}
          <Link to="/" className="flex items-center group relative z-50">
            <div className="bg-white rounded-xl p-1.5 inline-block shadow-sm group-hover:shadow-md transition-all">
              <img 
                src="/mobanja-logo.png" 
                alt="Mobanja" 
                className="h-12 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav - Centered */}
          <nav className="hidden md:flex items-center gap-2 bg-white/80 dark:bg-black/20 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/20 shadow-sm absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  location.pathname === link.path 
                    ? 'text-white bg-black dark:bg-white dark:text-black shadow-md' 
                    : 'text-text-medium hover:text-text-dark hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center text-text-medium hover:text-primary hover:bg-black/5 dark:hover:bg-white/10 transition-all"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <Link to="/contact">
              <Button size="sm" variant="primary" className="shadow-glow">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-3 relative z-50">
             <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100/50 dark:bg-white/5"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>
            <button 
              className="w-10 h-10 flex items-center justify-center bg-black text-white dark:bg-white dark:text-black rounded-full shadow-lg"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-surface/95 backdrop-blur-xl transform transition-transform duration-500 ease-[0.16,1,0.3,1] md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-8 pb-10">
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link, idx) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold text-text-dark hover:text-accent transition-colors"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="mt-auto space-y-6">
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full">
               <Button fullWidth size="lg" variant="primary" className="text-lg">Start Application</Button>
            </Link>
            <p className="text-sm text-text-medium text-center">
              © 2025 Mobanja Uganda
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;