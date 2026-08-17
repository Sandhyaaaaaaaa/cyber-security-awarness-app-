import React from "react";
import "./Badges.css";

const badges = [
  {
    name: "Password Pro",
    icon: "🛡",
    description: "Score 80%+ in Password Quiz",
    earned: true,
  },
  {
    name: "Social Media Ninja",
    icon: "📱",
    description: "Score 80%+ in Social Media Quiz",
    earned: true,
  },
  {
    name: "Safe Surfer",
    icon: "🌐",
    description: "Score 80%+ in Mobile & Internet Quiz",
    earned: false,
  },
  {
    name: "Cybersecurity Champion",
    icon: "🎓",
    description: "Complete all quizzes & scenarios",
    earned: false,
  },
];

const Badges = () => {
  return (
    <div className="badges-container">
      <h1 className="badges-title">🏅 Your Badges & Rewards</h1>
      <p className="badges-subtitle">Earn badges by completing quizzes and challenges!</p>

      <div className="badges-grid">
        {badges.map((badge, idx) => (
          <div
            key={idx}
            className={`badge-card ${badge.earned ? "earned" : "locked"}`}
          >
            <div className="badge-icon">{badge.icon}</div>
            <h3>{badge.name}</h3>
            <p>{badge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Badges;
