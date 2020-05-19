import React, { useState, useEffect } from 'react';

function Question(props) {
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState([]);
    const [image, setImage] = useState('');

    useEffect(() => {
        setQuestion(props.question.question);
        setAnswers(props.question.choices);
        setImage(props.question.image);
    }, [props.question]);
    
    return (
        <div className="d-flex flex-column justify-content-center align-items-center pt-3">
            <img src={image} alt="" className="question-image"/>
            <div className="question-container">
                <p className="m-0">{question}</p>
                <ol type="A" className="mt-2 mb-0 text-left">
                    <li>{answers[0]}</li>
                    <li>{answers[1]}</li>
                    <li>{answers[2]}</li>
                    <li>{answers[3]}</li>
                </ol>
            </div>
        </div>
    )
}

export default Question;