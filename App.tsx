
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Phones from './pages/Phones';
import HowItWorks from './pages/HowItWorks';
import ShopOwnerDeals from './pages/ShopOwnerDeals';
import ShopOwnerHowItWorks from './pages/ShopOwnerHowItWorks';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import SystemArchitecture from './pages/SystemArchitecture';
import WhatsAppIcon from './components/WhatsAppIcon';

const App: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change with smooth behavior
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-bg text-text-dark antialiased selection:bg-accent selection:text-white relative">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/shop-owners" element={<ShopOwnerDeals />} />
          <Route path="/shop-owner-how-it-works" element={<ShopOwnerHowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/architecture" element={<SystemArchitecture />} />
        </Routes>
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/256709477930"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8" />
        <span className="absolute right-full mr-3 bg-white text-text-dark px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-md whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>
    </div>
  );
};

export default App;
