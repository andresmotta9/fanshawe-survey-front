import React, { useState, useEffect } from 'react';
import './styles.css';
import Option from './option';
import PrimaryQuizButton from '../../components/primaryQuizButton';


const questions = [
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        options: [
            "A Lorem ipsum dolor sit amet, consectetur adipiscing it",
            "B Lorem ipsum dolor sit amet, consectetur adipiscing it",
            "C Lorem ipsum dolor sit amet, consectetur adipiscing it",
            "D Lorem ipsum dolor sit amet, consectetur adipiscing it"
        ]
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      options: [
          "A Lorem ipsum dolor sit amet, consectetur adipiscing it",
          "B Lorem ipr adipiscing it",
          "C Lorem ipsum dolor sit amet, consectetur adipiscing it",
          "D Lorem ipsum dolor sit amet, consectetur adipiscing it"
      ]
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      options: [
          "A Lorem ipsum dolor sit amet, consectetur adipiscing it",
          "B Lorem ipsum dolor sit amet, consectetur adipiscing it",
          "C Lorem ipsum dolor sit amet, consectetur adipiscing it",
          "D Loectetur adipiscing it"
      ]
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      options: [
          "A Lorem ipsumur adipiscing it",
          "B Lorem ipsum dolor sit amet, consectetur adipiscing it",
          "C Lorem ipsum dolor sit amet, consectetur adipiscing it",
          "D Lorem ipsum dolor sit amet, consectetur adipiscing it"
      ]
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      options: [
          "A Lorem ipsum dolor sit amet, consectetur adipiscing it",
          "B Lorem ipsum dolor sit amet, consectetur adipiscing it",
          "C Loreg it",
          "D Lorem ipsum dolor sit amet, consectetur adipiscing it"
      ]
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      options: [
          "A Lorem ipsum dolor sit amet, consectetur adipiscing it",
          "B Lorem ipsumnsectetur adipiscing it",
          "C Loreg it",
          "D Lorem ipsum dolor sit amet, consectetur adipiscing it"
      ]
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      options: [
          "A Locing it",
          "B Lorem ipsum dolor sit amet, consectetur adipiscing it",
          "C Loreg it",
          "D Lorem ipsum dolor sit amet, consectetur adipiscing it"
      ]
    }
];


export default function Survey(){
  const [questionIndex, setQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if(questionIndex < questions.length - 1){
      setQuestionIndex(questionIndex + 1);
    }
  };
  
  return(
    <div className='QuizContainer'>
      <div className="progressBar">
        <div className="progressBarFill" style={{width: `${((questionIndex + 1)/questions.length) * 100 }%`}}>
          {/* <div className="progressBarFiller" style={{width: `${((questionIndex + 1)/questions.length) * 100 }%`}}></div> */}
        </div>
        <div className='progressPercent'>
          <div className = {(questionIndex+1 > questions.length / 4 ? 'activePercent' : 'null')}>1</div>
          <div className = {(questionIndex+1 > questions.length / 2 ? 'activePercent' : 'null')}>2</div>
          <div className = {(questionIndex+1 > questions.length / (4/3) ? 'activePercent' : 'null')}>3</div>
        </div>
      </div>
      <div className="questionNumber">
        Question 7/24
      </div>
      <div className="questionContainer">
        {questions[1].question}
      </div>
      <div className="questionOptions">
        {questions[1].options.map((options, index) => (
          <Option key={index} />
        ))}
      </div>
      <div className="nextButton">
        <PrimaryQuizButton name="Next" onClick={handleNextQuestion}/>
      </div>
    </div>
  )
}