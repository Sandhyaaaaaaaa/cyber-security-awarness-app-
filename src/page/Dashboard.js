import React from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to Cybersecurity Awareness Dashboard</h1>

      <div className="grid-section">
        <div className="grid-item">
          <h2>Cybersecurity Quiz</h2>
          <p>Test your knowledge with our short and interactive quizzes.</p>
          <button onClick={() => navigate("/quiz")}>Start Quiz</button>
        </div>

        <div className="grid-item">
          <h2>Download Modules</h2>
          <p>Download core modules for offline learning in rural areas.</p>
          <button onClick={() => navigate("/downloads")}>Download</button>
        </div>

        <div className="grid-item">
          <h2>Real-Life Scenarios</h2>
          <p>Understand through stories how rural students face cyber threats.</p>
          <button onClick={() => navigate("/scenarios")}>View Stories</button>
        </div>

        <div className="grid-item">
          <h2>FAQ & Help</h2>
          <p>Get answers to common questions or ask for help.</p>
          <button onClick={() => navigate("/help")}>Visit Help</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
