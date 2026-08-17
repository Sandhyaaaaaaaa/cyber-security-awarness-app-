import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Added for navigation
import "./resetpassword.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // ✅ Hook to navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Please enter your registered email.");
      setSubmitted(false);
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter a valid email address.");
      setSubmitted(false);
    } else {
      setError("");
      setSubmitted(true);
    }
  };

  return (
    <div className="reset-container">
      <h1>Reset Your Password</h1>
      <p>Enter your registered email to receive reset instructions.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={error ? "input-error" : ""}
        />
        {error && <small className="error-text">{error}</small>}
        <button type="submit">Send Reset Link</button>
      </form>

      {submitted && <p className="success-text">Reset instructions sent to your email.</p>}

      {/* ✅ Back to Login Button */}
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Login
      </button>
    </div>
  );
};

export default ResetPassword;
