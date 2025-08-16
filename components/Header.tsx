import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './Icons';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#hero', label: 'Inicio' },
        { href: '#services', label: 'Servicios' },
        { href: '#testimonials', label: 'Testimonios' },
        { href: '#blog', label: 'Blog' },
        { href: '#contact', label: 'Contacto' },
    ];

    const NavLinkItems = () => (
      <>
        {navLinks.map(({ href, label }) => (
          <li key={label} className="w-full lg:w-auto">
            <a 
              href={href} 
              onClick={() => setIsMenuOpen(false)}
              className="block lg:inline-block text-primary-blue font-semibold py-4 lg:py-2 px-4 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary-orange after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          </li>
        ))}
      </>
    );

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-20">
                    <a href="#hero" className="flex-shrink-0">
                        <img className="h-12 w-auto" src="https://i.ibb.co/4nb4Ydts/logo-gestoria.png" alt="Logo de GestoriaIF" />
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center space-x-2">
                        <NavLinkItems />
                    </ul>

                    {/* Hamburger Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                            className="text-primary-blue p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange"
                        >
                            {isMenuOpen ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
                        </button>
                    </div>
                </nav>
            </div>

             {/* Mobile Menu */}
             <div className={`lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-[150%]'}`}>
                <ul className="flex flex-col items-center divide-y divide-gray-200">
                    <NavLinkItems />
                </ul>
            </div>
        </header>
    );
};

export default Header;