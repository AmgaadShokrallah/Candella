import React from 'react';
import '../../App.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-text">
        Welcome to Candella! We specialize in crafting premium candles that bring warmth and beauty to your space. At Candella, we craft exquisite candles that bring warmth and elegance to any space. Our candles are made with premium, eco-friendly ingredients, ensuring a clean and long-lasting burn. Discover our wide range of scents and designs, each crafted with care and passion.
      </p>
      <img src="/images/About.webp" alt="Candles" className="about-us-image" /> {/* يمكنك إضافة صورة هنا */}
    </div>
  );
}

export default AboutUs;