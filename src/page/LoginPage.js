import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function LoginPage() {
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const openModal = () => setShowForgotModal(true);
  const closeModal = () => setShowForgotModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
    setEmail('');
    closeModal();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/Dashboard');
  };

  return (
    <div className="full-page">
      <header className="header">
        <div className="header-content">
          <h1>Cyber Security Awareness</h1>
          <p>Helping Rural Students Stay Safe Online</p>
        </div>
        <div className="header-buttons">
          <button type="button" onClick={() => navigate('/about')}>About Us</button>
          <button type="button" onClick={() => navigate('/contact')}>Contact Us</button>
        </div>
      </header>

      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username or Email" required />
            <input type="password" placeholder="Password" required />
            <p className="forgot-password" onClick={openModal}>Forgot Password?</p>
            <button type="submit">Login</button>
          </form>
          <p className="register-link">Don’t have an account? Register</p>
        </div>
      </div>

      {showForgotModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3>Reset Password</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Send Reset Link</button>
              <button type="button" className="close-btn" onClick={closeModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
