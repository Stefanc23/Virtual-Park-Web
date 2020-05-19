import React from 'react';
import { Link } from 'react-router-dom';

function QuizFinish(props) {
    const correctAnswers = props.correctAnswers;
    const timedOut = props.timedOut;
    const reset = props.reset;

    return (
        <div className="container text-center">
            {timedOut ? <h2>Time's Up!</h2> : (correctAnswers > 5 ? <h2>Well Done!</h2> : <h2>Do Better Next Time!</h2>)}
            <div className="d-flex flex-column justify-content-center align-items-center my-5">
                <h4>You Answered : </h4>
                <h1>{correctAnswers}/10</h1>
                <h3>Correctly</h3>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <Link to="/" className="btn btn-warning mx-2">Back to Home</Link>
                <button className="btn btn-warning mx-2" onClick={reset}>Retry</button>
            </div>
        </div>
    );
}

export default QuizFinish;