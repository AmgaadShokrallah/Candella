import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity, clearCart } = useCart();
  const { isLoggedIn } = useAuth();
  const [quantities, setQuantities] = useState(cartItems.reduce((acc, item) => {
    acc[item.id] = item.quantity || 1;
    return acc;
  }, {}));
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showLoginAlert, setShowLoginAlert] = useState(false);

  // حقول معلومات بطاقة الائتمان
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setQuantities({
      ...quantities,
      [id]: newQuantity,
    });

    updateCartItemQuantity(id, newQuantity);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + (Number(item.price) * (quantities[item.id] || 1)),
    0
  );

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setOrderSubmitted(true);
    clearCart();
    setShowPaymentForm(false);
    // إعادة تعيين الحقول
    setFullName('');
    setAddress('');
    setEmail('');
    setPaymentMethod('');
    setPaypalEmail('');
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
  };

  const handleProceedCheckout = () => {
    if (!isLoggedIn) {
      setShowLoginAlert(true);
      return;
    }
    setShowPaymentForm(true);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <div className="price-container">
                    <span className="price-symbol">EGP</span>
                    <span className="price-amount">{Number(item.price).toFixed(2)}</span>
                  </div>
                  <label>
                    Quantity:
                    <input
                      type="number"
                      value={quantities[item.id]}
                      min="1"
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                    />
                  </label>
                  <button className="btn-remove" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-total">
              <h2>Total Price:</h2>
              <div className="total-amount">
                <span className="price-symbol">EGP</span>
                <span className="price-amount">{totalPrice.toFixed(2)}</span>
              </div>
            </div>

            {!showPaymentForm && !orderSubmitted && (
              <button className="btn-progress-checkout" onClick={handleProceedCheckout}>
                Proceed to Checkout
              </button>
            )}

            {showLoginAlert && (
              <div className="login-alert">
                <p>You must be logged in to checkout. Please log in.</p>
                <Link to="/Login">
                  <button>Login</button>
                </Link>
              </div>
            )}

            {showPaymentForm && !orderSubmitted && (
              <form className="cart-checkout-form" onSubmit={handleSubmitOrder}>
                <label>
                  Full Name:
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Shipping Address:
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Payment Method:
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    required
                  >
                    <option value="">Select Payment Method</option>
                    <option value="credit-card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="cash-on-delivery">Cash on Delivery</option>
                  </select>
                </label>

                {paymentMethod === 'paypal' && (
                  <label>
                    PayPal Email:
                    <input
                      type="email"
                      value={paypalEmail}
                      onChange={(e) => setPaypalEmail(e.target.value)}
                      required
                    />
                  </label>
                )}

                {paymentMethod === 'credit-card' && (
                  <>
                    <label>
                      Card Number:
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                      />
                    </label>
                    <label>
                      Expiry Date (MM/YY):
                      <input
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        required
                      />
                    </label>
                    <label>
                      CVV:
                      <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        required
                      />
                    </label>
                  </>
                )}

                <button type="submit" className="btn-checkout-submit">
                  Submit Order
                </button>
              </form>
            )}

            {orderSubmitted && (
              <div className="order-confirmation">
                <h2>Thank you for your purchase!</h2>
                <p>Your order has been successfully placed.</p>
                <p>We will deliver it to the address you provided soon.</p>
                <p>Expected delivery time: 3-5 business days.</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;