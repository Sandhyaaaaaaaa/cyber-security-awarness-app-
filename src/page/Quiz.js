import React from "react";
import { useNavigate } from "react-router-dom";
import "./Quizz.css";

const Quiz = () => {
  const navigate = useNavigate();

  return (
    <div className="quiz-dashboard-container">
      <h1 className="quiz-title">Choose a Cybersecurity Quiz Module</h1>

      <div className="quiz-modules">
        {/* Module 1: Password Security */}
        <div className="quiz-module">
          <h2>Password Security</h2>
          <p>Learn how to create and manage strong, secure passwords.</p>
          <button onClick={() => navigate("/quiz/passwordsecurity")}>

            Start Quiz
          </button>
        </div>

        {/* Module 2: Social Media Safety */}
        <div className="quiz-module">
          <h2>Social Media Safety</h2>
          <p>Test your awareness about staying safe on social platforms.</p>
          <button onClick={() => navigate("/quiz/socialmedia-safety")}>
            Start Quiz
          </button>
        </div>

        {/* Module 3: Mobile & Internet Usage */}
        <div className="quiz-module">
          <h2>Mobile & Internet Usage</h2>
          <p>Understand safe practices while using phones and internet.</p>
          <button onClick={() => navigate("/quiz/mobileinternet")}>
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
