import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import { useCart } from '../../context/CartContext'; // استيراد Context العربة

const products = [
  { id: 1, name: "Bath & Body Works Dark Kiss 3-Wick Candle", image: '/images/Bath & Body Works Dark Kiss 3-Wick Candle.jpg', price: '1100' },
  { id: 2, name: "Scantef Candel With Lavender, Vanilla and Coconut (Mint Green)", image: '/images/Scantef Candel With Lavender, Vanilla and Coconut (Mint Green).jpg', price: '195' },
  { id: 3, name: "Favelin Spring Petals Scented Candle | 300GM | Fresh Blossoms & Citrus ", image: '/images/Favelin Spring Petals Scented Candle.jpg', price: '500' },
  { id: 4, name: "Bath & Body Works and A THOUSAND WISHES 3-Wick Candle", image: '/images/Bath & Body Works and A THOUSAND WISHES 3-Wick Candle.jpg', price: '865' },
  { id: 5, name: "Bath & Body Works Japanese Cherry Blossom 3-Wick Candle ", image: '/images/Bath & Body Works Japanese Cherry Blossom 3-Wick Candle.jpg', price: '1400' },
  { id: 6, name: "Favelin Cupcake Glaze Scented Candle | 300GM | Warm Vanilla & Spice | Cozy Bakery Scent", image: '/images/Favelin Cupcake Glaze Scented Candle.jpg', price: '550' },
  { id: 7, name: "Scented Candle | Soft Wool & Amber Large Jar Candle", image: '/images/Candle2.jpg', price: '225' },
  { id: 8, name: "Bath and Body Works Rose Water & Ivy 3-Wick Candle", image: '/images/Bath and Body Works Rose Water & Ivy 3-Wick Candle.jpg', price: '1200' },
  { id: 9, name: "Zaha Home Marble Scented Candle , Egyption Onyx Premium transparent marble", image: '/images/Zaha Home Marble Scented Candle , Egyption Onyx Premium transparent marble, 2-wicks.jpg', price: '850' },
  { id: 10, name: "Bath & Body Works White Barn Champagne Toast 3-Wick Candle", image: '/images/Candle1.jpg', price: '1000' },
  { id: 11, name: "Bath & Body Works In the Stars 3-Wick Candle 411g", image: '/images/Bath & Body Works In the Stars 3-Wick Candle 411 g .jpg', price: '1170' },
  { id: 12, name: "Ryya Scented Berries & Peony Candle | Hand-Poured | Advanced Self-Trimming Wicks", image: '/images/Ryya Scented Berries & Peony Candle | Hand-Poured | Advanced Self-Trimming Wicks.jpg', price: '230' },
  { id: 13, name: "Scented Candles Aromatherapy, Natural Wax, Stress Relief Fragrance, Bath, Spa, Yoga", image: '/images/Scented Candles Aromatherapy, Natural Wax, Stress Relief Fragrance for Home, Bath, Spa, Yoga .jpg', price: '120' },
  { id: 14, name: " Scented Candles Gift Set for Women, 4 Pack Candles for Home Scented", image: '/images/Scented Candles Gift Set for Women, 4 Pack Candles for Home.jpg', price: '360' },

];

function Home() {
  const { addToCart } = useCart(); // استخدام الدالة من Context لإضافة منتج للعربة

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="home-container">
      {/* أفضل المنتجات */}
      <section id="featured-products" className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">EGP {product.price}</p>
                <div className="product-actions">
                  <button className="btn-add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* التقييمات والشهادات */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <blockquote>
          <p>"The best candles I've ever purchased! The scents are incredible and the quality is unmatched."</p>
          <footer>- Jane Doe</footer>
        </blockquote>
        <blockquote>
          <p>"I love the natural ingredients and the beautiful designs. Will definitely be buying more!"</p>
          <footer>- John Smith</footer>
        </blockquote>
      </section>

      {/* عرض خاص */}
      <section className="special-offer">
        <h2>Exclusive Offer</h2>
        <p>Sign up for our newsletter and get 10% off your first purchase!</p>
        <Link to="/SignUp">
        <button>Subscribe</button>
        </Link>
      </section>
    </div>
  );
}

export default Home;