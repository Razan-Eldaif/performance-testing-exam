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
      question: "In scalability testing, what is the main objective when determining the system's ability to grow?",
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
    },
    {
      question: 'According to ISTQB, which of the following is a key risk if performance metrics are not properly defined before testing?',
      options: [
        'The testing team will have too many metrics to analyze',
        'Performance test results may be evaluated based on subjective opinion rather than measurable criteria',
        'The cost of testing will increase significantly',
        'Automated testing tools will not function properly'
      ],
      correctAnswer: 1
    },
    {
      question: 'Why are performance test results typically aggregated rather than analyzed individually?',
      options: [
        'To reduce storage requirements for test data',
        'To identify patterns, trends, and statistical measures that individual results cannot reveal',
        'To make testing faster and more efficient',
        'To comply with industry regulations'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which of the following is a typical metric collected during performance testing?',
      options: [
        'Number of developers working on the project',
        'Response time, throughput, and resource utilization',
        'Lines of code written per day',
        'Number of meetings held during testing'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is the primary purpose of establishing a baseline set of performance measures?',
      options: [
        'To document the testing process for auditors',
        'To compare actual test results against defined acceptable and unacceptable performance levels',
        'To estimate the budget for future projects',
        'To determine how many testers are needed'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which of the following represents a key source of performance metrics during testing?',
      options: [
        'Project management documentation only',
        'System under test, monitoring tools, and application logs',
        'Developer interviews and code reviews',
        'Customer satisfaction surveys'
      ],
      correctAnswer: 1
    },
    {
      question: 'What risk occurs when performance requirements are not defined in measurable terms?',
      options: [
        'Testing will take longer than expected',
        'It becomes unknown whether performance levels are acceptable to meet operational objectives',
        'More testers will be required',
        'The application will automatically fail'
      ],
      correctAnswer: 1
    },
    {
      question: 'In performance testing, why is it important to understand which measurements and metrics are needed before starting testing?',
      options: [
        'To ensure the testing team has enough resources',
        'To prevent undertaking performance testing without clear goals and evaluation criteria',
        'To satisfy management reporting requirements',
        'To determine the programming language to use'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is a consequence of not being able to identify trends that predict lower performance levels?',
      options: [
        'The development team will work faster',
        'Potential performance degradation may go undetected until it impacts users',
        'Testing costs will decrease',
        'The application will use less memory'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which statement best describes why understanding performance tool results is critical?',
      options: [
        'It helps justify the cost of the testing tools',
        'Without understanding tool results, performance cannot be accurately evaluated and interpreted',
        'It allows testers to use more expensive tools',
        'It reduces the need for manual testing'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is the relationship between measurements and metrics in performance testing?',
      options: [
        'They are the same thing and can be used interchangeably',
        'Metrics are derived from measurements and used to define goals and evaluate results',
        'Measurements are less important than metrics',
        'Metrics are only used for reporting to management'
      ],
      correctAnswer: 1
    },
    {
      question: 'According to the ISTQB syllabus on collecting performance measurements, why must response time metrics be further defined beyond just measuring response time?',
      options: [
        'To reduce testing costs',
        'To be meaningful and actionable, they must be defined in context such as time of day, concurrent users, and data volume',
        'To comply with regulatory requirements',
        'To simplify test automation'
      ],
      correctAnswer: 1
    },
    {
      question: 'In what ways do performance metrics vary based on the business context versus the operational context?',
      options: [
        'They do not vary; all metrics are standard across contexts',
        'Business context focuses on processes and stakeholder expectations; operational context focuses on technology usage',
        'Business metrics are always more important than operational metrics',
        'Operational metrics only measure hardware performance'
      ],
      correctAnswer: 1
    },
    {
      question: 'Why would the metrics chosen for an international e-commerce website differ significantly from those for an embedded medical device system?',
      options: [
        'Medical devices do not require performance testing',
        'Different technical environments, business contexts, and test objectives require context-appropriate metrics',
        'E-commerce sites only need to measure page load times',
        'Medical devices only need functional testing'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which of the following is an example of a performance metric from the Technical Environment category?',
      options: [
        'Business process efficiency and SLA compliance rates',
        'Throughput rate of transactions and batch processing times',
        'Response time per transaction, resource utilization (CPU, memory), and network latency',
        'Operational processes like environment start-up time'
      ],
      correctAnswer: 2
    },
    {
      question: 'From a Business Environment perspective, what does "throughput of data, transactions, and other units of work" measure?',
      options: [
        'The speed of network connections',
        'Quantities like orders processed per hour or data rows added per minute',
        'The number of test cases executed',
        'CPU utilization percentages'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is an example of an Operational Environment performance metric?',
      options: [
        'Number of concurrent users during peak load',
        'Page load times for web applications',
        'Time required for environment start-up, backups, shutdown, and system restoration',
        'SLA compliance and violation rates'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which metric would be most relevant when evaluating Service Level Agreement (SLA) compliance in the Business Environment?',
      options: [
        'Memory utilization and disk I/O rates',
        'SLA violations per unit of time and business process efficiency',
        'Network bandwidth and throughput',
        'Code complexity metrics'
      ],
      correctAnswer: 1
    },
    {
      question: 'In section 2.1.3, why is collecting MORE metrics than required considered problematic?',
      options: [
        'It makes the testing team look unprofessional',
        'Each metric requires consistent collection and reporting effort; excessive metrics waste resources without adding value',
        'More metrics always lead to better testing',
        'It increases hardware costs'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is the Goal-Question-Metric (GQM) approach designed to achieve in performance testing?',
      options: [
        'To eliminate all performance testing costs',
        'To align metrics with performance goals by establishing goals, asking questions about achievement, and associating measurable metrics',
        'To replace all manual testing with automation',
        'To reduce the number of developers needed'
      ],
      correctAnswer: 1
    },
    {
      question: 'According to the syllabus, when does the GQM approach NOT always fit the performance testing process?',
      options: [
        'When testing web applications',
        'When some metrics represent system health and are not directly linked to specific goals',
        'When using automated testing tools',
        'When testing mobile applications'
      ],
      correctAnswer: 1
    },
    {
      question: 'Why might additional measurements and metrics be needed after capturing initial measurements?',
      options: [
        'To justify the testing budget',
        'To understand true performance levels and determine where corrective actions are needed',
        'To impress stakeholders with more data',
        'To extend the testing timeline'
      ],
      correctAnswer: 1
    },
    {
      question: 'In section 2.2 on Aggregating Results, what is the PRIMARY purpose of aggregating performance metrics?',
      options: [
        'To reduce data storage requirements',
        'To understand and express metrics in a way that accurately conveys the total picture of system performance',
        'To simplify report generation for management',
        'To hide poor performance results'
      ],
      correctAnswer: 1
    },
    {
      question: 'Why is drawing conclusions from detailed-level performance metrics alone particularly difficult for business stakeholders?',
      options: [
        'Business stakeholders lack technical knowledge',
        'Detailed metrics do not show the "big picture" and trends that stakeholders need to understand system performance',
        'Detailed metrics are always incorrect',
        'Business stakeholders prefer graphical reports only'
      ],
      correctAnswer: 1
    },
    {
      question: 'What are the three key benefits of aggregating performance metrics according to section 2.2?',
      options: [
        'Reduced costs, faster testing, and fewer resources needed',
        'Stakeholders can see big picture status, performance trends can be identified, and metrics can be reported understandably',
        'More test cases, better automation, and improved code quality',
        'Simpler tools, less training needed, and quicker deployments'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is the "probe effect" in performance testing as described in section 2.3?',
      options: [
        'The effect of using monitoring probes in hardware',
        'The impact that metrics collection effort has on system performance being measured',
        'A type of performance testing tool',
        'The process of debugging performance issues'
      ],
      correctAnswer: 1
    },
    {
      question: 'According to section 2.3, what are the three key sources of performance metrics?',
      options: [
        'Developers, testers, and managers',
        'Performance Test Tools, Performance Monitoring Tools, and Log Analysis Tools',
        'Hardware, software, and network',
        'Requirements, design documents, and code'
      ],
      correctAnswer: 1
    },
    {
      question: 'How do performance test tools vary in their presentation of metrics according to the syllabus?',
      options: [
        'All tools present metrics identically',
        'Tools vary in number of metrics shown, display format (text vs. graphical/dashboard), and customization capabilities',
        'Only expensive tools show metrics graphically',
        'Text-based tools are always better than graphical tools'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is a key purpose of Performance Monitoring Tools beyond supplementing performance test tool reporting?',
      options: [
        'To replace performance test tools entirely',
        'To monitor system performance ongoing, alert administrators to lowered performance, and detect suspicious behavior like DoS attacks',
        'To write test scripts automatically',
        'To generate code coverage reports'
      ],
      correctAnswer: 1
    },
    {
      question: 'What do Log Analysis Tools provide that complements other performance metrics sources?',
      options: [
        'Real-time user interface testing',
        'Scanning of server logs to compile metrics and create graphical charts',
        'Automated code refactoring',
        'Database schema optimization'
      ],
      correctAnswer: 1
    },
    {
      question: 'In section 2.4, why is performance testing described as often lacking well-defined test oracles compared to functional testing?',
      options: [
        'Performance testing tools are not mature',
        'Stakeholders are notoriously bad at articulating performance requirements, and analysts/owners are bad at eliciting them',
        'Performance testing is a new discipline',
        'Functional testing is easier than performance testing'
      ],
      correctAnswer: 1
    },
    {
      question: 'According to section 2.4, why can initial raw performance test results be misleading?',
      options: [
        'Testing tools always produce errors',
        'Performance failures can be hidden beneath apparently good overall results; e.g., low resource utilization but unacceptable throughput',
        'Raw results are never accurate',
        'Only aggregated results matter'
      ],
      correctAnswer: 1
    },
    {
      question: 'In the example from section 2.4, what scenario demonstrates hidden performance failures?',
      options: [
        'High CPU usage with fast response times',
        'Resource utilization well under 75% but throughput/response time an order of magnitude too slow',
        'High memory usage with many concurrent users',
        'Network latency causing database timeouts'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which of the following technical environment metrics would be MOST relevant for IoT (Internet-of-Things) systems?',
      options: [
        'Page load times and browser compatibility',
        'Battery consumption, network bandwidth in constrained environments, and resource utilization in embedded contexts',
        'Desktop application response times',
        'Mainframe batch processing times'
      ],
      correctAnswer: 1
    },
    {
      question: 'For a web-based application, which combination of metrics from the technical environment category would be most comprehensive?',
      options: [
        'Only server CPU and memory',
        'Response time per transaction/user, page load times, throughput rates, network bandwidth, and server resource utilization',
        'Just database query times',
        'Only network latency measurements'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is "scope of usage" as a Business Environment metric?',
      options: [
        'The number of lines of code in the application',
        'The percentage of global or national users conducting tasks at a given time',
        'The physical location of servers',
        'The number of developers on the team'
      ],
      correctAnswer: 1
    },
    {
      question: 'Why is "timing of usage" (e.g., orders processed during peak load times) an important Business Environment metric?',
      options: [
        'It determines office hours for the development team',
        'It helps understand system behavior under real-world usage patterns and peak demand periods',
        'It measures employee productivity',
        'It tracks project timeline adherence'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which statement best describes why "concurrency of usage" differs from "scope of usage" as business metrics?',
      options: [
        'They measure the same thing',
        'Concurrency measures simultaneous users performing tasks; scope measures total user population percentage active at any time',
        'Concurrency is only for technical teams',
        'Scope is only for financial reporting'
      ],
      correctAnswer: 1
    },
    {
      question: 'In the Operational Environment, why is "system restoration time from backup" a critical metric?',
      options: [
        'It measures developer efficiency',
        'It indicates disaster recovery capability and business continuity readiness',
        'It tracks backup storage costs',
        'It measures network speed'
      ],
      correctAnswer: 1
    },
    {
      question: 'What makes "alerts and warnings timing" an important operational metric?',
      options: [
        'It tracks how many emails administrators receive',
        'System must issue alerts/warnings quickly enough for timely response to prevent or minimize service degradation',
        'It measures log file sizes',
        'It determines holiday schedules'
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

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
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
            {questions[currentQuestion].options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === questions[currentQuestion].correctAnswer;
              const showCorrect = selectedAnswer !== null && isCorrect && selectedAnswer !== questions[currentQuestion].correctAnswer;
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className={`answer-button ${
                    isSelected ? 'selected' : ''
                  } ${showCorrect ? 'correct-answer' : ''}`}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              );
            })}
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
                  : '✗ Incorrect - The correct answer is highlighted in green'}
              </p>
              <div className="navigation-buttons">
                <button 
                  onClick={handlePreviousQuestion} 
                  className="prev-button"
                  disabled={currentQuestion === 0}
                >
                  Previous Question
                </button>
                <button onClick={handleNextQuestion} className="next-button">
                  {currentQuestion + 1 === questions.length
                    ? 'Show Results'
                    : 'Next Question'}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizApp;
