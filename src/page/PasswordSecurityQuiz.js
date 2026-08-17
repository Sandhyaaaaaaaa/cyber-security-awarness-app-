import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "Which of these is the strongest password?",
    options: ["John123", "MyDog2021", "Gx$9!rTq7@eZ", "Password1"],
    answer: 2,
  },
  {
    question: "Why shouldn’t you use the same password for multiple accounts?",
    options: [
      "It’s hard to remember",
      "One breach can compromise all accounts",
      "Websites don’t allow it",
      "It’s okay to reuse if strong",
    ],
    answer: 1,
  },
  {
    question: "Which tool helps create strong, unique passwords?",
    options: ["Password manager", "Notebook", "Browser history", "Social media"],
    answer: 0,
  },
  {
    question: "What is two-factor authentication (2FA)?",
    options: [
      "Logging in twice",
      "A backup password",
      "A second verification step after password",
      "Two users sharing a password",
    ],
    answer: 2,
  },
  {
    question: "Which password should you avoid?",
    options: [
      "Random characters & symbols",
      "Long phrase with numbers",
      "Your pet’s name & birthday",
      "Passphrase with unrelated words",
    ],
    answer: 2,
  },
  {
    question: "How often is it recommended to change passwords?",
    options: [
      "Every week",
      "Every few months or if a breach happens",
      "Never",
      "Only when account is locked",
    ],
    answer: 1,
  },
  {
    question: "What’s the danger of saving passwords in browsers?",
    options: [
      "Nothing, it’s secure",
      "They can be stolen if computer is hacked",
      "It deletes your account",
      "It sends passwords to friends",
    ],
    answer: 1,
  },
  {
    question: "Why should you avoid writing passwords on paper?",
    options: ["Ink fades", "Paper can be stolen or lost", "It’s illegal", "It takes time"],
    answer: 1,
  },
  {
    question: "A good password is:",
    options: [
      "Short & easy to type",
      "Contains personal info",
      "Long & unpredictable",
      "All lowercase letters",
    ],
    answer: 2,
  },
  {
    question: "If you suspect your password is compromised, you should:",
    options: [
      "Do nothing",
      "Change it immediately",
      "Post about it online",
      "Wait for email notification",
    ],
    answer: 1,
  },
];

const PasswordSecurityQuiz = () => {
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
      <h1>🔒 Password Security Quiz</h1>

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

export default PasswordSecurityQuiz;
