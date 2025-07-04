import { motion } from 'framer-motion';
import { 
  FaUniversalAccess, 
  FaHeart, 
  FaUsers, 
  FaGlobe,
  FaHandsHelping,
  FaLightbulb,
  FaShieldAlt,
  FaRocket
} from 'react-icons/fa';
import { useAccessibility } from '../context/AccessibilityContext';

const AboutPage = () => {
  const { getFontSizeClasses, isReducedMotion } = useAccessibility();

  const values = [
    {
      icon: FaUniversalAccess,
      title: 'Accessibility First',
      description: 'Every feature is designed with accessibility in mind, ensuring our platform is usable by everyone.'
    },
    {
      icon: FaHeart,
      title: 'Empathy & Care',
      description: 'We understand the challenges faced by people with disabilities and approach every solution with empathy.'
    },
    {
      icon: FaUsers,
      title: 'Community Driven',
      description: 'Our platform thrives on community feedback and collaboration to better serve our users.'
    },
    {
      icon: FaGlobe,
      title: 'Global Impact',
      description: 'Starting in Morocco, we aim to expand accessibility solutions worldwide.'
    }
  ];

  const features = [
    {
      icon: FaHandsHelping,
      title: 'Easy Product Discovery',
      description: 'Advanced search and filtering help users find exactly what they need quickly and efficiently.'
    },
    {
      icon: FaLightbulb,
      title: 'Smart Recommendations',
      description: 'Our platform suggests products based on user needs and preferences.'
    },
    {
      icon: FaShieldAlt,
      title: 'Trusted Sellers',
      description: 'All sellers are verified to ensure quality products and reliable service.'
    },
    {
      icon: FaRocket,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery across Morocco with tracking and support.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: isReducedMotion ? 0.1 : 0.6,
        staggerChildren: isReducedMotion ? 0 : 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isReducedMotion ? 0.1 : 0.5
      }
    }
  };

  return (
    <main 
      id="main-content"
      className="min-h-screen bg-white dark:bg-gray-900"
      tabIndex="-1"
      role="main"
      aria-label="About us page"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <FaUniversalAccess className="text-6xl text-blue-600 dark:text-blue-400 mx-auto mb-6" aria-hidden="true" />
              <h1 className={`${getFontSizeClasses('heading')} font-bold text-gray-900 dark:text-white mb-6`}>
                Making Accessibility Accessible
              </h1>
              <p className={`${getFontSizeClasses('subheading')} text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed`}>
                AccessiMarket is Morocco's first dedicated marketplace for assistive products, 
                connecting people with disabilities to the tools they need for independence and quality of life.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className={`${getFontSizeClasses('heading')} font-bold text-gray-900 dark:text-white mb-6`}>
                Our Mission
              </h2>
              <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300 mb-6 leading-relaxed`}>
                We believe that everyone deserves access to products that enhance their independence and quality of life. 
                In Morocco, many people with disabilities struggle to find appropriate assistive products, especially in 
                underserved regions.
              </p>
              <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300 mb-6 leading-relaxed`}>
                AccessiMarket bridges this gap by creating a digital marketplace where sellers and suppliers can list 
                assistive products, and users can easily browse, compare, and purchase what they need.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className={`${getFontSizeClasses('body')} text-blue-800 dark:text-blue-200 font-medium`}>
                  "Technology should empower everyone, regardless of their abilities. We're here to make that a reality."
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8">
              <h3 className={`${getFontSizeClasses('subheading')} font-semibold text-gray-900 dark:text-white mb-6`}>
                Impact by Numbers
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className={`${getFontSizeClasses('heading')} font-bold text-blue-600 dark:text-blue-400 mb-2`}>
                    500+
                  </div>
                  <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300`}>
                    Products Listed
                  </p>
                </div>
                <div className="text-center">
                  <div className={`${getFontSizeClasses('heading')} font-bold text-green-600 dark:text-green-400 mb-2`}>
                    50+
                  </div>
                  <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300`}>
                    Verified Sellers
                  </p>
                </div>
                <div className="text-center">
                  <div className={`${getFontSizeClasses('heading')} font-bold text-purple-600 dark:text-purple-400 mb-2`}>
                    12
                  </div>
                  <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300`}>
                    Cities Covered
                  </p>
                </div>
                <div className="text-center">
                  <div className={`${getFontSizeClasses('heading')} font-bold text-red-600 dark:text-red-400 mb-2`}>
                    1000+
                  </div>
                  <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300`}>
                    Lives Improved
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className={`${getFontSizeClasses('heading')} font-bold text-gray-900 dark:text-white mb-6`}>
                Our Values
              </h2>
              <p className={`${getFontSizeClasses('subheading')} text-gray-600 dark:text-gray-300 max-w-3xl mx-auto`}>
                These core values guide everything we do and shape how we serve our community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-2xl text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    </div>
                    <h3 className={`${getFontSizeClasses('subheading')} font-semibold text-gray-900 dark:text-white mb-3`}>
                      {value.title}
                    </h3>
                    <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300 leading-relaxed`}>
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className={`${getFontSizeClasses('heading')} font-bold text-gray-900 dark:text-white mb-6`}>
                Platform Features
              </h2>
              <p className={`${getFontSizeClasses('subheading')} text-gray-600 dark:text-gray-300 max-w-3xl mx-auto`}>
                Designed with accessibility and user experience at the forefront.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-xl text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className={`${getFontSizeClasses('subheading')} font-semibold text-gray-900 dark:text-white mb-2`}>
                        {feature.title}
                      </h3>
                      <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300 leading-relaxed`}>
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className={`${getFontSizeClasses('heading')} font-bold text-white mb-6`}>
                Join Our Mission
              </h2>
              <p className={`${getFontSizeClasses('subheading')} text-blue-100 mb-8 max-w-3xl mx-auto`}>
                Whether you're looking for assistive products or want to help others by selling, 
                you're welcome to be part of our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/products"
                  className={`inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 ${getFontSizeClasses('button')}`}
                >
                  Browse Products
                </a>
                <a
                  href="/sell"
                  className={`inline-flex items-center justify-center px-8 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 ${getFontSizeClasses('button')}`}
                >
                  Start Selling
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
