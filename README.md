# ISTQB Performance Testing Quiz

A React-based interactive quiz application for ISTQB Performance Testing concepts.

## Features

- 10 multiple-choice questions covering ISTQB Performance Testing topics
- Instant feedback on answers (correct/incorrect)
- Final score calculation with percentage
- Modern, responsive UI design
- Built with React 18 and Create React App

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Razan-Eldaif/performance-testing-exam.git
cd performance-testing-exam
```

2. Install dependencies:
```bash
npm install
```

### Troubleshooting Installation Issues

If you encounter errors during `npm install`, try these solutions:

**1. Check Node.js version:**
```bash
node --version
```
Make sure you have Node.js version 14.0.0 or higher. If not, download the latest LTS version from [nodejs.org](https://nodejs.org/)

**2. Clear npm cache:**
```bash
npm cache clean --force
npm install
```

**3. Delete node_modules and reinstall:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**4. Use a different npm registry (if you're behind a firewall or have network issues):**
```bash
npm config set registry https://registry.npmjs.org/
npm install
```

**5. Try using npm ci (for clean install from package.json):**
```bash
npm ci
```

## Running the Application

Start the development server:
```bash
npm start
```

The app will automatically open in your browser at [http://localhost:3000](http://localhost:3000)

## Building for Production

To create a production build:
```bash
npm run build
```

The optimized files will be in the `build/` directory.

## Quiz Topics Covered

- Performance testing fundamentals
- Load testing vs. Stress testing
- Response time and throughput
- Scalability testing
- Performance bottlenecks
- Common performance testing tools (e.g., JMeter)
- Performance metrics and measurements

## Project Structure

```
performance-testing-exam/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── index.js           # Application entry point
│   ├── QuizApp.jsx        # Main quiz component
│   └── QuizApp.css        # Quiz styling
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## Technologies Used

- React 18.2.0
- React DOM 18.2.0
- React Scripts 5.0.1

## License

This project is open source and available for educational purposes.