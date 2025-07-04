import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUniversalAccess, 
  FaTextHeight, 
  FaMoon, 
  FaSun, 
  FaEye, 
  FaKeyboard,
  FaPlus,
  FaMinus,
  FaRedo
} from 'react-icons/fa';
import { useAccessibility } from '../context/AccessibilityContext';

const AccessibilityToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    fontSize,
    isDarkMode,
    isHighContrast,
    isReducedMotion,
    toggleDarkMode,
    toggleHighContrast,
    toggleReducedMotion,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    skipToContent,
    handleKeyboardNavigation
  } = useAccessibility();

  const toggleToolbar = () => {
    setIsOpen(!isOpen);
  };

  const toolbarVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="relative">
      {/* Skip to content link - hidden until focused */}
      <button
        onClick={skipToContent}
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onKeyDown={(e) => handleKeyboardNavigation(e, skipToContent)}
      >
        Skip to main content
      </button>

      {/* Accessibility toggle button */}
      <button
        onClick={toggleToolbar}
        onKeyDown={(e) => handleKeyboardNavigation(e, toggleToolbar)}
        className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label={`${isOpen ? 'Close' : 'Open'} accessibility options`}
        aria-expanded={isOpen}
        aria-controls="accessibility-toolbar"
      >
        <FaUniversalAccess className="text-lg" aria-hidden="true" />
        <span className="hidden sm:inline">Accessibility</span>
      </button>

      {/* Accessibility toolbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="accessibility-toolbar"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={toolbarVariants}
            className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 w-80 z-50"
            role="region"
            aria-label="Accessibility options"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Accessibility Options
            </h3>

            {/* Font Size Controls */}
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Font Size
              </h4>
              <div className="flex items-center gap-2">
                <button
                  onClick={decreaseFontSize}
                  onKeyDown={(e) => handleKeyboardNavigation(e, decreaseFontSize)}
                  className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Decrease font size"
                  disabled={fontSize === 'small'}
                >
                  <FaMinus className="text-sm" aria-hidden="true" />
                </button>
                
                <span className="px-3 py-1 bg-gray-50 dark:bg-gray-700 rounded text-sm font-medium min-w-[80px] text-center text-gray-900 dark:text-white">
                  {fontSize.charAt(0).toUpperCase() + fontSize.slice(1)}
                </span>
                
                <button
                  onClick={increaseFontSize}
                  onKeyDown={(e) => handleKeyboardNavigation(e, increaseFontSize)}
                  className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Increase font size"
                  disabled={fontSize === 'extra-large'}
                >
                  <FaPlus className="text-sm" aria-hidden="true" />
                </button>
                
                <button
                  onClick={resetFontSize}
                  onKeyDown={(e) => handleKeyboardNavigation(e, resetFontSize)}
                  className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Reset font size to default"
                >
                  <FaRedo className="text-sm" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Theme Toggle */}
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Theme
              </h4>
              <button
                onClick={toggleDarkMode}
                onKeyDown={(e) => handleKeyboardNavigation(e, toggleDarkMode)}
                className="flex items-center gap-3 w-full p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                {isDarkMode ? (
                  <FaSun className="text-yellow-500" aria-hidden="true" />
                ) : (
                  <FaMoon className="text-blue-600" aria-hidden="true" />
                )}
                <span className="text-gray-900 dark:text-white">
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </span>
              </button>
            </div>

            {/* High Contrast Toggle */}
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Contrast
              </h4>
              <button
                onClick={toggleHighContrast}
                onKeyDown={(e) => handleKeyboardNavigation(e, toggleHighContrast)}
                className="flex items-center gap-3 w-full p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
              >
                <FaEye className={isHighContrast ? 'text-green-600' : 'text-gray-500'} aria-hidden="true" />
                <span className="text-gray-900 dark:text-white">
                  High Contrast {isHighContrast ? 'On' : 'Off'}
                </span>
              </button>
            </div>

            {/* Reduced Motion Toggle */}
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Motion
              </h4>
              <button
                onClick={toggleReducedMotion}
                onKeyDown={(e) => handleKeyboardNavigation(e, toggleReducedMotion)}
                className="flex items-center gap-3 w-full p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`${isReducedMotion ? 'Enable' : 'Disable'} animations`}
              >
                <FaKeyboard className={isReducedMotion ? 'text-green-600' : 'text-gray-500'} aria-hidden="true" />
                <span className="text-gray-900 dark:text-white">
                  Reduced Motion {isReducedMotion ? 'On' : 'Off'}
                </span>
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={toggleToolbar}
              onKeyDown={(e) => handleKeyboardNavigation(e, toggleToolbar)}
              className="w-full mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccessibilityToolbar;
