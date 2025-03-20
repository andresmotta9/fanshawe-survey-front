import React, { useState, useEffect } from "react";
import "./styles.css";

export default function InstructionsPage({ onStartQuiz }) {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    // Simulate the starting message with a typing effect
    setTimeout(() => {
      setMessages([{ text: "Hey👋 what’s your name?", user: false }]);
    }, 500); // Delay to simulate "thinking"

    // Mark typing as complete after the animation duration (2s + 0.5s delay)
    const typingTimeout = setTimeout(() => {
      setTypingComplete(true);
    }, 2500); // 500ms delay + 2000ms typing animation

    return () => clearTimeout(typingTimeout); // Cleanup timeout
  }, []);

  const handleNameSubmit = () => {
    if (name.trim()) {
      setSubmitted(true);
      setMessages((prev) => [...prev, { text: name, user: true }]);
      setTyping(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleNameSubmit();
    }
  };

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: `Nice to meet you <strong>${name}</strong> 😊, just want you to know how important your answers are, so we’d like you to be sincere and make the answers you pick represent you as much as possible.`, user: false },
        ]);
      }, 1500);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Alright, let’s begin 🔥", user: false },
        ]);
        setTyping(false);
      }, 3000);
    }
  }, [submitted, name]);

  return (
    <div className="instructions-container">
      <h2 className="instructions-title">INSTRUCTIONS</h2>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.user ? "user" : "system"} ${
              typing && index === messages.length - 1 ? "typing" : ""
            }`}
          >
            <div
              className={`chat-bubble ${
                index === 0 && typingComplete ? "typing-complete" : ""
              }`}
              dangerouslySetInnerHTML={{ __html: msg.text }}
            ></div>
            <div className="circle"></div>
          </div>
        ))}

        {!submitted && (
          <div className="chat-input">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleNameSubmit}>✔</button>
          </div>
        )}

        {submitted && !typing && (
          <button className="start-quiz-btn" onClick={onStartQuiz}>
            Begin Quiz
          </button>
        )}
      </div>
    </div>
  );
}