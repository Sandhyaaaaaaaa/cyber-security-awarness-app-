import React, { useState } from "react";
import "./Scenarios.css";

const scenarios = [
  {
    title: "Suspicious SMS Asking for Bank Details",
    description: "You receive a message claiming to be from your bank, asking for your account details urgently.",
    solution: "Do NOT reply or click any links. Banks never ask for sensitive details via SMS. Report & delete the message.",
  },
  {
    title: "Stranger on Social Media",
    description: "A stranger sends you a friend request and starts asking personal questions.",
    solution: "Do not share personal information with strangers online. Block & report the account if it feels unsafe.",
  },
  {
    title: "Public Wi-Fi Asking Aadhaar/OTP",
    description: "When you connect to public Wi-Fi, it asks for Aadhaar number or OTP.",
    solution: "Avoid using public Wi-Fi for sensitive activities. Never share your Aadhaar. Use a personal hotspot if possible.",
  },
  {
    title: "Lottery Scam Popup",
    description: "Your screen shows a popup saying you won a lottery and asks to click a link to claim.",
    solution: "Ignore & close the popup. These are scams designed to steal information or install malware.",
  },
];

const Scenarios = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSolution = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="scenarios-container">
      <h1 className="scenarios-title">🔍 Real-Life Cybersecurity Scenarios</h1>
      <p className="scenarios-subtitle">Click on a scenario to see the solution.</p>

      <div className="scenarios-grid">
        {scenarios.map((scenario, idx) => (
          <div key={idx} className="scenario-card" onClick={() => toggleSolution(idx)}>
            <h3>{scenario.title}</h3>
            <p>{scenario.description}</p>
            {openIndex === idx && (
              <div className="scenario-solution">
                <strong>Solution:</strong> {scenario.solution}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scenarios;
