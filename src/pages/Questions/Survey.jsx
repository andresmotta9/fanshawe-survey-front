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
  const [fetchTrigger, setFetchTrigger] = useState(null);
  const [questions,setQuestions]  = useState([])

  const { data, loading, error } = useFetch(API_ENDPOINTS.QUESTIONS_FIELDS);
  const {
    data: winnerFieldInfo,
    loading: winnerFieldLoading,
    error: winnerFieldErr,
  } = useFetch(fetchTrigger, { answers: answers });
  console.log(winnerFieldInfo);

  useEffect(()=>{
    if (winnerFieldInfo) {
        setQuestions((prevQuestions)=>{
          return[...prevQuestions,...winnerFieldInfo.data.nextQuestions]
        });
        "hey"
        
      }
      console.log(questions)
  },[winnerFieldInfo])

  useEffect(() => {
    if (data) {
      setQuestions(data);
    }
  }, [data]);

  useEffect(() => {
    console.log("Updated questions:", questions);
  }, [questions]);

  const handleNextQuestion = () => {
    console.log(answers)
    if (selectedOptionIndex === null) {
      setNoSelection(true);
      return;
    }
    if (questionIndex === 5) {
      console.log("clicked")
      setFetchTrigger(API_ENDPOINTS.ANSWER_FIELDS);
      
    }
    if (questionIndex < questions.length - 1) {
      setNoSelection(false);

      setQuestionIndex(questionIndex + 1);
      setSelectedOptionIndex(null);
    } else {
      console.log(answers);
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
      const fieldIdContain = questions[questionIndex].options.find(
        (ans) => ans.optionId === index
      );
      const newAnswer = {
        questionId: questions[questionIndex].questionId,
        fieldId: fieldIdContain ? fieldIdContain.fieldId : null,
      };

      const updatedAnswer = prevAnswers.filter(
        (ans) => ans.questionID !== newAnswer.questionId
      );
      return [...updatedAnswer, newAnswer];
    });
  };

  const handleNavigateToResults = () => {
    navigate("/results");
  };

  
  

  return (
    <>
      {questions ? (
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
          {questions.length > 0 ? questions[questionIndex].question : "Loading question..."}

          </div>
          <div className="questionOptions">
            { questions.length > 0 ? questions[questionIndex].options.map((options, index) => (
              <Option
                key={index}
                optionIndex={String.fromCharCode(
                  64 + ((parseFloat(options.optionId) - 1) % 5) + 1
                )}
                active={selectedOptionIndex === options.optionId}
                optionText={options.text}
                onClick={() => handleSelectedOption(options.optionId)}
              />
            )) : "loading questions"}
          </div>

          <div className="nextButton">
            <SecondaryButton name="Previous" onClick={handlePreviousQuestion} />
            <PrimaryQuizButton
              name={questionIndex == 22 ? "Finish" : "Next"}
              onClick={handleNextQuestion}
            />
          </div>
        </motion.div>
      ):"loading questions" }

      {quizFinished && <Congratulations onClick={handleNavigateToResults} />}
    </>
  );
}
