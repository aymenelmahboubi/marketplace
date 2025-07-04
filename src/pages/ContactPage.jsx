import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaQuestionCircle,
  FaHeadset,
  FaStore
} from 'react-icons/fa';
import { useAccessibility } from '../context/AccessibilityContext';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const { getFontSizeClasses, handleKeyboardNavigation, isReducedMotion } = useAccessibility();

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: '+212 5XX-XXXX-XX',
      description: 'Mon-Fri 9AM-6PM'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: 'contact@accessimarket.ma',
      description: 'We reply within 24 hours'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: 'Casablanca, Morocco',
      description: 'Visit our office'
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM',
      description: 'Sat: 10AM-4PM'
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry', icon: FaQuestionCircle },
    { value: 'support', label: 'Customer Support', icon: FaHeadset },
    { value: 'seller', label: 'Become a Seller', icon: FaStore },
    { value: 'partnership', label: 'Partnership', icon: FaLinkedin }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, url: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: FaTwitter, url: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: FaInstagram, url: '#', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: FaLinkedin, url: '#', color: 'hover:text-blue-700' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
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
      aria-label="Contact page"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <h1 className={`${getFontSizeClasses('heading')} font-bold text-gray-900 dark:text-white mb-6`}>
              Get in Touch
            </h1>
            <p className={`${getFontSizeClasses('subheading')} text-gray-600 dark:text-gray-300 max-w-3xl mx-auto`}>
              Have questions about our platform or need assistance? We're here to help. 
              Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:col-span-1"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className={`${getFontSizeClasses('subheading')} font-semibold text-gray-900 dark:text-white mb-6`}>
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-xl text-blue-600 dark:text-blue-400" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className={`${getFontSizeClasses('body')} font-semibold text-gray-900 dark:text-white mb-1`}>
                          {info.title}
                        </h3>
                        <p className={`${getFontSizeClasses('body')} text-gray-900 dark:text-white mb-1`}>
                          {info.details}
                        </p>
                        <p className={`${getFontSizeClasses('body')} text-gray-500 dark:text-gray-400 text-sm`}>
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div variants={itemVariants}>
              <h3 className={`${getFontSizeClasses('subheading')} font-semibold text-gray-900 dark:text-white mb-4`}>
                Follow Us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      className={`w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      aria-label={`Follow us on ${social.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="text-lg" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:col-span-2"
          >
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
              <h2 className={`${getFontSizeClasses('subheading')} font-semibold text-gray-900 dark:text-white mb-6`}>
                Send us a Message
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className={`${getFontSizeClasses('body')} text-green-800 dark:text-green-200`}>
                    Thank you for your message! We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label htmlFor="inquiryType" className={`block ${getFontSizeClasses('body')} font-medium text-gray-700 dark:text-gray-300 mb-2`}>
                    Type of Inquiry
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${getFontSizeClasses('body')}`}
                    required
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={`block ${getFontSizeClasses('body')} font-medium text-gray-700 dark:text-gray-300 mb-2`}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${getFontSizeClasses('body')}`}
                      placeholder="Enter your full name"
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
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className={`block ${getFontSizeClasses('body')} font-medium text-gray-700 dark:text-gray-300 mb-2`}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${getFontSizeClasses('body')}`}
                    placeholder="Brief description of your inquiry"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={`block ${getFontSizeClasses('body')} font-medium text-gray-700 dark:text-gray-300 mb-2`}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${getFontSizeClasses('body')}`}
                    placeholder="Please provide details about your inquiry..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onKeyDown={(e) => handleKeyboardNavigation(e, () => handleSubmit(e))}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${getFontSizeClasses('button')}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane aria-hidden="true" />
                      Send Message
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
              Frequently Asked Questions
            </h2>
            <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300`}>
              Find quick answers to common questions about our platform.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className={`${getFontSizeClasses('body')} font-semibold text-gray-900 dark:text-white mb-2`}>
                  How do I create an account?
                </h3>
                <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300 text-sm`}>
                  Click on "Sign Up" and follow the simple registration process. Account creation is free.
                </p>
              </div>
              <div>
                <h3 className={`${getFontSizeClasses('body')} font-semibold text-gray-900 dark:text-white mb-2`}>
                  Is shipping available nationwide?
                </h3>
                <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300 text-sm`}>
                  Yes, we deliver to all major cities in Morocco with tracking and insurance.
                </p>
              </div>
              <div>
                <h3 className={`${getFontSizeClasses('body')} font-semibold text-gray-900 dark:text-white mb-2`}>
                  How do I become a seller?
                </h3>
                <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300 text-sm`}>
                  Visit our "Sell on Platform" page to learn about requirements and start the application process.
                </p>
              </div>
              <div>
                <h3 className={`${getFontSizeClasses('body')} font-semibold text-gray-900 dark:text-white mb-2`}>
                  What payment methods do you accept?
                </h3>
                <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300 text-sm`}>
                  We accept credit cards, bank transfers, and cash on delivery for your convenience.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default ContactPage;
