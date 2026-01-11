import React, { useState } from 'react';

const QuizApp = () => {
  // ISTQB Performance Testing quiz questions
  const quizData = [
    {
      id: 1,
      question: "What is the primary goal of performance testing?",
      options: [
        "To find functional defects",
        "To assess speed, scalability, and stability under load",
        "To verify user interface design",
        "To check database integrity"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Which type of performance testing determines the maximum capacity of a system?",
      options: [
        "Load testing",
        "Stress testing",
        "Spike testing",
        "Endurance testing"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "What does 'response time' measure in performance testing?",
      options: [
        "Time to fix a bug",
        "Time between sending a request and receiving a response",
        "Time to deploy the application",
        "Time to write test cases"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "What is the purpose of load testing?",
      options: [
        "To test the application under expected user load",
        "To crash the system intentionally",
        "To verify security vulnerabilities",
        "To check code quality"
      ],
      correctAnswer: 0
    },
    {
      id: 5,
      question: "Which metric indicates the number of transactions processed per unit of time?",
      options: [
        "Response time",
        "Latency",
        "Throughput",
        "Error rate"
      ],
      correctAnswer: 2
    },
    {
      id: 6,
      question: "What is spike testing?",
      options: [
        "Testing with a sudden increase and decrease in load",
        "Testing with constant load over time",
        "Testing with gradually increasing load",
        "Testing with minimal load"
      ],
      correctAnswer: 0
    },
    {
      id: 7,
      question: "What does endurance testing (soak testing) evaluate?",
      options: [
        "System behavior under peak load",
        "System behavior under sustained load over an extended period",
        "System behavior under minimal load",
        "System behavior during deployment"
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "Which of the following is NOT a key performance indicator (KPI)?",
      options: [
        "Response time",
        "Throughput",
        "Code coverage",
        "Error rate"
      ],
      correctAnswer: 2
    },
    {
      id: 9,
      question: "What is a bottleneck in performance testing?",
      options: [
        "A feature that users like most",
        "A component that limits system performance",
        "A test case that always passes",
        "A documentation error"
      ],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "Which tool is commonly used for performance testing?",
      options: [
        "Selenium",
        "JUnit",
        "JMeter",
        "Cucumber"
      ],
      correctAnswer: 2
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    quizData.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setShowResults(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const calculatePercentage = () => {
    return ((score / quizData.length) * 100).toFixed(2);
  };

  if (showResults) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Quiz Results</h1>
          <div style={styles.resultsContainer}>
            <h2 style={styles.scoreText}>Your Score: {score} / {quizData.length}</h2>
            <h3 style={styles.percentageText}>Percentage: {calculatePercentage()}%</h3>
            
            <div style={styles.performanceMessage}>
              {calculatePercentage() >= 80 ? (
                <p style={styles.successMessage}>Excellent! You have a strong understanding of ISTQB Performance Testing concepts.</p>
              ) : calculatePercentage() >= 60 ? (
                <p style={styles.warningMessage}>Good job! You have a decent understanding, but there's room for improvement.</p>
              ) : (
                <p style={styles.errorMessage}>Keep studying! Review the ISTQB Performance Testing syllabus to improve your knowledge.</p>
              )}
            </div>

            <div style={styles.answerReview}>
              <h3 style={styles.reviewTitle}>Answer Review:</h3>
              {quizData.map((question, index) => {
                const userAnswer = selectedAnswers[question.id];
                const isCorrect = userAnswer === question.correctAnswer;
                return (
                  <div key={question.id} style={styles.reviewItem}>
                    <p style={styles.reviewQuestion}>
                      <strong>Q{index + 1}:</strong> {question.question}
                    </p>
                    <p style={isCorrect ? styles.correctAnswer : styles.incorrectAnswer}>
                      Your answer: {userAnswer !== undefined ? question.options[userAnswer] : 'Not answered'}
                      {isCorrect ? ' ✓' : ' ✗'}
                    </p>
                    {!isCorrect && (
                      <p style={styles.correctAnswerText}>
                        Correct answer: {question.options[question.correctAnswer]}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <button style={styles.button} onClick={handleRestart}>
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = quizData[currentQuestion];
  const totalQuestions = quizData.length;
  const answeredCount = Object.keys(selectedAnswers).length;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>ISTQB Performance Testing Quiz</h1>
        
        <div style={styles.progressBar}>
          <div style={{...styles.progressFill, width: `${((currentQuestion + 1) / totalQuestions) * 100}%`}} />
        </div>
        
        <div style={styles.questionInfo}>
          <span>Question {currentQuestion + 1} of {totalQuestions}</span>
          <span>Answered: {answeredCount}/{totalQuestions}</span>
        </div>

        <div style={styles.questionContainer}>
          <h2 style={styles.questionText}>{question.question}</h2>
          
          <div style={styles.optionsContainer}>
            {question.options.map((option, index) => (
              <div
                key={index}
                style={{
                  ...styles.option,
                  ...(selectedAnswers[question.id] === index ? styles.selectedOption : {})
                }}
                onClick={() => handleAnswerSelect(question.id, index)}
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  checked={selectedAnswers[question.id] === index}
                  onChange={() => handleAnswerSelect(question.id, index)}
                  style={styles.radio}
                />
                <label style={styles.optionLabel}>{option}</label>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.navigationButtons}>
          <button
            style={{...styles.button, ...styles.secondaryButton}}
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          
          {currentQuestion === totalQuestions - 1 ? (
            <button
              style={{...styles.button, ...styles.submitButton}}
              onClick={handleSubmit}
              disabled={answeredCount < totalQuestions}
            >
              Submit Quiz
            </button>
          ) : (
            <button
              style={styles.button}
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>

        {answeredCount < totalQuestions && currentQuestion === totalQuestions - 1 && (
          <p style={styles.warningText}>Please answer all questions before submitting.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    padding: '30px',
    maxWidth: '800px',
    width: '100%'
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
    fontSize: '28px'
  },
  progressBar: {
    width: '100%',
    height: '8px',
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    marginBottom: '20px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    transition: 'width 0.3s ease'
  },
  questionInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    color: '#666',
    fontSize: '14px'
  },
  questionContainer: {
    marginBottom: '30px'
  },
  questionText: {
    fontSize: '20px',
    color: '#333',
    marginBottom: '20px',
    lineHeight: '1.5'
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  option: {
    border: '2px solid #ddd',
    borderRadius: '6px',
    padding: '15px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  selectedOption: {
    border: '2px solid #4CAF50',
    backgroundColor: '#f0f8f0'
  },
  radio: {
    marginRight: '12px',
    cursor: 'pointer'
  },
  optionLabel: {
    cursor: 'pointer',
    fontSize: '16px',
    color: '#333',
    flex: 1
  },
  navigationButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    marginTop: '20px'
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    transition: 'background-color 0.2s',
    fontWeight: 'bold'
  },
  secondaryButton: {
    backgroundColor: '#757575'
  },
  submitButton: {
    backgroundColor: '#2196F3'
  },
  warningText: {
    color: '#f44336',
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '14px'
  },
  resultsContainer: {
    textAlign: 'center'
  },
  scoreText: {
    fontSize: '32px',
    color: '#333',
    marginBottom: '10px'
  },
  percentageText: {
    fontSize: '24px',
    color: '#666',
    marginBottom: '20px'
  },
  performanceMessage: {
    margin: '20px 0',
    padding: '15px',
    borderRadius: '6px'
  },
  successMessage: {
    color: '#2e7d32',
    backgroundColor: '#e8f5e9',
    padding: '15px',
    borderRadius: '6px',
    margin: 0
  },
  warningMessage: {
    color: '#f57c00',
    backgroundColor: '#fff3e0',
    padding: '15px',
    borderRadius: '6px',
    margin: 0
  },
  errorMessage: {
    color: '#c62828',
    backgroundColor: '#ffebee',
    padding: '15px',
    borderRadius: '6px',
    margin: 0
  },
  answerReview: {
    marginTop: '30px',
    textAlign: 'left'
  },
  reviewTitle: {
    fontSize: '20px',
    color: '#333',
    marginBottom: '15px',
    borderBottom: '2px solid #ddd',
    paddingBottom: '10px'
  },
  reviewItem: {
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '6px',
    borderLeft: '4px solid #ddd'
  },
  reviewQuestion: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '8px'
  },
  correctAnswer: {
    color: '#2e7d32',
    fontSize: '14px',
    marginBottom: '5px'
  },
  incorrectAnswer: {
    color: '#c62828',
    fontSize: '14px',
    marginBottom: '5px'
  },
  correctAnswerText: {
    color: '#2e7d32',
    fontSize: '14px',
    fontStyle: 'italic'
  }
};

export default QuizApp;
