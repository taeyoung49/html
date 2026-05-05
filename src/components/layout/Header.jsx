import React, { useState, useEffect } from 'react';

import { Menu, X } from 'lucide-react';

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

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About Us', to: 'about' },
    { name: 'History', to: 'history' },
    { name: 'Facility', to: 'facility' },
    { name: 'Location', to: 'location' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="cursor-pointer">
          <a href="#hero">
            {/* If using text logo: */}
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-secondary' : 'text-white'}`}>
              <span className="text-primary">BA</span> TECH
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.to}
              href={`#${item.to}`}
              className={`cursor-pointer hover:text-primary transition-colors ${isScrolled ? 'text-slate-700' : 'text-slate-200'}`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-secondary' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.to}
              href={`#${item.to}`}
              className="text-slate-700 cursor-pointer hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
