import { NavBar } from "./layouts/navBar";
import { HomePage } from "./pages/home/homePage";
import { Footer } from "./layouts/footer";
import ProductDetail from './pages/product/ProductDetail';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SellPage from './pages/SellPage';
import { CartProvider } from './context/CartContext';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { Routes, Route } from 'react-router-dom';

import './App.css'

function App() {
  return (
    <AccessibilityProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/sell" element={<SellPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </AccessibilityProvider>
  )
}

export default App
