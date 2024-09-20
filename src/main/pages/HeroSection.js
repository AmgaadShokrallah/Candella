import React from 'react';
import Navbar from '../Navbar'; // تأكد من أن المسار صحيح
import './HeroSection.css';

function HeroSection() {

  const handleShopNowClick = () => {
    const section = document.getElementById('featured-products');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // التمرير السلس إلى القسم
    }
  };

  return (
    <div className="hero-section">
      <Navbar />
      <div className="hero-content">
        <h1 className="hero-title">Welcome To Candella</h1>
        <p className="hero-description">
          Discover our exquisite collection of premium candles. Light up your space with our handcrafted, eco-friendly candles.
        </p>
        <button className="btn-shop-now" onClick={handleShopNowClick}>
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default HeroSection;