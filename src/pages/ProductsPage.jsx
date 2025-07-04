import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaSearch, 
  FaFilter, 
  FaMapMarkerAlt, 
  FaStar,
  FaShoppingCart,
  FaHeart,
  FaEye,
  FaSort
} from 'react-icons/fa';
import { useAccessibility } from '../context/AccessibilityContext';
import { useCart } from '../context/CartContext';
import productsData from '../json/products.json';

const ProductsPage = () => {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState('name');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { getFontSizeClasses, handleKeyboardNavigation, isReducedMotion } = useAccessibility();
  const { addToCart } = useCart();

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'mobility', label: 'Mobility Aids' },
    { value: 'communication', label: 'Communication Devices' },
    { value: 'daily-life', label: 'Daily Living Aids' },
    { value: 'health-aids', label: 'Health & Medical' },
    { value: 'education', label: 'Educational Tools' }
  ];

  const locations = [
    { value: 'all', label: 'All Morocco' },
    { value: 'casablanca', label: 'Casablanca' },
    { value: 'rabat', label: 'Rabat' },
    { value: 'marrakech', label: 'Marrakech' },
    { value: 'fes', label: 'Fes' },
    { value: 'tangier', label: 'Tangier' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  // Filter and sort products
  useEffect(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [products, searchQuery, selectedCategory, selectedLocation, priceRange, sortBy]);

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
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
      aria-label="Products page"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className={`${getFontSizeClasses('heading')} font-bold text-gray-900 dark:text-white mb-4`}>
            Browse Assistive Products
          </h1>
          <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300`}>
            Discover products designed to enhance independence and quality of life
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <label htmlFor="product-search" className="sr-only">
                Search products
              </label>
              <div className="relative">
                <FaSearch 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                  aria-hidden="true"
                />
                <input
                  id="product-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className={`w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${getFontSizeClasses('body')}`}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label htmlFor="category-filter" className="sr-only">
                Filter by category
              </label>
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${getFontSizeClasses('body')}`}
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label htmlFor="sort-select" className="sr-only">
                Sort products
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${getFontSizeClasses('body')}`}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300`}>
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="aspect-square bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  <button
                    className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={`Add ${product.name} to wishlist`}
                  >
                    <FaHeart className="text-gray-400 hover:text-red-500 transition-colors" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className={`${getFontSizeClasses('subheading')} font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2`}>
                  {product.name}
                </h3>
                
                <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300 mb-3 line-clamp-2`}>
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-sm ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className={`${getFontSizeClasses('body')} text-gray-500 dark:text-gray-400 text-sm`}>
                    ({product.reviews})
                  </span>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <span className={`${getFontSizeClasses('subheading')} font-bold text-blue-600 dark:text-blue-400`}>
                    ${product.price}
                  </span>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      onKeyDown={(e) => handleKeyboardNavigation(e, () => handleAddToCart(product))}
                      className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <FaShoppingCart className="text-sm" aria-hidden="true" />
                    </button>
                    
                    <button
                      className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      aria-label={`View details for ${product.name}`}
                    >
                      <FaEye className="text-sm" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <FaSearch className="text-4xl text-gray-400 mx-auto mb-4" aria-hidden="true" />
            <h3 className={`${getFontSizeClasses('subheading')} font-semibold text-gray-900 dark:text-white mb-2`}>
              No products found
            </h3>
            <p className={`${getFontSizeClasses('body')} text-gray-600 dark:text-gray-300 mb-4`}>
              Try adjusting your search criteria or browse all categories
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setPriceRange([0, 1000]);
              }}
              className={`px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${getFontSizeClasses('button')}`}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductsPage;
