import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import QuizStart from './QuizStart';
import QuizTimer from './QuizTimer';
import QuizProgress from './QuizProgress';
import Question from './Question';
import Answers from './Answers';
import QuizFinish from './QuizFinish';
import './styles/quiz.css';

function Quiz() {
    const [loaded, setLoaded] = useState(false);
    const [started, setStarted] = useState(false);
    const [finished, setFinished] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [time] = useState(300000);
    const [timedOut, setTimedOut] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if(!loaded) {
            axios.get('/api/questions/').then(({data}) => {
                console.log(data);
                setQuestions(data);            
            })
            setLoaded(true);
        }
    }, [loaded]);

    function startQuiz() {
        setStarted(true);
        setTimeout(() => {
            setTimedOut(true);
            finishQuiz();
        }, time + 1000);
    }

    function finishQuiz() {
        setFinished(true);
    }

    function reset() {
        setStarted(false);
        setFinished(false);
        setTimedOut(false);
        setCorrectAnswers(0);
        setCurrentIndex(0);
    }

    function incrementCorrectAnswers() {
        setCorrectAnswers(correctAnswers + 1);
        console.log(correctAnswers);        
    }

    function incrementCurrentIndex(event) {
        setCurrentIndex(currentIndex + 1);
    }

    return (
        <div>
            <Header pageName={"extras"} />
            <div className="quiz-container d-flex justify-content-center align-items-center">
                { !started ? (
                    <QuizStart onClick={startQuiz} />
                ) : (
                    !finished && currentIndex < 10 ? (
                        <div className="container px-5">
                            <div className="row">
                                <div className="col-10">
                                    <QuizProgress finish={finishQuiz} currentNumber={currentIndex + 1}/>
                                </div>
                                <div className="col-2">
                                    <QuizTimer time={time} />
                                </div>
                            </div>
                            <Question question={questions[currentIndex]} />
                            <Answers question={questions[currentIndex]} increment={{incrementCorrectAnswers, incrementCurrentIndex}} />
                        </div>
                    ) : <QuizFinish timedOut={timedOut} correctAnswers={correctAnswers} reset={reset} />
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Quiz;