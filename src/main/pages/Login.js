import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../App.css';
import { useAuth } from '../../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(); // تسجيل الدخول مباشرة
    navigate('/'); // توجيه إلى الصفحة الرئيسية
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back!</h2>
        <p>Please login to your account</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
              autoComplete='off'
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <button type="submit" className="btn-login">Login</button>
        </form>
        
        <div className="extra-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <p>New to our platform? 
            <Link to="/SignUp"> Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;