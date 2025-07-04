import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaMapMarkerAlt, FaFilter, FaArrowRight } from 'react-icons/fa';
import { useAccessibility } from '../context/AccessibilityContext';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  
  const { getFontSizeClasses, handleKeyboardNavigation, isReducedMotion } = useAccessibility();

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Search:', { searchQuery, location, category });
  };

  const categories = [
    'All Categories',
    'Mobility Aids',
    'Communication Devices',
    'Daily Living Aids',
    'Health & Medical',
    'Educational Tools',
    'Sensory Aids'
  ];

  const moroccanCities = [
    'All Morocco',
    'Casablanca',
    'Rabat',
    'Marrakech',
    'Fes',
    'Tangier',
    'Agadir',
    'Meknes',
    'Oujda',
    'Kenitra'
  ];

  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: isReducedMotion ? 0.1 : 0.8,
        ease: "easeOut"
      }
    }
  };

  const searchVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: isReducedMotion ? 0.1 : 0.6,
        delay: isReducedMotion ? 0 : 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-16 lg:py-24"
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-gray-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            {/* Main Headline */}
            <h1 
              id="hero-heading"
              className={`${getFontSizeClasses('heading')} font-bold text-gray-900 dark:text-white mb-6 leading-tight`}
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              Accessible Products for{' '}
              <span className="text-blue-600 dark:text-blue-400">Every Ability</span>
            </h1>

            {/* Subtitle */}
            <p className={`${getFontSizeClasses('subheading')} text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed`}>
              Discover assistive products designed to enhance independence and quality of life. 
              From mobility aids to communication devices, find what you need or list your products 
              to help others in Morocco and beyond.
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                '🦽 Mobility Solutions',
                '🗣️ Communication Aids', 
                '🏠 Daily Living Tools',
                '🩺 Health & Medical',
                '📚 Educational Resources'
              ].map((feature, index) => (
                <span 
                  key={index}
                  className={`inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 ${getFontSizeClasses('body')} text-gray-700 dark:text-gray-300`}
                >
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Search Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={searchVariants}
          >
            <form 
              onSubmit={handleSearch}
              className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700"
              role="search"
              aria-label="Search for assistive products"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search Input */}
                <div className="md:col-span-2">
                  <label htmlFor="search-input" className="sr-only">
                    Search for products
                  </label>
                  <div className="relative">
                    <FaSearch 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                      aria-hidden="true"
                    />
                    <input
                      id="search-input"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search wheelchairs, hearing aids, canes..."
                      className={`w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${getFontSizeClasses('body')}`}
                      aria-describedby="search-help"
                    />
                  </div>
                  <p id="search-help" className="sr-only">
                    Enter keywords to search for assistive products
                  </p>
                </div>

                {/* Category Filter */}
                <div>
                  <label htmlFor="category-select" className="sr-only">
                    Product category
                  </label>
                  <div className="relative">
                    <FaFilter 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                      aria-hidden="true"
                    />
                    <select
                      id="category-select"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className={`w-full pl-10 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${getFontSizeClasses('body')} appearance-none`}
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <label htmlFor="location-select" className="sr-only">
                    Location in Morocco
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                      aria-hidden="true"
                    />
                    <select
                      id="location-select"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className={`w-full pl-10 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${getFontSizeClasses('body')} appearance-none`}
                    >
                      {moroccanCities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="submit"
                  className={`inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${getFontSizeClasses('button')}`}
                  onKeyDown={(e) => handleKeyboardNavigation(e, () => handleSearch(e))}
                >
                  <FaSearch aria-hidden="true" />
                  Search Products
                </button>
                
                <Link
                  to="/products"
                  className={`inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${getFontSizeClasses('button')}`}
                >
                  Browse All
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </div>
            </form>
          </motion.div>

          {/* Call to Action for Sellers */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { 
                  duration: isReducedMotion ? 0.1 : 0.6,
                  delay: isReducedMotion ? 0 : 0.6
                }
              }
            }}
            className="mt-12"
          >
            <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-400 mb-4`}>
              Are you a seller or supplier?
            </p>
            <Link
              to="/sell"
              className={`inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${getFontSizeClasses('button')}`}
            >
              Start Selling Today
              <FaArrowRight aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
