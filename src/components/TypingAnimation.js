'use client';

import { useState, useEffect } from 'react';

export default function TypingAnimation({ 
  texts, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseTime = 2000,
  className = "text-gradient bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent"
}) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentText = texts[currentIndex];

    if (isDeleting) {
      // Deleting mode
      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        timer = setTimeout(() => {}, 500); // Short pause after deletion
      } else {
        // Remove one character
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      }
    } else {
      // Typing mode
      if (displayText.length === currentText.length) {
        // Finished typing, pause before deletion
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else {
        // Add one character
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, texts, deletingSpeed, typingSpeed, pauseTime]);

  return (
    <span className={className}>
      {displayText}
      <span className="cursor-blink"></span>
    </span>
  );
} 