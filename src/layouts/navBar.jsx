import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaUniversalAccess,
  FaHome,
  FaSearch,
  FaStore,
  FaInfoCircle,
  FaEnvelope
} from 'react-icons/fa';
import { useAccessibility } from '../context/AccessibilityContext';
import { useCart } from '../context/CartContext';
import AccessibilityToolbar from '../components/AccessibilityToolbar';
import CartModal from '../context/CartModal';

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  const { getFontSizeClasses, handleKeyboardNavigation } = useAccessibility();
  const { getCartCount } = useCart();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    {
      name: 'Home',
      path: '/',
      icon: FaHome,
      description: 'Go to homepage'
    },
    {
      name: 'Browse Products',
      path: '/products',
      icon: FaSearch,
      description: 'Browse assistive products'
    },
    {
      name: 'Sell on Platform',
      path: '/sell',
      icon: FaStore,
      description: 'List your products for sale'
    },
    {
      name: 'About Us',
      path: '/about',
      icon: FaInfoCircle,
      description: 'Learn about our mission'
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: FaEnvelope,
      description: 'Get in touch with us'
    }
  ];

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav
        className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1"
                aria-label="AccessiMarket - Go to homepage"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FaUniversalAccess className="text-white text-xl" aria-hidden="true" />
                </div>
                <div className="hidden sm:block">
                  <h1 className={`font-bold text-gray-900 dark:text-white ${getFontSizeClasses('heading')}`}>
                    AccessiMarket
                  </h1>
                  <p className={`text-gray-600 dark:text-gray-300 ${getFontSizeClasses('body')} text-xs`}>
                    Products for Every Ability
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = isActivePage(item.path);

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${getFontSizeClasses('button')} ${
                      isActive
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    aria-label={item.description}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon className="text-sm" aria-hidden="true" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-3">
              {/* Accessibility Toolbar */}
              <AccessibilityToolbar />

              {/* Cart Button */}
              <button
                onClick={toggleCart}
                onKeyDown={(e) => handleKeyboardNavigation(e, toggleCart)}
                className="relative p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`Shopping cart with ${getCartCount()} items`}
              >
                <FaShoppingCart className="text-xl text-gray-700 dark:text-gray-300" aria-hidden="true" />
                {getCartCount() > 0 && (
                  <span
                    className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                    aria-label={`${getCartCount()} items in cart`}
                  >
                    {getCartCount()}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                onKeyDown={(e) => handleKeyboardNavigation(e, toggleMobileMenu)}
                className="md:hidden p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`${isMobileMenuOpen ? 'Close' : 'Open'} mobile menu`}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="text-xl text-gray-700 dark:text-gray-300" aria-hidden="true" />
                ) : (
                  <FaBars className="text-xl text-gray-700 dark:text-gray-300" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
              role="menu"
              aria-label="Mobile navigation menu"
            >
              <div className="px-4 py-2 space-y-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = isActivePage(item.path);

                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={`flex items-center gap-3 px-3 py-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${getFontSizeClasses('button')} ${
                        isActive
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                      role="menuitem"
                      aria-label={item.description}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <Icon className="text-lg" aria-hidden="true" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};