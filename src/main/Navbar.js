import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useCart } from '../context/CartContext';

function Navbar() {
  const [click, setClick] = useState(false);
  const { cartItems } = useCart(); // استخدام العربة

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
          <img src="/images/Logo2.png" alt="Logo" style={{ width: '350px', height: '250px', marginRight: '40px' }} />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to="AboutUs" className='nav-links' onClick={closeMobileMenu}>About Us</Link>
          </li>
          <li className='nav-item'>
            <Link to='/login' className='nav-links' onClick={closeMobileMenu}>Login</Link>
          </li>
          <li className='nav-item'>
            <Link to='/signup' className='nav-links' onClick={closeMobileMenu}>Sign Up</Link>
          </li>
          <li className='nav-item'>
            <Link to='/cart' className='nav-links' onClick={closeMobileMenu}>
              <i className='fas fa-shopping-cart' /> Cart
              <span className='cart-count'>{totalQuantity > 0 ? totalQuantity : 0}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;