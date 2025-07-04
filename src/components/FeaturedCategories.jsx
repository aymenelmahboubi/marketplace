import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaWheelchair, 
  FaComments, 
  FaHome, 
  FaStethoscope, 
  FaGraduationCap,
  FaEye,
  FaHandsHelping,
  FaArrowRight
} from 'react-icons/fa';
import { useAccessibility } from '../context/AccessibilityContext';

const FeaturedCategories = () => {
  const { getFontSizeClasses, handleKeyboardNavigation, isReducedMotion } = useAccessibility();

  const categories = [
    {
      id: 'mobility',
      name: 'Mobility',
      description: 'Wheelchairs, walkers, canes, and mobility scooters to enhance movement and independence.',
      icon: FaWheelchair,
      color: 'blue',
      productCount: 245,
      featured: true
    },
    {
      id: 'communication',
      name: 'Communication',
      description: 'Speech devices, hearing aids, and communication boards for better interaction.',
      icon: FaComments,
      color: 'green',
      productCount: 189,
      featured: true
    },
    {
      id: 'daily-life',
      name: 'Daily Life',
      description: 'Kitchen aids, dressing tools, and adaptive equipment for everyday tasks.',
      icon: FaHome,
      color: 'purple',
      productCount: 312,
      featured: true
    },
    {
      id: 'health-aids',
      name: 'Health Aids',
      description: 'Medical equipment, monitoring devices, and therapeutic tools.',
      icon: FaStethoscope,
      color: 'red',
      productCount: 156,
      featured: true
    },
    {
      id: 'education',
      name: 'Education',
      description: 'Learning tools, adaptive software, and educational resources.',
      icon: FaGraduationCap,
      color: 'yellow',
      productCount: 98,
      featured: true
    },
    {
      id: 'sensory',
      name: 'Sensory Aids',
      description: 'Visual and hearing assistance tools, tactile devices.',
      icon: FaEye,
      color: 'indigo',
      productCount: 134,
      featured: false
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      icon: 'text-blue-600 dark:text-blue-400',
      hover: 'hover:bg-blue-100 dark:hover:bg-blue-900/30',
      focus: 'focus:ring-blue-500'
    },
    green: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800',
      icon: 'text-green-600 dark:text-green-400',
      hover: 'hover:bg-green-100 dark:hover:bg-green-900/30',
      focus: 'focus:ring-green-500'
    },
    purple: {
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      border: 'border-purple-200 dark:border-purple-800',
      icon: 'text-purple-600 dark:text-purple-400',
      hover: 'hover:bg-purple-100 dark:hover:bg-purple-900/30',
      focus: 'focus:ring-purple-500'
    },
    red: {
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-200 dark:border-red-800',
      icon: 'text-red-600 dark:text-red-400',
      hover: 'hover:bg-red-100 dark:hover:bg-red-900/30',
      focus: 'focus:ring-red-500'
    },
    yellow: {
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-200 dark:border-yellow-800',
      icon: 'text-yellow-600 dark:text-yellow-400',
      hover: 'hover:bg-yellow-100 dark:hover:bg-yellow-900/30',
      focus: 'focus:ring-yellow-500'
    },
    indigo: {
      bg: 'bg-indigo-50 dark:bg-indigo-900/20',
      border: 'border-indigo-200 dark:border-indigo-800',
      icon: 'text-indigo-600 dark:text-indigo-400',
      hover: 'hover:bg-indigo-100 dark:hover:bg-indigo-900/30',
      focus: 'focus:ring-indigo-500'
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: isReducedMotion ? 0.1 : 0.6,
        staggerChildren: isReducedMotion ? 0 : 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isReducedMotion ? 0.1 : 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      className="py-16 lg:py-24 bg-white dark:bg-gray-900"
      aria-labelledby="categories-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            id="categories-heading"
            className={`${getFontSizeClasses('heading')} font-bold text-gray-900 dark:text-white mb-4`}
          >
            Shop by Category
          </h2>
          <p className={`${getFontSizeClasses('subheading')} text-gray-600 dark:text-gray-300 max-w-3xl mx-auto`}>
            Find the assistive products you need organized by category. 
            Each section is designed to help you discover solutions that enhance independence and quality of life.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color];
            
            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                className="group"
              >
                <Link
                  to={`/products?category=${category.id}`}
                  className={`block p-6 rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 ${colors.bg} ${colors.border} ${colors.hover} ${colors.focus} focus:ring-offset-2`}
                  aria-label={`Browse ${category.name} products - ${category.productCount} items available`}
                  onKeyDown={(e) => handleKeyboardNavigation(e, () => {})}
                >
                  {/* Category Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                      <Icon className={`text-2xl ${colors.icon}`} aria-hidden="true" />
                    </div>
                    {category.featured && (
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Category Info */}
                  <h3 className={`${getFontSizeClasses('subheading')} font-semibold text-gray-900 dark:text-white mb-2 group-hover:${colors.icon.replace('text-', 'text-')} transition-colors`}>
                    {category.name}
                  </h3>
                  
                  <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300 mb-4 leading-relaxed`}>
                    {category.description}
                  </p>

                  {/* Product Count and Arrow */}
                  <div className="flex items-center justify-between">
                    <span className={`${getFontSizeClasses('body')} text-gray-500 dark:text-gray-400 font-medium`}>
                      {category.productCount} products
                    </span>
                    <FaArrowRight 
                      className={`text-gray-400 group-hover:${colors.icon.replace('text-', 'text-')} group-hover:translate-x-1 transition-all duration-300`}
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: isReducedMotion ? 0.1 : 0.6,
                delay: isReducedMotion ? 0 : 0.3
              }
            }
          }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <FaHandsHelping className="text-4xl text-blue-600 dark:text-blue-400 mx-auto mb-4" aria-hidden="true" />
            <h3 className={`${getFontSizeClasses('subheading')} font-semibold text-gray-900 dark:text-white mb-4`}>
              Can't find what you're looking for?
            </h3>
            <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto`}>
              Our platform connects you with suppliers across Morocco. If you need a specific product, 
              let us know and we'll help you find it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${getFontSizeClasses('button')}`}
              >
                Request Product
                <FaArrowRight aria-hidden="true" />
              </Link>
              <Link
                to="/products"
                className={`inline-flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${getFontSizeClasses('button')}`}
              >
                Browse All Products
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
