'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-sm shadow-neutral-900' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center h-16 md:h-20">
          {/* Desktop menu - now centered */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-md text-base font-medium transition-all duration-300 relative ${
                  pathname === item.path
                    ? 'text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
                onMouseEnter={() => setHoveredItem(item.path)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.name}
                
                {/* Current section underline */}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-white rounded transition-transform duration-300 ease-out ${
                    pathname === item.path
                      ? hoveredItem && hoveredItem !== item.path
                        ? 'transform scale-x-0 origin-left'
                        : 'transform scale-x-100 origin-left'
                      : 'transform scale-x-0'
                  }`}
                />
                
                {/* Hover underline */}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-neutral-400 rounded transition-transform duration-300 ease-out ${
                    hoveredItem === item.path && pathname !== item.path
                      ? 'transform scale-x-100 origin-left'
                      : 'transform scale-x-0 origin-left'
                  }`}
                />
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button - centered */}
          <div className="flex md:hidden items-center justify-center w-full">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-400 hover:text-white focus:outline-none transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm shadow-lg border-b border-neutral-800">
          <div className="px-3 pt-3 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium text-center transition-colors duration-300 ${
                  pathname === item.path
                    ? 'text-white bg-neutral-800'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
