'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          ? 'bg-white/80 dark:bg-secondary-900/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled || pathname !== '/'
                  ? 'text-primary-600'
                  : 'text-secondary-800 dark:text-white'
              } group-hover:text-primary-500`}>
                Ayan Goel
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                  pathname === item.path
                    ? 'text-primary-600'
                    : `${
                        scrolled || pathname !== '/'
                          ? 'text-secondary-600 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400'
                          : 'text-secondary-800 hover:text-primary-600 dark:text-white dark:hover:text-primary-400'
                      }`
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 rounded transform origin-left"></span>
                )}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-300 ${
                scrolled || pathname !== '/'
                  ? 'text-secondary-600 dark:text-gray-200'
                  : 'text-secondary-800 dark:text-white'
              } hover:text-primary-600 focus:outline-none`}
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
        <div className="md:hidden bg-white/95 dark:bg-secondary-900/95 backdrop-blur-sm shadow-lg border-b border-gray-200 dark:border-gray-800">
          <div className="px-3 pt-3 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors duration-300 ${
                  pathname === item.path
                    ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                    : 'text-secondary-600 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-primary-400 dark:hover:bg-secondary-800/50'
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