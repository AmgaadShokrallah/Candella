import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // استخدام useNavigate لتوجيه المستخدم

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    console.log('Username:', username, 'Email:', email, 'Password:', password);
    setError('');
    
    // تخزين حالة تسجيل الدخول
    localStorage.setItem('isLoggedIn', 'true');

    // توجيه المستخدم إلى الصفحة الرئيسية بعد التسجيل بنجاح
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-header">Create Your Account</h2>
        
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              id="username"
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="input-field"
              required
              autoComplete='off'
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              id="email"
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input-field"
              required
              autoComplete='off'
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              id="password"
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="input-field"
              required
              autoComplete='off'
            />
          </div>

          <button type="submit" className="btn-primary">Sign Up</button>
        </form>

        <p className="switch-form">Already have an account? <a href="/login">Login here</a>.</p>
      </div>
    </div>
  );
}

export default SignUp;