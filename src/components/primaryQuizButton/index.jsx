import React from 'react';
import './styles.css';
import questionMark from '../../assets/question-mark.svg';

// MobileHeader component
function MobileHeader({ onClick }) {
  return (
    <button className="startQuizButtonMobileHeader" onClick={onClick}>
      <img src={questionMark} alt="Question Mark" width={26} height={35} />
    </button>
  );
}

// PrimaryQuizButton component
export default function PrimaryQuizButton({ mobileHeader, name, onClick }) {
  return (
    <div>
      {mobileHeader ? (
        // Pass onClick to MobileHeader
        <MobileHeader onClick={onClick} />
      ) : (
        // Pass onClick to the desktop button
        <button className="startQuizButton" onClick={onClick}>
          {name}
        </button>
      )}
    </div>
  );
}