import React, { useState, useEffect } from "react";
import "./styles.css";
import Option from "./option";
import PrimaryQuizButton from "../../components/primaryQuizButton";
import SecondaryButton from "../../components/secondaryButton";
import Congratulations from "./Congratulations";

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

  const handleNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setSelectedOptionIndex(null);
    }
  };

  const handleSelectedOption = (index) => {
    setSelectedOptionIndex(index);
    console.log(index);
  };

  return (
    <>
    <div className="QuizContainer">
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
        <SecondaryButton name="Previous" />
        <PrimaryQuizButton name={questionIndex > questions.length -2 ? "Finish" : "Next" } onClick={handleNextQuestion} />
      </div>
    </div>
    {/* <Congratulations/> */}
    </>
  );
}
