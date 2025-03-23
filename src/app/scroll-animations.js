'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    // Wait for initial hydration to complete
    const timer = setTimeout(() => {
      // Create a CSS rule for scroll animations
      const style = document.createElement('style');
      style.textContent = `
        .scroll-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .scroll-animate.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `;
      document.head.appendChild(style);
      
      // Select elements that should animate on scroll (excluding those that already have animate-fade-in)
      const elements = document.querySelectorAll('h2:not(.animate-fade-in), h3:not(.animate-fade-in), p:not(.animate-fade-in), section:not(.animate-fade-in), article:not(.animate-fade-in), .card:not(.animate-fade-in), .project-item:not(.animate-fade-in)');
      
      elements.forEach(element => {
        element.classList.add('scroll-animate');
      });
      
      // Create intersection observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { 
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
      });
      
      // Observe elements
      document.querySelectorAll('.scroll-animate').forEach(element => {
        observer.observe(element);
      });
      
      return () => {
        observer.disconnect();
        document.head.removeChild(style);
      };
    }, 500); // Delay to ensure hydration is complete
    
    return () => clearTimeout(timer);
  }, []);

  return null;
} 