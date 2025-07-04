import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaStore, 
  FaUpload, 
  FaCheck, 
  FaDollarSign,
  FaShippingFast,
  FaUsers,
  FaChartLine,
  FaHandshake,
  FaQuestionCircle
} from 'react-icons/fa';
import { useAccessibility } from '../context/AccessibilityContext';

const SellPage = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    description: '',
    experience: '',
    agreeToTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const { getFontSizeClasses, handleKeyboardNavigation, isReducedMotion } = useAccessibility();

  const benefits = [
    {
      icon: FaUsers,
      title: 'Reach More Customers',
      description: 'Connect with people across Morocco who need assistive products'
    },
    {
      icon: FaDollarSign,
      title: 'Competitive Fees',
      description: 'Low commission rates to help you maximize your profits'
    },
    {
      icon: FaShippingFast,
      title: 'Logistics Support',
      description: 'We help with shipping and delivery across the country'
    },
    {
      icon: FaChartLine,
      title: 'Sales Analytics',
      description: 'Track your performance with detailed sales reports'
    }
  ];

  const requirements = [
    'Valid business registration in Morocco',
    'Quality assistive products that meet safety standards',
    'Commitment to excellent customer service',
    'Ability to fulfill orders within 3-5 business days'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        businessName: '',
        contactName: '',
        email: '',
        phone: '',
        businessType: '',
        description: '',
        experience: '',
        agreeToTerms: false
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
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
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8"
      tabIndex="-1"
      role="main"
      aria-label="Sell on platform page"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <FaStore className="text-6xl text-blue-600 dark:text-blue-400 mx-auto mb-6" aria-hidden="true" />
            <h1 className={`${getFontSizeClasses('heading')} font-bold text-gray-900 dark:text-white mb-6`}>
              Start Selling on AccessiMarket
            </h1>
            <p className={`${getFontSizeClasses('subheading')} text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8`}>
              Join our marketplace and help make assistive products more accessible across Morocco. 
              Reach customers who need your products and grow your business with our support.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Benefits Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className={`${getFontSizeClasses('subheading')} font-semibold text-gray-900 dark:text-white mb-6`}>
                Why Sell With Us?
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-xl text-blue-600 dark:text-blue-400" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className={`${getFontSizeClasses('body')} font-semibold text-gray-900 dark:text-white mb-2`}>
                          {benefit.title}
                        </h3>
                        <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300`}>
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Requirements */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className={`${getFontSizeClasses('subheading')} font-semibold text-gray-900 dark:text-white mb-4`}>
                Requirements
              </h3>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <span className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300`}>
                      {requirement}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
              <h2 className={`${getFontSizeClasses('subheading')} font-semibold text-gray-900 dark:text-white mb-6`}>
                Seller Application
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className={`${getFontSizeClasses('body')} text-green-800 dark:text-green-200`}>
                    Application submitted successfully! We'll review your application and contact you within 3-5 business days.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Business Name */}
                <div>
                  <label htmlFor="businessName" className={`block ${getFontSizeClasses('body')} font-medium text-gray-700 dark:text-gray-300 mb-2`}>
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${getFontSizeClasses('body')}`}
                    placeholder="Enter your business name"
                    required
                  />
                </div>

                {/* Contact Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactName" className={`block ${getFontSizeClasses('body')} font-medium text-gray-700 dark:text-gray-300 mb-2`}>
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${getFontSizeClasses('body')}`}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block ${getFontSizeClasses('body')} font-medium text-gray-700 dark:text-gray-300 mb-2`}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${getFontSizeClasses('body')}`}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone and Business Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className={`block ${getFontSizeClasses('body')} font-medium text-gray-700 dark:text-gray-300 mb-2`}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${getFontSizeClasses('body')}`}
                      placeholder="+212 XXX-XXX-XXX"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="businessType" className={`block ${getFontSizeClasses('body')} font-medium text-gray-700 dark:text-gray-300 mb-2`}>
                      Business Type *
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${getFontSizeClasses('body')}`}
                      required
                    >
                      <option value="">Select business type</option>
                      <option value="manufacturer">Manufacturer</option>
                      <option value="distributor">Distributor</option>
                      <option value="retailer">Retailer</option>
                      <option value="individual">Individual Seller</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className={`block ${getFontSizeClasses('body')} font-medium text-gray-700 dark:text-gray-300 mb-2`}>
                    Business Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${getFontSizeClasses('body')}`}
                    placeholder="Tell us about your business and the products you sell..."
                    required
                  />
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <label htmlFor="agreeToTerms" className={`${getFontSizeClasses('body')} text-gray-700 dark:text-gray-300`}>
                    I agree to the{' '}
                    <a href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="/seller-guidelines" className="text-blue-600 dark:text-blue-400 hover:underline">
                      Seller Guidelines
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.agreeToTerms}
                  onKeyDown={(e) => handleKeyboardNavigation(e, () => handleSubmit(e))}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${getFontSizeClasses('button')}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <FaHandshake aria-hidden="true" />
                      Submit Application
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className={`${getFontSizeClasses('subheading')} font-semibold text-gray-900 dark:text-white mb-4`}>
              Seller FAQ
            </h2>
            <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300`}>
              Common questions about selling on our platform.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className={`${getFontSizeClasses('body')} font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2`}>
                  <FaQuestionCircle className="text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  What are the commission fees?
                </h3>
                <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300 text-sm`}>
                  We charge a competitive 5-8% commission on sales, depending on your product category and sales volume.
                </p>
              </div>
              <div>
                <h3 className={`${getFontSizeClasses('body')} font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2`}>
                  <FaQuestionCircle className="text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  How long does approval take?
                </h3>
                <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300 text-sm`}>
                  Most applications are reviewed within 3-5 business days. We'll contact you with the decision.
                </p>
              </div>
              <div>
                <h3 className={`${getFontSizeClasses('body')} font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2`}>
                  <FaQuestionCircle className="text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  Do you provide marketing support?
                </h3>
                <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300 text-sm`}>
                  Yes! We help promote your products through our platform and provide marketing tools and analytics.
                </p>
              </div>
              <div>
                <h3 className={`${getFontSizeClasses('body')} font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2`}>
                  <FaQuestionCircle className="text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  What payment methods are supported?
                </h3>
                <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300 text-sm`}>
                  We support bank transfers, mobile payments, and can set up weekly or monthly payment schedules.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default SellPage;
