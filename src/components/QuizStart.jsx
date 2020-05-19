import React from 'react';
import QuestionMark from './images/Question.png';

function QuizStart(props) {

    return (
        <div className="quiz-starter-container text-center d-flex flex-column justify-content-center align-items-center">
            <h4>There are several questions in this quiz</h4>
            <img src={QuestionMark} alt="" className="w-50 rounded-circle m-3"/>
            <button type="button" className="btn btn-lg btn-warning start-quiz-button mt-2" onClick={props.onClick}>START</button>  
        </div>
    )
}

export default QuizStart;