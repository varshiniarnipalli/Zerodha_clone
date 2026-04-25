import { Routes, Route } from 'react-router-dom';
import HomePage from './landing_page/home/HomePage.jsx';
import Signup from './landing_page/signup/Signup.jsx';
import About from './landing_page/about/About.jsx';
import ProductPage from './landing_page/products/ProductPage.jsx';
import Pricing from './landing_page/pricing/PricingPage.jsx';
import Support from './landing_page/support/SupportPage.jsx';
import NotFound from './landing_page/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}