import React, { useState } from 'react';
import './QuizApp.css';

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      question: 'According to ISO 25010, which three sub-characteristics define performance efficiency in the Product Quality Model?',
      options: [
        'Time Behavior, Resource Utilization, and Capacity',
        'Speed, Accuracy, and Reliability',
        'Throughput, Latency, and Bandwidth',
        'Load Handling, Stress Resistance, and Scalability'
      ],
      correctAnswer: 0
    },
    {
      question: 'What is the primary focus of endurance testing in performance testing?',
      options: [
        'Testing the system with maximum concurrent users',
        'Verifying system stability over a time frame specific to operational context and detecting resource capacity problems like memory leaks',
        'Testing system recovery after failures',
        'Measuring the time taken for system deployment'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which type of performance testing focuses on the ability of a system to respond correctly to sudden bursts of peak loads and return to a steady state?',
      options: [
        'Load Testing',
        'Stress Testing',
        'Spike Testing',
        'Scalability Testing'
      ],
      correctAnswer: 2
    },
    {
      question: 'In the context of load generation, which approach involves capturing user interaction at the communications protocol level and replaying scripts to simulate large numbers of users?',
      options: [
        'Load Generation via the User Interface',
        'Load Generation using Crowds',
        'Load Generation via the Application Programming Interface (API)',
        'Load Generation using Captured Communication Protocols'
      ],
      correctAnswer: 3
    },
    {
      question: 'What is the main objective of capacity testing?',
      options: [
        'To test the system under conditions beyond its specified limits',
        'To determine how many users and/or transactions a system will support while meeting stated performance objectives',
        'To verify that the system can handle concurrent actions',
        'To measure the system response time under normal load'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which static testing activity is particularly critical for performance testing because many performance defects are introduced in the architecture and design phase?',
      options: [
        'Code review of unit test cases',
        'Review of requirements with focus on performance aspects, database schemas, and system/network architecture',
        'Inspection of user interface mockups',
        'Verification of deployment scripts'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is a common cause of "degraded response over time" failure mode in performance testing?',
      options: [
        'Network latency and bad database design',
        'Insufficient resource pools and undersized queues',
        'Memory leaks, disk fragmentation, and unexpected database growth',
        'Saturation of resources under heavy load'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which performance testing principle states that tests must yield results that are understandable and can be readily compared to stakeholder expectations?',
      options: [
        'Tests must be reproducible with statistically identical results',
        'Tests must be aligned to defined expectations of different stakeholder groups',
        'Tests must yield results that are both understandable and can be readily compared to stakeholder expectations',
        'Tests must be practically affordable and executable within project timeframe'
      ],
      correctAnswer: 2
    },
    {
      question: 'What is the primary difference between concurrency testing and load testing?',
      options: [
        'Concurrency testing focuses on simultaneous actions occurring at the same time, while load testing focuses on increasing levels of anticipated loads',
        'Concurrency testing is cheaper than load testing',
        'Load testing only tests database performance',
        'There is no significant difference between them'
      ],
      correctAnswer: 0
    },
    {
      question: 'In scalability testing, what is the main objective when determining the system\'s ability to grow?',
      options: [
        'To find the maximum number of bugs in the system',
        'To determine if the system can meet future efficiency requirements without violating currently specified performance requirements',
        'To reduce the cost of infrastructure',
        'To eliminate the need for performance monitoring in production'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which load generation approach is MOST suitable when testing needs to be reproducible, precise, and less sensitive to UI changes?',
      options: [
        'Load Generation via the User Interface',
        'Load Generation using Crowds',
        'Load Generation using Captured Communication Protocols',
        'Manual testing by end users'
      ],
      correctAnswer: 2
    },
    {
      question: 'What is a typical cause of "slow response under moderate-to-heavy load levels" even when loads are within normal expected ranges?',
      options: [
        'Bad database design and network latency',
        'Memory leaks and disk fragmentation',
        'Saturation of one or more resources and varying background loads',
        'Insufficient resource pools and too rapid time-out settings'
      ],
      correctAnswer: 2
    },
    {
      question: 'According to the ISTQB syllabus, when should performance testing start in the development lifecycle?',
      options: [
        'Only during system testing when the complete system is available',
        'As soon as possible, including during unit testing using profiling and dynamic analysis',
        'Only during acceptance testing to build user confidence',
        'After all functional testing is completed'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which quality sub-characteristic evaluates if the system can respond to user inputs within a specified time under specified conditions?',
      options: [
        'Resource Utilization',
        'Capacity',
        'Time Behavior',
        'Scalability'
      ],
      correctAnswer: 2
    },
    {
      question: 'What is the primary advantage of using Load Generation via the Application Programming Interface (API) compared to UI-based load generation?',
      options: [
        'It requires no programming skills',
        'It is less sensitive to UI changes and allows more users to be simulated',
        'It is always cheaper than other methods',
        'It does not require any test scripts'
      ],
      correctAnswer: 1
    },
    {
      question: 'In performance testing, what does "inadequate or graceless error handling under heavy or over-limit load" typically indicate?',
      options: [
        'Memory leaks and disk fragmentation issues',
        'Network latency and bad database design',
        'Insufficient resource pools, undersized queues and stacks, and too rapid time-out settings',
        'Increasing network load over time'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which testing type should be performed when evaluating if functional suitability and usability are impacted under conditions of load?',
      options: [
        'Only static testing of requirements',
        'Dynamic performance testing that may reveal load-specific issues impacting those characteristics',
        'Only unit testing without load',
        'Manual exploratory testing'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is the main purpose of using profiling information during unit testing in performance testing?',
      options: [
        'To determine the number of test cases needed',
        'To identify potential bottlenecks and evaluate resource utilization',
        'To verify functional correctness of the code',
        'To measure code coverage percentages'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which performance testing principle emphasizes that tests must be reproducible?',
      options: [
        'Tests must yield results comparable to expectations',
        'Tests must obtain statistically identical results within a specified tolerance by repeating tests on an unchanged system',
        'Tests must be aligned to stakeholder expectations',
        'Tests must be affordable within project timeframe'
      ],
      correctAnswer: 1
    },
    {
      question: 'In the context of performance testing, what does Resource Utilization as a quality sub-characteristic focus on?',
      options: [
        'The time taken to respond to user inputs',
        'The number of concurrent users the system can handle',
        'The allocation and usage of limited system resources like RAM when identified as a risk',
        'The cost of infrastructure for the system'
      ],
      correctAnswer: 2
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
