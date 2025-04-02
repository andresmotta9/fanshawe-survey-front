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


  // Add beforeunload event listener to clear storage on refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('surveyAnswers');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Load saved answers from localStorage on component mount
  useEffect(() => {
    const savedAnswers = localStorage.getItem('surveyAnswers');
    if (savedAnswers) {
      try {
        const parsedAnswers = JSON.parse(savedAnswers);
        // Only use saved answers if quiz isn't finished
        if (!quizFinished) {
          setAnswers(parsedAnswers);
        } else {
          localStorage.removeItem('surveyAnswers');
        }
      } catch (e) {
        localStorage.removeItem('surveyAnswers');
      }
    }
  }, [quizFinished]);

  // Save answers to localStorage whenever they change
  useEffect(() => {
    if (answers.length > 0 && !quizFinished) {
      localStorage.setItem('surveyAnswers', JSON.stringify(answers));
    }
  }, [answers, quizFinished]);

  // Updated to properly track selected options
  useEffect(() => {
    if (questions.length > 0) {
      const currentAnswer = answers.find(
        (answer) => answer.questionId === questions[questionIndex].questionId
      );
      setSelectedOptionIndex(currentAnswer ? currentAnswer.optionId : null);
    }
  }, [questionIndex, questions, answers]);

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
    } else {
      setQuizFinished(true)
      setfinalResultTrigger(API_ENDPOINTS.PROGRAM_RESULTS);
    }
  };

  const handlePreviousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  // Updated to properly store answers and handle deselection
  const handleSelectedOption = (index) => {
    // If clicking the already selected option, deselect it
    if (selectedOptionIndex === index) {
      setSelectedOptionIndex(null);
      setAnswers((prevAnswers) => {
        return prevAnswers.filter(
          (ans) => ans.questionId !== questions[questionIndex].questionId
        );
      });
      return;
    }

    // Otherwise, select the new option
    setSelectedOptionIndex(index);
    setAnswers((prevAnswers) => {
      const fieldIdContain = questions[questionIndex].options.find(
        (ans) => ans.optionId === index
      );
      const newAnswer = {
        questionId: questions[questionIndex].questionId,
        optionId: index,
        fieldId: fieldIdContain ? fieldIdContain.fieldId : null,
      };

      // Remove any existing answer for this question
      const updatedAnswer = prevAnswers.filter(
        (ans) => ans.questionId !== newAnswer.questionId
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
    navigate("/results", { state: { answers } });
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