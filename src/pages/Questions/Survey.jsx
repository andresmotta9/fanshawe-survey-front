import React, { useState, useEffect } from "react";
import "./styles.css";
import Option from "./option";
import PrimaryQuizButton from "../../components/primaryQuizButton";
import SecondaryButton from "../../components/secondaryButton";
import Congratulations from "./Congratulations";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import API_ENDPOINTS, { API_ENDPOINTS_KEY } from "../../config/apiConfig";
export default function Survey() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const [noSelection, setNoSelection] = useState(false);
  const navigate = useNavigate();
  const [answers, setAnswers] = useState([]);
  const [fetchTrigger, setFetchTrigger]= useState(false)

  const handleNextQuestion = () => {
    if (selectedOptionIndex === null) {
      setNoSelection(true);
      return;
    }
    if (selectedOptionIndex === 5) {
      setFetchTrigger(true)
    }
    if (questionIndex < questions.length - 1) {
      setNoSelection(false);

      setQuestionIndex(questionIndex + 1);
      setSelectedOptionIndex(null);
    } else {
      setQuizFinished(true);
      console.log(answers)
    }
  };

  

  const handlePreviousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
      setSelectedOptionIndex(null);
    }
  };

  const handleSelectedOption = (index) => {
    setSelectedOptionIndex(index);
    setAnswers((prevAnswers) => {
      const fieldIdContain = questions[questionIndex].options.find((ans) => ans.option_id === index)
      const newAnswer = {
        question_id: questions[questionIndex].question_id,
        field_id: fieldIdContain ? fieldIdContain.field_id : null,
      };

      const updatedAnswer = prevAnswers.filter(
        (ans) => ans.question_id !== newAnswer.question_id
      );
      return [...updatedAnswer, newAnswer];
    });
  };

  const handleNavigateToResults = () => {
    navigate("/results");
  };

  

  const { data, loading, error } = useFetch(API_ENDPOINTS.QUESTIONS_FIELDS);
  const {
    data: winnerFieldInfo,
    loading: winnerFieldLoading,
    error: winnerFieldErr,
  } = useFetch(API_ENDPOINTS.ANSWER_FIELDS, answers);
  console.log(winnerFieldInfo,winnerFieldErr)

  const questions = data ? data : [];

  return (
    <>
      {questions.length > 0 && (
        <motion.div
          className="QuizContainer"
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
                optionIndex={String.fromCharCode(
                  64 + ((parseFloat(options.option_id) - 1) % 5) + 1
                )}
                active={selectedOptionIndex === options.option_id}
                optionText={options.text}
                onClick={() => handleSelectedOption(options.option_id)}
              />
            ))}
          </div>

          <div className="nextButton">
            <SecondaryButton name="Previous" onClick={handlePreviousQuestion} />
            <PrimaryQuizButton
              name={questionIndex == 22 ? "Finish" : "Next"}
              onClick={handleNextQuestion}
            />
          </div>
        </motion.div>
      )}

      {quizFinished && <Congratulations onClick={handleNavigateToResults} />}
    </>
  );
}
