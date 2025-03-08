import React from 'react';
import './styles.css';
import questionMark from '../../assets/question-mark.svg';
function MobileHeader() {
    return(
        <button className='startQuizButtonMobileHeader'>
            <img src={questionMark} alt="Question Mark" width={26} height={35} />
        </button>
    )
}


export default function StartQuizButton(props) {
    return (
        <div>
            {(props.mobileHeader == true) ? <MobileHeader/> : <button className='startQuizButton'>Start Quiz</button>}
        </div>
    )
}