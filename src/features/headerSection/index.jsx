import React from 'react';
import './styles.css';
import PrimaryQuizButton from '../../components/primaryQuizButton';
import { useMediaQuery } from 'react-responsive';

export default function HeaderSection({ onStartQuiz }) {
  const isDesktop = useMediaQuery({ minWidth: 750 });

  return (
    <div className="headerSection">
      <div className="logo">
        <span onClick={() => window.location.reload()} style={{ cursor: 'pointer' }}>
          FanSurvey
        </span>
      </div>
      <div>
        {/* Pass the onStartQuiz function to PrimaryQuizButton */}
        <PrimaryQuizButton mobileHeader={!isDesktop} name="Start Quiz" onClick={onStartQuiz} />
      </div>
    </div>
  );
}