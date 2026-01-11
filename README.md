# ISTQB Performance Testing Quiz

A React-based interactive quiz application for ISTQB Performance Testing concepts.

## Features

- 30 comprehensive multiple-choice questions based on ISTQB Performance Testing Foundation Level Syllabus (Chapters 1 & 2)
- Chapter 1 questions (20): Principles & Concepts, Types of Performance Testing, Testing Types, Load Generation, and Common Failures
- Chapter 2 questions (10): Performance Measurement Fundamentals, Metrics Collection, Result Aggregation, and Key Sources of Metrics
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

## Quiz Topics Covered (Based on ISTQB Syllabus Chapters 1 & 2)

### Chapter 1: Basic Concepts (20 Questions)

**1.1 Principles and Concepts (PTFL-1.1.1)**
- ISO 25010 Performance Efficiency sub-characteristics (Time Behavior, Resource Utilization, Capacity)
- Performance testing principles and their application

**1.2 Types of Performance Testing (PTFL-1.2.1)**
- Load Testing, Stress Testing, Spike Testing, Scalability Testing
- Endurance Testing, Concurrency Testing, Capacity Testing
- Distinctions between different performance testing types

**1.3 Testing Types in Performance Testing (PTFL-1.3.1)**
- Static testing activities (reviews of requirements, architecture, code)
- Dynamic testing across different test levels (unit, integration, system, acceptance)

**1.4 The Concept of Load Generation (PTFL-1.4.1)**
- Load generation via UI, Crowds, API, and Captured Communication Protocols
- Advantages and trade-offs of different load generation approaches

**1.5 Common Failures and Their Causes (PTFL-1.5.1)**
- Slow response scenarios and their underlying causes
- Degraded response over time (memory leaks, disk fragmentation)
- Inadequate error handling under load
- Resource saturation and capacity issues

### Chapter 2: Performance Measurement Fundamentals (10 Questions)

**2.1 Typical Metrics Collected (PTFL-2.1.1)**
- Understanding why performance metrics are essential
- Response time, throughput, and resource utilization metrics
- Risks of undertaking testing without defined metrics

**2.2 Aggregating Results (PTFL-2.2.1)**
- Why results from performance testing are aggregated
- Identifying patterns and trends from aggregated data
- Statistical measures derived from multiple test runs

**2.3 Key Sources of Performance Metrics (PTFL-2.3.1)**
- System under test as a metrics source
- Monitoring tools and application logs
- Understanding performance tool outputs

**2.4 Typical Results (PTFL-2.4.1)**
- Baseline performance measures for comparison
- Evaluation criteria for acceptable vs unacceptable performance
- Importance of measurable performance requirements

## Technologies Used

- React 18.2.0
- React DOM 18.2.0
- React Scripts 5.0.1

## License

This project is open source and available for educational purposes.