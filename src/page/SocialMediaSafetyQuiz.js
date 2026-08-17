import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "Is it safe to accept friend requests from strangers?",
    options: ["Yes", "No"],
    answer: 1,
  },
  {
    question: "What info should you never post publicly?",
    options: [
      "Your favorite movie",
      "Your phone number & address",
      "Vacation photos after you’re back",
      "A funny meme",
    ],
    answer: 1,
  },
  {
    question: "Why should you review privacy settings?",
    options: [
      "To look cool",
      "To control who sees your data",
      "It’s mandatory",
      "It deletes your account",
    ],
    answer: 1,
  },
  {
    question: "What is catfishing?",
    options: [
      "Phishing emails",
      "Pretending to be someone else online",
      "Catching fish",
      "A type of hacking software",
    ],
    answer: 1,
  },
  {
    question: "What’s the risk of sharing vacation plans publicly?",
    options: [
      "Friends will be jealous",
      "It can invite burglars to an empty home",
      "It saves memories",
      "No risk at all",
    ],
    answer: 1,
  },
  {
    question: "You receive a message with a suspicious link from a friend. You should:",
    options: [
      "Click it immediately",
      "Ignore & report it",
      "Forward it to everyone",
      "Log out",
    ],
    answer: 1,
  },
  {
    question: "What is oversharing?",
    options: [
      "Posting too many selfies",
      "Revealing sensitive personal information",
      "Using hashtags",
      "Nothing serious",
    ],
    answer: 1,
  },
  {
    question: "Why avoid checking in to locations in real-time?",
    options: [
      "It’s boring",
      "It drains battery",
      "It tells others where you are & you’re not home",
      "No reason",
    ],
    answer: 2,
  },
  {
    question: "How to verify if a profile is fake?",
    options: [
      "Check mutual friends & photos",
      "It doesn’t matter",
      "Always accept",
      "Ask for their password",
    ],
    answer: 0,
  },
  {
    question: "What to do if someone harasses you online?",
    options: [
      "Reply angrily",
      "Ignore & block/report",
      "Share their post",
      "Nothing",
    ],
    answer: 1,
  },
];

const SocialMediaSafetyQuiz = () => {
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
      <h1>📱 Social Media Safety Quiz</h1>

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

export default SocialMediaSafetyQuiz;
