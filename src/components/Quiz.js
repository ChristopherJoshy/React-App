import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import { Howl } from 'howler';

const Quiz = ({ data, onFinish, setScore, setTimeSpent }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeSpent, setQuizTimeSpent] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);
    const [animationClass, setAnimationClass] = useState('');

    const correctSound = new Howl({
        src: [`${process.env.PUBLIC_URL}/sounds/correct.mp3`],
    });

    const incorrectSound = new Howl({
        src: [`${process.env.PUBLIC_URL}/sounds/incorrect.mp3`],
    });

    const handleAnswer = (answer) => {
        if (isAnswered) return;
        setIsAnswered(true);

        if (answer === data.questions[currentQuestionIndex].correct) {
            setScore(prevScore => prevScore + 1);
            correctSound.play();
        } else {
            incorrectSound.play();
        }

        handleNextQuestion();
    };

    const handleNextQuestion = () => {
        setAnimationClass('fade-out');
        setTimeout(() => {
            setAnimationClass('');
            if (currentQuestionIndex < data.questions.length - 1) {
                setCurrentQuestionIndex(prevIndex => prevIndex + 1);
                setIsAnswered(false);
            } else {
                onFinish();
            }
        }, 300);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setQuizTimeSpent(prevTime => prevTime + 1);
            setTimeSpent(prevTime => prevTime + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [setTimeSpent]);

    return (
        <div className={`quiz animated ${animationClass}`}>
            <h2>Question {currentQuestionIndex + 1}/{data.questions.length}</h2>
            <p>{data.questions[currentQuestionIndex].question}</p>
            <Timer timeSpent={timeSpent} />
            <div className="choices">
                {data.questions[currentQuestionIndex].answers.map((answer, index) => (
                    <button key={index} onClick={() => handleAnswer(answer)} disabled={isAnswered}>
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Quiz;
