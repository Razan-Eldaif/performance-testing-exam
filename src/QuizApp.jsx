import React, { useState } from 'react';
import './QuizApp.css';

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      question: 'What is the primary goal of performance testing?',
      options: [
        'To find functional bugs',
        'To determine the speed, scalability, and stability of a system under load',
        'To verify user interface design',
        'To check code quality'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which of the following is NOT a type of performance testing?',
      options: [
        'Load Testing',
        'Stress Testing',
        'Smoke Testing',
        'Spike Testing'
      ],
      correctAnswer: 2
    },
    {
      question: 'What does response time measure in performance testing?',
      options: [
        'Time to deploy the application',
        'Time taken to process a request and return a response',
        'Time to write test scripts',
        'Time to fix bugs'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is the purpose of stress testing?',
      options: [
        'To test normal operating conditions',
        'To test the system beyond its specified limits',
        'To test only the database',
        'To test security vulnerabilities'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which metric is commonly used to measure system performance?',
      options: [
        'Lines of code',
        'Number of developers',
        'Transactions per second (TPS)',
        'Number of bugs'
      ],
      correctAnswer: 2
    },
    {
      question: 'What is throughput in performance testing?',
      options: [
        'The number of bugs found per hour',
        'The amount of data processed in a given time period',
        'The cost of testing',
        'The number of test cases executed'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is a bottleneck in performance testing?',
      options: [
        'A testing tool',
        'A point in the system that limits overall performance',
        'A type of test script',
        'A performance metric'
      ],
      correctAnswer: 1
    },
    {
      question: 'What does scalability testing evaluate?',
      options: [
        'How well the system handles increasing load',
        'How secure the system is',
        'How many bugs exist',
        'How fast developers can code'
      ],
      correctAnswer: 0
    },
    {
      question: 'Which tool is commonly used for performance testing?',
      options: [
        'Selenium',
        'JMeter',
        'Git',
        'Jenkins'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is the difference between load testing and stress testing?',
      options: [
        'There is no difference',
        'Load testing tests under expected conditions, stress testing tests beyond limits',
        'Load testing is faster',
        'Stress testing is cheaper'
      ],
      correctAnswer: 1
    }
  ];

  const handleAnswerClick = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="quiz-app">
      <h1>Quiz App Loaded Successfully</h1>
      <h2>ISTQB Performance Testing Quiz</h2>
      {showScore ? (
        <div className="score-section">
          <h3>Quiz Complete!</h3>
          <p>
            You scored {score} out of {questions.length}
          </p>
          <p>
            Percentage: {Math.round((score / questions.length) * 100)}%
          </p>
          <button onClick={handleRestartQuiz} className="restart-button">
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].question}
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                className={`answer-button ${
                  selectedAnswer === index ? 'selected' : ''
                }`}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedAnswer !== null && (
            <div className="feedback-section">
              <p
                className={
                  selectedAnswer === questions[currentQuestion].correctAnswer
                    ? 'correct'
                    : 'incorrect'
                }
              >
                {selectedAnswer === questions[currentQuestion].correctAnswer
                  ? '✓ Correct!'
                  : '✗ Incorrect'}
              </p>
              <button onClick={handleNextQuestion} className="next-button">
                {currentQuestion + 1 === questions.length
                  ? 'Show Results'
                  : 'Next Question'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizApp;
