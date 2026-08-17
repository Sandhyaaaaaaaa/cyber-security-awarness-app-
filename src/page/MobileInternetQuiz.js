import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "Why use a VPN on public Wi-Fi?",
    options: [
      "To slow down the internet",
      "To make browsing anonymous & secure",
      "No reason",
      "It costs more",
    ],
    answer: 1,
  },
  {
    question: "Why are software updates important?",
    options: [
      "For new emojis",
      "For better security & bug fixes",
      "They’re not important",
      "They delete your data",
    ],
    answer: 1,
  },
  {
    question: "What is phishing?",
    options: [
      "Catching fish",
      "Fake emails or messages to steal info",
      "A browser setting",
      "Strong password",
    ],
    answer: 1,
  },
  {
    question: "Why should you lock your phone?",
    options: [
      "To save battery",
      "To keep others out of your data",
      "It looks good",
      "No reason",
    ],
    answer: 1,
  },
  {
    question: "Clicking random links online is:",
    options: [
      "Safe",
      "Fun",
      "Dangerous – can lead to malware",
      "Recommended",
    ],
    answer: 2,
  },
  {
    question: "Downloading apps from unknown sources can:",
    options: [
      "Be harmless",
      "Install malware",
      "Improve performance",
      "Save data",
    ],
    answer: 1,
  },
  {
    question: "Why enable screen lock & encryption?",
    options: [
      "For faster typing",
      "To secure your data",
      "To drain battery",
      "No reason",
    ],
    answer: 1,
  },
  {
    question: "What should you do if your phone is lost?",
    options: [
      "Do nothing",
      "Use ‘Find My Phone’ & change passwords",
      "Wait for someone to return it",
      "Post about it online",
    ],
    answer: 1,
  },
  {
    question: "What is malware?",
    options: [
      "Software that helps you",
      "Malicious software designed to harm your device",
      "A phone brand",
      "A social media app",
    ],
    answer: 1,
  },
  {
    question: "Best practice when installing new apps:",
    options: [
      "Grant all permissions without checking",
      "Read permissions & only grant necessary ones",
      "Install as many as possible",
      "None of these",
    ],
    answer: 1,
  },
];

const MobileInternetQuiz = () => {
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[currentQ].answer) {
      setScore(score + 1);
    }

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>🌐 Mobile & Internet Usage Quiz</h1>

      {!showResult ? (
        <>
          <h3>
            Q{currentQ + 1}: {questions[currentQ].question}
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            {questions[currentQ].options.map((opt, idx) => (
              <button key={idx} onClick={() => handleAnswer(idx)}>
                {opt}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2>✅ Quiz Complete!</h2>
          <p>
            You scored {score} out of {questions.length}.
          </p>
          <button onClick={() => window.location.reload()}>Retake Quiz</button>
          <button onClick={() => navigate("/quiz")}>Back to Quiz Dashboard</button>
        </>
      )}
    </div>
  );
};

export default MobileInternetQuiz;
