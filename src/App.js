import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from "react-router-dom";
import AboutUs from "./page/aboutus";
import ContactUs from "./page/contactus";
import ResetPassword from "./page/resetpassword";
import Dashboard from "./page/Dashboard";
import QuizQuestions from "./page/QuizQuestions";


import Quiz from "./page/Quiz";
import Videos from "./page/Videos";
import Downloads from "./page/Downloads";
import Scenarios from "./page/Scenarios";
import Badges from "./page/Badges";
import Help from "./page/Help";
import PasswordSecurityQuiz from "./page/PasswordSecurityQuiz";
import SocialMediaSafetyQuiz from "./page/SocialMediaSafetyQuiz";
import MobileInternetQuiz from "./page/MobileInternetQuiz";

import "./App.css";

function Home() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/Dashboard");
  };

  return (
    <div className="full-page">
      <header className="header">
        <div className="header-content">
          <h1>My Cybersecurity Awareness App</h1>
          <p>Helping rural students stay safe online</p>
        </div>
        <div className="header-buttons">
          <Link to="/aboutus"><button>About Us</button></Link>
          <Link to="/contactus"><button>Contact Us</button></Link>
        </div>
      </header>

      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <div className="forgot-password">
              <Link to="/resetpassword">Forgot Password?</Link>
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="register-link" onClick={() => alert("Register flow")}>
            Don't have an account? Register
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        
        {/* New dashboard routes */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/quizquestions/:type" element={<QuizQuestions />} />


        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/passwordsecurity" element={<PasswordSecurityQuiz />} />
        <Route path="/quiz/socialmedia-safety" element={<SocialMediaSafetyQuiz />} />
        <Route path="/quiz/mobileinternet" element={<MobileInternetQuiz />} />

        <Route path="/videos" element={<Videos />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/scenarios" element={<Scenarios />} />
        <Route path="/badges" element={<Badges />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}

