import React from 'react';
import Navbar from './main/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './main/pages/Home';
import AboutUs from './main/pages/AboutUs';
import Footer from './main/pages/Footer';
import Login from './main/pages/Login';
import SignUp from './main/pages/SignUp';
import Cart from './main/pages/Cart';
import ContactUs from './main/pages/ContactUs';
import PrivacyPolicy from './main/pages/PrivacyPolicy';
import HeroSection from './main/pages/HeroSection';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

function AppContent() {
  const location = useLocation();

  return (
    <div className="main-content">
      {location.pathname === '/' && <HeroSection />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HeroSection" element={<HeroSection />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="app-container">
            <AppContent />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;