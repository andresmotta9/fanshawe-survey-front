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
import OptionsDisplay from "./optionsDisplay";
import MidPageAnimation from "./midPageAnimation";
export default function Survey() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const [noSelection, setNoSelection] = useState(false);
  const navigate = useNavigate();
  const [answers, setAnswers] = useState([]);
  const [fetchTrigger, setFetchTrigger] = useState(null);
  const [finalResultTrigger, setfinalResultTrigger] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [startSecondRound, setstartSecondRound] = useState(false);
  const [triggerBreak,setTriggerBreak] = useState(false)
  // const [finalCourseResult, setFinalCourseResult] = useState(null);

  const { data, loading, error } = useFetch(API_ENDPOINTS.QUESTIONS_FIELDS);

  const {
    data: winnerFieldInfo,
    loading: winnerFieldLoading,
    error: winnerFieldErr,
  } = useFetch(fetchTrigger, { answers: answers });

  const {
    data: winnerProgramInfo,
    loading: winnerProgramLoading,
    error: winnerProgramErr,
  } = useFetch(finalResultTrigger, { answers: answers });

  useEffect(() => {
    if (winnerFieldInfo) {
      setQuestions([]);
      setAnswers([])
      setQuestions((prevQuestions) => {
        return [...prevQuestions, ...winnerFieldInfo.data.nextQuestions];
      });
      setQuestionIndex(0)
      setstartSecondRound(true)
    }
  }, [winnerFieldInfo]);

  useEffect(() => {
    if (data) {
      setQuestions(data)
    }
    
  }, [data]);


  const handleNextQuestion = () => {
    if (selectedOptionIndex === null) {
      setNoSelection(true);
      return;
    }
    if(!startSecondRound){
      if (questionIndex === 5) {
        console.log("clicked");
        setTriggerBreak(true)
        setFetchTrigger(API_ENDPOINTS.ANSWER_FIELDS);
      }
    }
    
    if (questionIndex < 23) {
      setNoSelection(false);

      setQuestionIndex(questionIndex + 1);
      setSelectedOptionIndex(null);
    } else {
      setQuizFinished(true)
      setfinalResultTrigger(API_ENDPOINTS.PROGRAM_RESULTS);
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

  const handleSecondSelectedOption = (index) => {
    setSelectedOptionIndex(index);
    setAnswers((prevAnswers) => {
      const programCodeContain = questions[questionIndex].answers.find(
        (ans) => ans.answerId === index
      );
      const newAnswer = {
        questionId: questions[questionIndex].questionId,
        programCode: programCodeContain ? programCodeContain.programCode : null,
      };

      
      return [ ...prevAnswers, newAnswer];
    });
    console.log(questionIndex, answers)
  };

  const handleNavigateToResults = () => {
    navigate("/results");
  };

  return (
    <>
      {triggerBreak ? <MidPageAnimation onClick={() => setTriggerBreak(false)}/> :(questions ? (
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
            {questions.length > 0
              ? ( questions[questionIndex].question)
              : "Loading question..."}
          </div>
          <OptionsDisplay
            questions={questions}
            handleSelectedOption={!startSecondRound ? handleSelectedOption : handleSecondSelectedOption}
            isSecondRound={startSecondRound}
            selectedOptionIndex={selectedOptionIndex}
            questionIndex={questionIndex}
          />

          <div className="nextButton">
            <SecondaryButton name="Previous" onClick={handlePreviousQuestion} />
            <PrimaryQuizButton
              name={questionIndex == 23 ? "Finish" : "Next"}
              onClick={handleNextQuestion}
            />
          </div>
        </motion.div>
      ) : (
        "loading questions"
      ))}

      {quizFinished && <Congratulations onClick={handleNavigateToResults} />}
    </>
  );
}
