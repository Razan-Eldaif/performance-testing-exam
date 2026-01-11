# performance-testing-exam

## ISTQB Performance Testing Quiz App

An interactive React-based quiz application for testing knowledge of ISTQB Performance Testing concepts.

### Features

- **10 ISTQB Performance Testing Questions**: Multiple-choice questions covering key concepts like load testing, stress testing, performance metrics, and more
- **Interactive UI**: Clean, user-friendly interface with dynamic question rendering
- **Answer Selection**: Easy-to-use radio button interface for selecting answers
- **Progress Tracking**: Visual progress bar and question counter
- **Navigation**: Previous/Next buttons to navigate between questions
- **Score Calculation**: Automatic scoring when quiz is submitted
- **Results Display**: Shows final score and percentage
- **Performance Feedback**: Contextual messages based on quiz performance
- **Answer Review**: Detailed review showing correct and incorrect answers
- **Restart Functionality**: Option to retake the quiz

### File Structure

```
src/
└── QuizApp.jsx    # Main React component containing the quiz application
```

### Usage

The `QuizApp.jsx` file is a self-contained React component that can be integrated into any React application.

To use it in a React project:

1. Import the component:
```jsx
import QuizApp from './src/QuizApp';
```

2. Use it in your app:
```jsx
function App() {
  return <QuizApp />;
}
```

### Quiz Content

The quiz covers the following ISTQB Performance Testing topics:
- Performance testing goals and objectives
- Types of performance testing (load, stress, spike, endurance)
- Performance metrics (response time, throughput, latency)
- Key Performance Indicators (KPIs)
- Performance bottlenecks
- Performance testing tools

### Component Details

- **State Management**: Uses React hooks (useState) for managing quiz state
- **Styling**: Inline styles for easy portability (no external CSS dependencies)
- **Responsive Design**: Works on various screen sizes
- **No External Dependencies**: Only requires React (no additional libraries needed)