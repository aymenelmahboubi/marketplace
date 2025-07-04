import React, { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext();

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

export const AccessibilityProvider = ({ children }) => {
  // Font size state (small, medium, large, extra-large)
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem('accessibility-font-size') || 'medium';
  });

  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('accessibility-dark-mode');
    return saved ? JSON.parse(saved) : false;
  });

  // High contrast mode
  const [isHighContrast, setIsHighContrast] = useState(() => {
    const saved = localStorage.getItem('accessibility-high-contrast');
    return saved ? JSON.parse(saved) : false;
  });

  // Reduced motion preference
  const [isReducedMotion, setIsReducedMotion] = useState(() => {
    const saved = localStorage.getItem('accessibility-reduced-motion');
    if (saved) return JSON.parse(saved);
    
    // Check system preference
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  // Focus management
  const [focusVisible, setFocusVisible] = useState(true);

  // Font size options
  const fontSizeOptions = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    'extra-large': 'text-xl'
  };

  // Font size classes for different elements
  const getFontSizeClasses = (element = 'body') => {
    const baseClasses = {
      body: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
        'extra-large': 'text-xl'
      },
      heading: {
        small: 'text-lg',
        medium: 'text-xl',
        large: 'text-2xl',
        'extra-large': 'text-3xl'
      },
      subheading: {
        small: 'text-base',
        medium: 'text-lg',
        large: 'text-xl',
        'extra-large': 'text-2xl'
      },
      button: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
        'extra-large': 'text-xl'
      }
    };
    
    return baseClasses[element]?.[fontSize] || baseClasses.body[fontSize];
  };

  // Toggle functions
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const toggleHighContrast = () => {
    setIsHighContrast(prev => !prev);
  };

  const toggleReducedMotion = () => {
    setIsReducedMotion(prev => !prev);
  };

  const increaseFontSize = () => {
    const sizes = ['small', 'medium', 'large', 'extra-large'];
    const currentIndex = sizes.indexOf(fontSize);
    if (currentIndex < sizes.length - 1) {
      setFontSize(sizes[currentIndex + 1]);
    }
  };

  const decreaseFontSize = () => {
    const sizes = ['small', 'medium', 'large', 'extra-large'];
    const currentIndex = sizes.indexOf(fontSize);
    if (currentIndex > 0) {
      setFontSize(sizes[currentIndex - 1]);
    }
  };

  const resetFontSize = () => {
    setFontSize('medium');
  };

  // Persist settings to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-font-size', fontSize);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('accessibility-dark-mode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('accessibility-high-contrast', JSON.stringify(isHighContrast));
  }, [isHighContrast]);

  useEffect(() => {
    localStorage.setItem('accessibility-reduced-motion', JSON.stringify(isReducedMotion));
  }, [isReducedMotion]);

  // Apply dark mode class to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Apply high contrast class to document
  useEffect(() => {
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  // Apply reduced motion class to document
  useEffect(() => {
    if (isReducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  }, [isReducedMotion]);

  // Keyboard navigation helpers
  const handleKeyboardNavigation = (event, callback) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  };

  // Focus management
  const skipToContent = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const value = {
    // State
    fontSize,
    isDarkMode,
    isHighContrast,
    isReducedMotion,
    focusVisible,
    
    // Font size helpers
    getFontSizeClasses,
    fontSizeOptions,
    
    // Actions
    setFontSize,
    toggleDarkMode,
    toggleHighContrast,
    toggleReducedMotion,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    
    // Utilities
    handleKeyboardNavigation,
    skipToContent
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export default AccessibilityProvider;
