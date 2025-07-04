import { motion } from 'framer-motion';
import { useAccessibility } from '../../context/AccessibilityContext';
import HeroSection from '../../components/HeroSection';
import FeaturedCategories from '../../components/FeaturedCategories';

export const HomePage = () => {
  const { isReducedMotion } = useAccessibility();

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: isReducedMotion ? 0.1 : 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.main
      id="main-content"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="min-h-screen"
      tabIndex="-1"
      role="main"
      aria-label="Homepage content"
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Categories */}
      <FeaturedCategories />

      {/* Additional sections will be added here */}
    </motion.main>
  );
};