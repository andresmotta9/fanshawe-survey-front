import React, { useState, useEffect } from 'react';
import './instructions.css';

export default function Instructions() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [] = useState(0);

  // Messages to be shown with typing indicators
  const botMessages = [
    "Hey👋 what's your name?",
    `Nice to meet you <strong>${name}</strong> 😊, just want you to know how important your answers are, so we'd like you to be sincere and make the answers you pick represent you as much as possible.`,
    "Alright, let's begin 🔥",
  ];

  useEffect(() => {
    // Show first message after delay
    const timer1 = setTimeout(() => {
      setIsTyping(true);
    }, 500);

    const timer2 = setTimeout(() => {
      setIsTyping(false);
      setMessages([{ text: botMessages[0], user: false }]);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    if (submitted) {
      // Show second message
      setIsTyping(true);
      const timer1 = setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [...prev, { text: botMessages[1], user: false }]);
      }, 2000);

      // Show third message
      const timer2 = setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages((prev) => [
            ...prev,
            { text: botMessages[2], user: false },
          ]);
        }, 2000);
      }, 2000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [submitted, name]);

  const handleNameSubmit = () => {
    if (name.trim()) {
      setSubmitted(true);
      setMessages((prev) => [...prev, { text: name, user: true }]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNameSubmit();
    }
  };

  return (
    <div className="instructions-container">
      <h2 className="instructions-title">INSTRUCTIONS</h2>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.user ? 'user' : 'system'}`}
          >
            <div
              className="chat-bubble"
              dangerouslySetInnerHTML={{ __html: msg.text }}
            ></div>
            <div className="circle"></div>
          </div>
        ))}

        {isTyping && (
          <div className="chat-message system">
            <div className="chat-bubble typing-indicator">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="circle"></div>
          </div>
        )}

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

        {submitted && !isTyping && (
          <button className="start-quiz-btn">Begin Quiz</button>
        )}
      </div>
    </div>
  );
}
