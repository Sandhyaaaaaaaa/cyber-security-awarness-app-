// src/page/QuizQuestions.js
import React from "react";
import { useParams } from "react-router-dom";
import "./QuizQuestions.css";

const quizData = {
  password: [
    {
      question: "Which of these is a strong password?",
      options: ["123456", "password", "Cyber@1234", "abcd"],
      answer: "Cyber@1234",
    },
    {
      question: "Why should you avoid using your name in your password?",
      options: ["It's hard to remember", "It's too obvious", "It's cool", "Everyone does it"],
      answer: "It's too obvious",
    },
  ],
  social: [
    {
      question: "What should you not share on social media?",
      options: ["Your hobbies", "Your address", "Your pet's name", "A selfie"],
      answer: "Your address",
    },
    {
      question: "If a stranger sends a friend request, you should?",
      options: ["Accept it", "Ignore or block", "Send money", "Tell them your phone number"],
      answer: "Ignore or block",
    },
  ],
  internet: [
    {
      question: "What is phishing?",
      options: ["Fishing in a river", "A cyber attack", "A coding term", "Mobile virus"],
      answer: "A cyber attack",
    },
    {
      question: "What to do when using public Wi-Fi?",
      options: ["Access bank account", "Share OTP", "Avoid sensitive info", "Ignore antivirus"],
      answer: "Avoid sensitive info",
    },
  ],
};

const QuizQuestions = () => {
  const { type } = useParams();
  const questions = quizData[type] || [];

  return (
    <div className="quiz-questions">
      <h1>{type.toUpperCase()} QUIZ</h1>
      {questions.length === 0 ? (
        <p>No questions found.</p>
      ) : (
        questions.map((q, idx) => (
          <div key={idx} className="question-card">
            <h3>{q.question}</h3>
            {q.options.map((option, i) => (
              <div key={i}>
                <input type="radio" name={`q${idx}`} id={`q${idx}o${i}`} />
                <label htmlFor={`q${idx}o${i}`}>{option}</label>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default QuizQuestions;
