import { Link } from 'react-router-dom';
import {
  FaUniversalAccess,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart
} from 'react-icons/fa';
import { useAccessibility } from '../context/AccessibilityContext';

export const Footer = () => {
  const { getFontSizeClasses } = useAccessibility();

  const footerLinks = {
    products: [
      { name: 'Mobility Aids', path: '/products?category=mobility' },
      { name: 'Communication Devices', path: '/products?category=communication' },
      { name: 'Daily Living Aids', path: '/products?category=daily-life' },
      { name: 'Health & Medical', path: '/products?category=health-aids' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Mission', path: '/about#mission' },
      { name: 'Contact', path: '/contact' },
      { name: 'Careers', path: '/careers' }
    ],
    support: [
      { name: 'Help Center', path: '/help' },
      { name: 'Accessibility Guide', path: '/accessibility' },
      { name: 'Shipping Info', path: '/shipping' },
      { name: 'Returns', path: '/returns' }
    ],
    sellers: [
      { name: 'Sell on Platform', path: '/sell' },
      { name: 'Seller Guidelines', path: '/seller-guidelines' },
      { name: 'Seller Support', path: '/seller-support' },
      { name: 'Partner Program', path: '/partners' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, url: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: FaTwitter, url: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: FaInstagram, url: '#', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: FaLinkedin, url: '#', color: 'hover:text-blue-700' }
  ];

  return (
    <footer
      className="bg-gray-900 text-white mt-auto"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1"
              aria-label="AccessiMarket - Go to homepage"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <FaUniversalAccess className="text-white text-xl" aria-hidden="true" />
              </div>
              <div>
                <h3 className={`font-bold ${getFontSizeClasses('subheading')}`}>
                  AccessiMarket
                </h3>
                <p className={`text-gray-400 ${getFontSizeClasses('body')} text-sm`}>
                  Products for Every Ability
                </p>
              </div>
            </Link>

            <p className={`text-gray-300 mb-6 leading-relaxed ${getFontSizeClasses('body')}`}>
              Connecting people with disabilities to the assistive products they need.
              Making accessibility accessible across Morocco and beyond.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-400" aria-hidden="true" />
                <span className={getFontSizeClasses('body')}>+212 5XX-XXXX-XX</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" aria-hidden="true" />
                <span className={getFontSizeClasses('body')}>contact@accessimarket.ma</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400" aria-hidden="true" />
                <span className={getFontSizeClasses('body')}>Casablanca, Morocco</span>
              </div>
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${getFontSizeClasses('subheading')}`}>
              Products
            </h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded ${getFontSizeClasses('body')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${getFontSizeClasses('subheading')}`}>
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded ${getFontSizeClasses('body')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${getFontSizeClasses('subheading')}`}>
              Support
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded ${getFontSizeClasses('body')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className={`text-gray-400 ${getFontSizeClasses('body')}`}>
                Follow us:
              </span>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`text-gray-400 ${social.color} transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded`}
                    aria-label={`Follow us on ${social.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="text-xl" aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className={`px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${getFontSizeClasses('body')}`}
                aria-label="Email address for newsletter"
              />
              <button className={`px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${getFontSizeClasses('button')}`}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className={`text-gray-400 ${getFontSizeClasses('body')} text-center sm:text-left`}>
              © 2024 AccessiMarket. Made with{' '}
              <FaHeart className="inline text-red-500 mx-1" aria-hidden="true" />
              for accessibility.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className={`text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded ${getFontSizeClasses('body')}`}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className={`text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded ${getFontSizeClasses('body')}`}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};