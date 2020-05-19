import React from 'react';
import Timer from 'react-compound-timer';

function QuizTimer(props) {
    const {time} = props;

    return (
        <div className="quiz-timer">
            <Timer
                initialTime={time}
                direction="backward"
            >
                {() => (
                    <React.Fragment>
                        <Timer.Minutes />.<Timer.Seconds />
                    </React.Fragment>
                )}
            </Timer>
        </div>
    )
}

export default QuizTimer;