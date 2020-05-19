import React, { useState, useEffect } from 'react';

function Answers(props) {
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [answers, setAnswers] = useState([]);
    const [choice] = useState(['A', 'B', 'C', 'D']);
    const [status, setStatus] = useState('');
    const {incrementCorrectAnswers, incrementCurrentIndex} = props.increment;

    useEffect(() => {
        setCurrentQuestion(props.question);
        setAnswers(props.question.choices);
    }, [props.question]);

    function handleOnClick(event) {
        const pickedAnswer = event.target.id;   
        if(pickedAnswer === currentQuestion.answer) {
            incrementCorrectAnswers();
            setStatus('correct');
        } else {
            setStatus('incorrect');
        }
        setTimeout(() => {
            setStatus('');
            incrementCurrentIndex();
        }, 1000);
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="multiple-choice-container">
                {answers.map((answer, index) => {
                    return (
                        <button id={answer} name={index} className={`btn choice-button ${choice[index]} ${status}`} onClick={handleOnClick}>{choice[index]}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Answers;