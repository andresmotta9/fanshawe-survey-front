import React, { useState, useEffect } from "react";
import "./styles.css";
import Option from "./option";
import PrimaryQuizButton from "../../components/primaryQuizButton";
import SecondaryButton from "../../components/secondaryButton";
import Congratulations from "./Congratulations";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    options: [
      "A Lorem ipsum dolor sit amet, consectetur adipiscing it",
      "B Lorem ipsum dolor sit amet, consectetur adipiscing it",
      "C Lorem ipsum dolor sit amet, consectetur adipiscing it",
      "D Lorem ipsum dolor sit amet, consectetur adipiscing it",
    ],
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    options: [
      "A Lorem ipsum dolor sit amet, consectetur adipiscing it",
      "B Lorem ipr adipiscing it",
      "C Lorem ipsum dolor sit amet, consectetur adipiscing it",
      "D Lorem ipsum dolor sit amet, consectetur adipiscing it",
    ],
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    options: [
      "A Lorem ipsum dolor sit amet, consectetur adipiscing it",
      "B Lorem ipsum dolor sit amet, consectetur adipiscing it",
      "C Lorem ipsum dolor sit amet, consectetur adipiscing it",
      "D Loectetur adipiscing it",
    ],
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    options: [
      "A Lorem ipsumur adipiscing it",
      "B Lorem ipsum dolor sit amet, consectetur adipiscing it",
      "C Lorem ipsum dolor sit amet, consectetur adipiscing it",
      "D Lorem ipsum dolor sit amet, consectetur adipiscing it",
    ],
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    options: [
      "A Lorem ipsum dolor sit amet, consectetur adipiscing it",
      "B Lorem ipsum dolor sit amet, consectetur adipiscing it",
      "C Loreg it",
      "D Lorem ipsum dolor sit amet, consectetur adipiscing it",
    ],
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    options: [
      "A Lorem ipsum dolor sit amet, consectetur adipiscing it",
      "B Lorem ipsumnsectetur adipiscing it",
      "C Loreg it",
      "D Lorem ipsum dolor sit amet, consectetur adipiscing it",
    ],
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    options: [
      "A Locing it",
      "B Lorem ipsum dolor sit amet, consectetur adipiscing it",
      "C Loreg it",
      "D Lorem ipsum dolor sit amet, consectetur adipiscing it",
    ],
  },
];

export default function Survey() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const [noSelection, setNoSelection] = useState(false);
  const navigate = useNavigate();

  const handleNextQuestion = () => {
    if (selectedOptionIndex === null) {
      setNoSelection(true);
      return;
    }
    if (questionIndex < questions.length - 1) {
      setNoSelection(false);
      setQuestionIndex(questionIndex + 1);
      setSelectedOptionIndex(null);
    }
    else {
      setQuizFinished(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
      setSelectedOptionIndex(null);
    }
  }

  const handleSelectedOption = (index) => {
    setSelectedOptionIndex(index);
    console.log(index);
  };

  const handleNavigateToResults = () =>{
    navigate("/results");
  }

  return (
    <>
    < motion.div className="QuizContainer"
      animate={{
        x: noSelection ? [0, -5, 5, -5, 5, 0] : 0, // Moves left & right
      }}
      transition={{
        duration: 0.2, // Quick duration
        ease: "easeInOut",
      }}
    >
      <div className="progressBar">
        <div
          className="progressBarFill"
          style={{
            width: `${((questionIndex + 1) / questions.length) * 100}%`,
            transition: "width 500ms ease-in-out",
          }}
        >
          <div className="progressBarFiller"></div>
        </div>
        <div className="progressPercent">
          <div
            className={
              questionIndex + 1 > questions.length / 4
                ? "activePercent"
                : "null"
            }
          >
            1
          </div>
          <div
            className={
              questionIndex + 1 > questions.length / 2
                ? "activePercent"
                : "null"
            }
          >
            2
          </div>
          <div
            className={
              questionIndex + 1 > questions.length / (4 / 3)
                ? "activePercent"
                : "null"
            }
          >
            3
          </div>
        </div>
      </div>
      <div className="questionNumber">
        Question {questionIndex + 1}/{questions.length}
      </div>
      <div className="questionContainer">
        {questions[questionIndex].question}
      </div>
      <div className="questionOptions">
        {questions[questionIndex].options.map((options, index) => (
          <Option
            key={index}
            optionIndex={String.fromCharCode(65 + index)}
            active = {selectedOptionIndex === index}
            optionText={options}
            onClick={() => handleSelectedOption(index)}
          />
        ))}
      </div>
      
      <div className="nextButton">
        <SecondaryButton name="Previous" onClick={handlePreviousQuestion}/>
        <PrimaryQuizButton name={questionIndex > questions.length -2 ? "Finish" : "Next" } onClick={handleNextQuestion} />
      </div>
    </motion.div>
    {quizFinished && <Congratulations onClick={handleNavigateToResults}/>}
    </>
  );
}
