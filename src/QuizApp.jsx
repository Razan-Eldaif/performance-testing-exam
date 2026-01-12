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
        'Time Behavior, Throughput, and Resource Utilization',
        'Resource Efficiency, Time Utilization, and Capacity',
        'Time Behavior, Resource Allocation, and Throughput Capacity'
      ],
      correctAnswer: 0
    },
    {
      question: 'What is the primary focus of endurance testing in performance testing?',
      options: [
        'Verifying system stability and detecting memory leaks over an operational time frame',
        'Verifying system recovery time and detecting resource exhaustion over extended periods',
        'Verifying system load handling and detecting capacity issues over time',
        'Verifying system stress resistance and detecting performance degradation over time'
      ],
      correctAnswer: 0
    },
    {
      question: 'Which type of performance testing focuses on the ability of a system to respond correctly to sudden bursts of peak loads and return to a steady state?',
      options: [
        'Load Testing with burst patterns',
        'Stress Testing with intermittent peaks',
        'Spike Testing',
        'Surge Testing with load variations'
      ],
      correctAnswer: 2
    },
    {
      question: 'In the context of load generation, which approach involves capturing user interaction at the communications protocol level and replaying scripts to simulate large numbers of users?',
      options: [
        'Load Generation via Protocol-based Interface Simulation',
        'Load Generation using Captured Communication Protocols',
        'Load Generation via User Interface Protocol Replay',
        'Load Generation using Application Protocol Interface'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is the main objective of capacity testing?',
      options: [
        'To determine the maximum number of users and transactions a system will support while meeting performance objectives',
        'To determine how many users and transactions a system will support while meeting stated performance objectives',
        'To determine the system capacity for users and transactions before performance degrades',
        'To determine optimal user and transaction volumes that maintain performance objectives'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which static testing activity is particularly critical for performance testing because many performance defects are introduced in the architecture and design phase?',
      options: [
        'Review of architecture, database schemas, and requirements focusing on performance aspects',
        'Review of requirements with focus on performance aspects, database schemas, and system/network architecture',
        'Review of system architecture, performance requirements, and database design specifications',
        'Review of performance criteria, architectural documents, and schema definitions'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is a common cause of "degraded response over time" failure mode in performance testing?',
      options: [
        'Memory leaks, database growth, and disk fragmentation',
        'Memory exhaustion, disk space reduction, and data accumulation',
        'Memory leaks, disk fragmentation, and unexpected database growth',
        'Resource depletion, storage fragmentation, and database expansion'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which performance testing principle states that tests must yield results that are understandable and can be readily compared to stakeholder expectations?',
      options: [
        'Tests must yield comparable and understandable results for stakeholder evaluation',
        'Tests must produce results that stakeholders can understand and compare to expectations',
        'Tests must yield results that are both understandable and can be readily compared to stakeholder expectations',
        'Tests must generate understandable results readily comparable to stakeholder criteria'
      ],
      correctAnswer: 2
    },
    {
      question: 'What is the primary difference between concurrency testing and load testing?',
      options: [
        'Concurrency testing evaluates simultaneous actions at the same time, while load testing evaluates increasing anticipated load levels',
        'Concurrency testing focuses on simultaneous actions occurring at the same time, while load testing focuses on increasing levels of anticipated loads',
        'Concurrency testing examines concurrent user actions, while load testing examines progressive load increases',
        'Concurrency testing assesses simultaneous transactions, while load testing assesses graduated load patterns'
      ],
      correctAnswer: 1
    },
    {
      question: "In scalability testing, what is the main objective when determining the system's ability to grow?",
      options: [
        'To determine if the system can meet future efficiency requirements without violating current performance requirements',
        'To assess whether the system meets future performance needs while maintaining current efficiency standards',
        'To evaluate if future efficiency requirements can be met without breaching existing performance criteria',
        'To verify that future performance requirements are achievable without compromising present efficiency levels'
      ],
      correctAnswer: 0
    },
    {
      question: 'Which load generation approach is MOST suitable when testing needs to be reproducible, precise, and less sensitive to UI changes?',
      options: [
        'Load Generation using Protocol Communication Capture',
        'Load Generation via Captured Protocol Communication',
        'Load Generation using Captured Communication Protocols',
        'Load Generation through Protocol-level Capture'
      ],
      correctAnswer: 2
    },
    {
      question: 'What is a typical cause of "slow response under moderate-to-heavy load levels" even when loads are within normal expected ranges?',
      options: [
        'Resource saturation and varying background system loads',
        'Saturation of one or more resources and varying background loads',
        'Resource exhaustion and fluctuating background processing',
        'System resource limitations and variable background workloads'
      ],
      correctAnswer: 1
    },
    {
      question: 'According to the ISTQB syllabus, when should performance testing start in the development lifecycle?',
      options: [
        'As early as possible, including unit testing using profiling and dynamic analysis tools',
        'As soon as possible, including during unit testing using profiling and dynamic analysis',
        'At the earliest opportunity, including unit-level testing with profiling and analysis',
        'From the beginning, including unit tests using profiling and dynamic code analysis'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which quality sub-characteristic evaluates if the system can respond to user inputs within a specified time under specified conditions?',
      options: [
        'Response Time Behavior',
        'Time Behavior',
        'Temporal Behavior',
        'Time Response'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is the primary advantage of using Load Generation via the Application Programming Interface (API) compared to UI-based load generation?',
      options: [
        'Less sensitive to UI changes and enables simulation of more users with available resources',
        'It is less sensitive to UI changes and allows more users to be simulated',
        'Reduced UI dependency and increased user simulation capacity',
        'Lower UI sensitivity and higher user simulation capability'
      ],
      correctAnswer: 1
    },
    {
      question: 'In performance testing, what does "inadequate or graceless error handling under heavy or over-limit load" typically indicate?',
      options: [
        'Insufficient resource pools, undersized queues, and rapid timeout configurations',
        'Inadequate resource allocation, limited queue capacity, and quick timeout settings',
        'Insufficient resource pools, undersized queues and stacks, and too rapid time-out settings',
        'Limited resource availability, small queue sizes, and aggressive timeout parameters'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which testing type should be performed when evaluating if functional suitability and usability are impacted under conditions of load?',
      options: [
        'Dynamic performance testing revealing load-specific characteristic impacts',
        'Dynamic performance testing that may reveal load-specific issues impacting those characteristics',
        'Performance testing under load conditions to expose functional and usability impacts',
        'Load-based performance testing to identify characteristic degradation'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is the main purpose of using profiling information during unit testing in performance testing?',
      options: [
        'To identify potential bottlenecks and evaluate resource utilization',
        'To detect possible performance bottlenecks and assess resource usage',
        'To locate potential performance constraints and measure resource consumption',
        'To discover likely bottlenecks and analyze resource allocation'
      ],
      correctAnswer: 0
    },
    {
      question: 'Which performance testing principle emphasizes that tests must be reproducible?',
      options: [
        'Tests must obtain statistically identical results within a specified tolerance by repeating tests on an unchanged system',
        'Tests must produce statistically equivalent results within tolerance by re-executing on stable systems',
        'Tests must achieve statistically similar results within defined variance through repetition on unchanged systems',
        'Tests must yield statistically consistent results within acceptable limits when repeated on unmodified systems'
      ],
      correctAnswer: 0
    },
    {
      question: 'In the context of performance testing, what does Resource Utilization as a quality sub-characteristic focus on?',
      options: [
        'The allocation and usage of limited system resources like RAM when identified as a risk',
        'The assignment and consumption of constrained resources such as memory when recognized as risks',
        'The distribution and use of finite system resources like memory when determined as risk factors',
        'The allocation and employment of restricted resources including RAM when classified as risks'
      ],
      correctAnswer: 0
    },
    {
      question: 'According to ISTQB, which of the following is a key risk if performance metrics are not properly defined before testing?',
      options: [
        'Performance test results may be evaluated based on subjective opinion rather than measurable criteria',
        'Test result evaluation may rely on subjective judgment instead of objective measurement standards',
        'Results might be assessed using subjective opinions rather than quantifiable performance criteria',
        'Evaluation of test outcomes could depend on subjective views instead of defined metrics'
      ],
      correctAnswer: 0
    },
    {
      question: 'Why are performance test results typically aggregated rather than analyzed individually?',
      options: [
        'To identify patterns, trends, and statistical measures that individual results cannot reveal',
        'To recognize patterns, tendencies, and statistical indicators not visible in individual results',
        'To detect trends, patterns, and statistical measurements unavailable from single results',
        'To discover patterns, statistical measures, and trends impossible to see individually'
      ],
      correctAnswer: 0
    },
    {
      question: 'Which of the following is a typical metric collected during performance testing?',
      options: [
        'Response time, throughput, and resource utilization',
        'Transaction response time, throughput rates, and system resource usage',
        'Response times, throughput measurements, and resource consumption',
        'Time to respond, transaction throughput, and utilized resources'
      ],
      correctAnswer: 0
    },
    {
      question: 'What is the primary purpose of establishing a baseline set of performance measures?',
      options: [
        'To compare actual test results against defined acceptable and unacceptable performance levels',
        'To evaluate actual results by comparing them to established acceptable and unacceptable thresholds',
        'To assess test results against predetermined acceptable and unacceptable performance criteria',
        'To measure actual outcomes versus defined acceptable and unacceptable performance standards'
      ],
      correctAnswer: 0
    },
    {
      question: 'Which of the following represents a key source of performance metrics during testing?',
      options: [
        'System under test, monitoring tools, and application logs',
        'Test system, performance monitoring utilities, and application log files',
        'System being tested, monitoring applications, and system logs',
        'Target system, monitoring instruments, and application event logs'
      ],
      correctAnswer: 0
    },
    {
      question: 'What risk occurs when performance requirements are not defined in measurable terms?',
      options: [
        'It becomes unknown whether performance levels are acceptable to meet operational objectives',
        'It remains unclear if performance levels meet operational objective requirements',
        'It is uncertain whether performance adequacy satisfies operational goals',
        'It cannot be determined if performance levels achieve operational targets'
      ],
      correctAnswer: 0
    },
    {
      question: 'In performance testing, why is it important to understand which measurements and metrics are needed before starting testing?',
      options: [
        'To prevent undertaking performance testing without clear goals and evaluation criteria',
        'To avoid conducting performance testing lacking defined objectives and assessment standards',
        'To stop initiating performance testing absent clear targets and evaluation benchmarks',
        'To prevent beginning performance testing without established goals and measurement criteria'
      ],
      correctAnswer: 0
    },
    {
      question: 'What is a consequence of not being able to identify trends that predict lower performance levels?',
      options: [
        'Potential performance degradation may go undetected until it impacts users',
        'Possible performance decline could remain hidden until affecting end users',
        'Performance deterioration might stay unnoticed until user experience is impacted',
        'Performance reduction may go unobserved until users encounter issues'
      ],
      correctAnswer: 0
    },
    {
      question: 'Which statement best describes why understanding performance tool results is critical?',
      options: [
        'Without understanding tool results, performance cannot be accurately evaluated and interpreted',
        'Lacking tool result comprehension prevents accurate performance evaluation and analysis',
        'Absence of tool result understanding impedes precise performance assessment and interpretation',
        'Missing tool result knowledge hinders accurate performance evaluation and examination'
      ],
      correctAnswer: 0
    },
    {
      question: 'What is the relationship between measurements and metrics in performance testing?',
      options: [
        'Metrics are derived from measurements and used to define goals and evaluate results',
        'Metrics originate from measurements and serve to establish objectives and assess outcomes',
        'Metrics stem from measurements and function to set goals and evaluate findings',
        'Metrics are calculated from measurements and employed to define targets and assess results'
      ],
      correctAnswer: 0
    },
    {
      question: 'According to the ISTQB syllabus on collecting performance measurements, why must response time metrics be further defined beyond just measuring response time?',
      options: [
        'To be meaningful and actionable, they must be defined in context such as time of day, concurrent users, and data volume',
        'For meaningfulness and actionability, they require contextual definition including timing, user concurrency, and data quantities',
        'To achieve significance and usability, they need context specification like time periods, simultaneous users, and data amounts',
        'For relevance and applicability, they must be contextualized with factors like time, concurrent access, and data scale'
      ],
      correctAnswer: 0
    },
    {
      question: 'In what ways do performance metrics vary based on the business context versus the operational context?',
      options: [
        'Business context focuses on processes and stakeholder expectations; operational context focuses on technology usage',
        'Business context emphasizes processes and stakeholder needs; operational context emphasizes technology application',
        'Business context centers on workflows and stakeholder requirements; operational context centers on technology deployment',
        'Business context addresses processes and stakeholder demands; operational context addresses technology implementation'
      ],
      correctAnswer: 0
    },
    {
      question: 'Why would the metrics chosen for an international e-commerce website differ significantly from those for an embedded medical device system?',
      options: [
        'Different technical environments, business contexts, and test objectives require context-appropriate metrics',
        'Varying technical settings, business situations, and testing goals demand contextually-suitable metrics',
        'Distinct technical platforms, business scenarios, and test purposes necessitate context-specific metrics',
        'Diverse technical infrastructures, business contexts, and testing objectives need context-relevant metrics'
      ],
      correctAnswer: 0
    },
    {
      question: 'Which of the following is an example of a performance metric from the Technical Environment category?',
      options: [
        'Response time per transaction, resource utilization (CPU, memory), and network latency',
        'Transaction response time, system resource usage (processor, memory), and network delay',
        'Per-transaction response time, resource consumption (CPU, RAM), and network lag',
        'Response time by transaction, resource allocation (CPU, memory), and network latency'
      ],
      correctAnswer: 0
    },
    {
      question: 'From a Business Environment perspective, what does "throughput of data, transactions, and other units of work" measure?',
      options: [
        'Quantities like orders processed per hour or data rows added per minute',
        'Quantities such as hourly orders processed or minute-by-minute data rows added',
        'Amounts like orders per hour processed or data rows per minute added',
        'Volumes such as hourly processed orders or per-minute added data rows'
      ],
      correctAnswer: 0
    },
    {
      question: 'What is an example of an Operational Environment performance metric?',
      options: [
        'Time required for environment start-up, backups, shutdown, and system restoration',
        'Duration needed for environment startup, backup operations, shutdown, and system recovery',
        'Time necessary for system initialization, backup processes, termination, and restoration',
        'Period required for environment launching, backing up, shutting down, and system restoring'
      ],
      correctAnswer: 0
    },
    {
      question: 'Which metric would be most relevant when evaluating Service Level Agreement (SLA) compliance in the Business Environment?',
      options: [
        'SLA violations per unit of time and business process efficiency',
        'SLA breaches per time unit and business workflow efficiency',
        'SLA non-compliance per time period and business process effectiveness',
        'SLA contraventions per time interval and business operation efficiency'
      ],
      correctAnswer: 0
    },
    {
      question: 'In section 2.1.3, why is collecting MORE metrics than required considered problematic?',
      options: [
        'Each metric requires consistent collection and reporting effort; excessive metrics waste resources without adding value',
        'Every metric demands consistent gathering and reporting work; surplus metrics consume resources without benefit',
        'All metrics need consistent collection and reporting; extra metrics expend resources without value addition',
        'Each metric necessitates consistent capture and reporting; redundant metrics use resources without providing value'
      ],
      correctAnswer: 0
    },
    {
      question: 'What is the Goal-Question-Metric (GQM) approach designed to achieve in performance testing?',
      options: [
        'To align metrics with performance goals by establishing goals, asking questions about achievement, and associating measurable metrics',
        'To synchronize metrics with performance objectives by setting goals, posing achievement questions, and linking quantifiable metrics',
        'To correlate metrics with performance targets by defining goals, questioning achievement, and connecting measurable metrics',
        'To match metrics with performance aims by creating goals, inquiring about achievement, and attaching measurable metrics'
      ],
      correctAnswer: 0
    },
    {
      question: 'According to the syllabus, when does the GQM approach NOT always fit the performance testing process?',
      options: [
        'When some metrics represent system health and are not directly linked to specific goals',
        'When certain metrics indicate system health and lack direct connection to particular goals',
        'When particular metrics reflect system health and are not explicitly tied to specific goals',
        'When specific metrics show system health and are not immediately connected to defined goals'
      ],
      correctAnswer: 0
    },
    {
      question: 'Why might additional measurements and metrics be needed after capturing initial measurements?',
      options: [
        'To understand true performance levels and determine where corrective actions are needed',
        'To comprehend actual performance levels and identify where remedial actions are required',
        'To grasp genuine performance levels and establish where corrective measures are necessary',
        'To perceive real performance levels and ascertain where corrective steps are needed'
      ],
      correctAnswer: 0
    },
    {
      question: 'In section 2.2 on Aggregating Results, what is the PRIMARY purpose of aggregating performance metrics?',
      options: [
        'To understand and express metrics in a way that accurately conveys the total picture of system performance',
        'To comprehend and communicate metrics in a manner that precisely represents the complete system performance picture',
        'To grasp and present metrics in a way that correctly portrays the overall system performance view',
        'To interpret and articulate metrics in a fashion that accurately depicts the entire system performance scenario'
      ],
      correctAnswer: 0
    },
    {
      question: 'Why is drawing conclusions from detailed-level performance metrics alone particularly difficult for business stakeholders?',
      options: [
        'Detailed metrics do not show the "big picture" and trends that stakeholders need to understand system performance',
        'Granular metrics fail to display the overall view and patterns that stakeholders require for system performance understanding',
        'Specific metrics do not present the comprehensive picture and tendencies that stakeholders need for performance comprehension',
        'Detailed metrics lack the macro perspective and trends that stakeholders necessitate to grasp system performance'
      ],
      correctAnswer: 0
    },
    {
      question: 'What are the three key benefits of aggregating performance metrics according to section 2.2?',
      options: [
        'Stakeholders can see big picture status, performance trends can be identified, and metrics can be reported understandably',
        'Stakeholders view overall status, performance patterns are identifiable, and metrics are reportable comprehensibly',
        'Stakeholders observe holistic status, performance tendencies are recognizable, and metrics are communicable clearly',
        'Stakeholders perceive macro status, performance trends are detectable, and metrics are presentable intelligibly'
      ],
      correctAnswer: 0
    },
    {
      question: 'What is the "probe effect" in performance testing as described in section 2.3?',
      options: [
        'The impact that metrics collection effort has on system performance being measured',
        'The influence that metric gathering activities have on the system performance under measurement',
        'The effect that metrics collection work has on measured system performance',
        'The impact that metric capture efforts have on system performance under evaluation'
      ],
      correctAnswer: 0
    },
    {
      question: 'According to section 2.3, what are the three key sources of performance metrics?',
      options: [
        'Performance Test Tools, Performance Monitoring Tools, and Log Analysis Tools',
        'Performance Testing Tools, Performance Monitoring Applications, and Log Analysis Utilities',
        'Performance Test Instruments, Performance Monitoring Solutions, and Log Analysis Tools',
        'Performance Testing Utilities, Performance Monitoring Tools, and Log Analysis Applications'
      ],
      correctAnswer: 0
    },
    {
      question: 'How do performance test tools vary in their presentation of metrics according to the syllabus?',
      options: [
        'Tools vary in number of metrics shown, display format (text vs. graphical/dashboard), and customization capabilities',
        'Tools differ in metrics quantity displayed, presentation format (textual vs. graphical/dashboard), and customization options',
        'Tools diverge in shown metrics count, display style (text vs. graphical/dashboard), and customization features',
        'Tools vary in displayed metrics volume, format type (text vs. graphical/dashboard), and customization abilities'
      ],
      correctAnswer: 0
    },
    {
      question: 'What is a key purpose of Performance Monitoring Tools beyond supplementing performance test tool reporting?',
      options: [
        'To monitor system performance ongoing, alert administrators to lowered performance, and detect suspicious behavior like DoS attacks',
        'To continuously monitor system performance, notify administrators of performance degradation, and identify suspicious activities like DoS attacks',
        'To observe system performance continuously, alert administrators about performance reduction, and detect suspicious actions like DoS attacks',
        'To track system performance continuously, warn administrators of performance decreases, and discover suspicious behavior like DoS attacks'
      ],
      correctAnswer: 0
    },
    {
      question: 'What do Log Analysis Tools provide that complements other performance metrics sources?',
      options: [
        'Scanning of server logs to compile metrics and create graphical charts',
        'Server log scanning to aggregate metrics and generate graphical visualizations',
        'Analysis of server logs to collect metrics and produce graphical representations',
        'Examination of server logs to gather metrics and develop graphical displays'
      ],
      correctAnswer: 0
    },
    {
      question: 'In section 2.4, why is performance testing described as often lacking well-defined test oracles compared to functional testing?',
      options: [
        'Stakeholders are notoriously bad at articulating performance requirements, and analysts/owners are bad at eliciting them',
        'Stakeholders are notably poor at expressing performance requirements, and analysts/owners are inadequate at extracting them',
        'Stakeholders are famously weak at communicating performance requirements, and analysts/owners are ineffective at obtaining them',
        'Stakeholders are recognized as poor at stating performance requirements, and analysts/owners are deficient at deriving them'
      ],
      correctAnswer: 0
    },
    {
      question: 'According to section 2.4, why can initial raw performance test results be misleading?',
      options: [
        'Performance failures can be hidden beneath apparently good overall results; e.g., low resource utilization but unacceptable throughput',
        'Performance issues may be concealed under seemingly acceptable aggregate results; e.g., minimal resource usage but inadequate throughput',
        'Performance problems can be masked by apparently satisfactory general results; e.g., reduced resource consumption but poor throughput',
        'Performance defects may hide beneath seemingly good total results; e.g., low resource employment but insufficient throughput'
      ],
      correctAnswer: 0
    },
    {
      question: 'In the example from section 2.4, what scenario demonstrates hidden performance failures?',
      options: [
        'Resource utilization well under 75% but throughput/response time an order of magnitude too slow',
        'Resource usage significantly below 75% but throughput/response time an order of magnitude excessively slow',
        'Resource consumption well beneath 75% but throughput/response time an order of magnitude too sluggish',
        'Resource allocation substantially under 75% but throughput/response time an order of magnitude overly slow'
      ],
      correctAnswer: 0
    },
    {
      question: 'Which of the following technical environment metrics would be MOST relevant for IoT (Internet-of-Things) systems?',
      options: [
        'Battery consumption, network bandwidth in constrained environments, and resource utilization in embedded contexts',
        'Power consumption, network capacity in limited environments, and resource usage in embedded scenarios',
        'Energy consumption, network bandwidth in restricted environments, and resource allocation in embedded situations',
        'Battery usage, network throughput in constrained environments, and resource employment in embedded contexts'
      ],
      correctAnswer: 0
    },
    {
      question: 'For a web-based application, which combination of metrics from the technical environment category would be most comprehensive?',
      options: [
        'Response time per transaction/user, page load times, throughput rates, network bandwidth, and server resource utilization',
        'Transaction/user response time, page loading times, throughput measurements, network capacity, and server resource usage',
        'Per-transaction/user response time, page load durations, throughput metrics, network bandwidth, and server resource consumption',
        'Response times per transaction/user, page loading periods, throughput rates, network capacity, and server resource allocation'
      ],
      correctAnswer: 0
    },
    {
      question: 'What is "scope of usage" as a Business Environment metric?',
      options: [
        'The percentage of global or national users conducting tasks at a given time',
        'The proportion of worldwide or national users performing tasks at a specific time',
        'The fraction of global or national users executing tasks at a particular time',
        'The share of international or national users undertaking tasks at a given moment'
      ],
      correctAnswer: 0
    },
    {
      question: 'Why is "timing of usage" (e.g., orders processed during peak load times) an important Business Environment metric?',
      options: [
        'It helps understand system behavior under real-world usage patterns and peak demand periods',
        'It assists in comprehending system behavior under actual usage patterns and maximum demand periods',
        'It aids in understanding system conduct under practical usage patterns and peak demand intervals',
        'It facilitates understanding system performance under realistic usage patterns and high demand periods'
      ],
      correctAnswer: 0
    },
    {
      question: 'Which statement best describes why "concurrency of usage" differs from "scope of usage" as business metrics?',
      options: [
        'Concurrency measures simultaneous users performing tasks; scope measures total user population percentage active at any time',
        'Concurrency gauges concurrent users executing tasks; scope measures overall user base percentage active at given times',
        'Concurrency assesses simultaneous users conducting tasks; scope measures aggregate user population percentage active at any moment',
        'Concurrency evaluates concurrent users performing tasks; scope measures entire user base percentage active at specific times'
      ],
      correctAnswer: 0
    },
    {
      question: 'In the Operational Environment, why is "system restoration time from backup" a critical metric?',
      options: [
        'It indicates disaster recovery capability and business continuity readiness',
        'It signifies disaster recovery capacity and business continuity preparedness',
        'It demonstrates disaster recovery ability and business continuity readiness',
        'It reflects disaster recovery capability and business continuity preparation'
      ],
      correctAnswer: 0
    },
    {
      question: 'What makes "alerts and warnings timing" an important operational metric?',
      options: [
        'System must issue alerts/warnings quickly enough for timely response to prevent or minimize service degradation',
        'Systems must generate alerts/warnings rapidly enough for prompt response to avoid or reduce service deterioration',
        'System must produce alerts/warnings swiftly enough for timely response to prevent or lessen service degradation',
        'Systems must emit alerts/warnings fast enough for quick response to avert or minimize service decline'
      ],
      correctAnswer: 0
    },
    {
      question: 'Why is performance testing described as iterative in nature according to ISTQB?',
      options: [
        'Each test iteration provides insights used to correct or optimize application parameters, with next iteration showing results of modifications until objectives are reached',
        'Each test cycle provides information used to adjust application settings, with subsequent cycles showing outcome of adjustments until goals are met',
        'Each test provides insights used to modify or enhance application parameters, with following test displaying results of changes until objectives are achieved',
        'Each test round provides feedback used to correct application configurations, with next round showing effects of corrections until targets are met'
      ],
      correctAnswer: 0
    },
    {
      question: 'In sequential development models, at which phase should performance goals first be defined as acceptance criteria?',
      options: [
        'Analysis and Design phase',
        'Requirements phase',
        'Concept phase',
        'Planning phase'
      ],
      correctAnswer: 2
    },
    {
      question: 'What type of performance risk is specific to single computer systems?',
      options: [
        'Network bottlenecks and bandwidth limitations',
        'Critical workflows through unreliable remote servers',
        'Excessive resource consumption including memory leaks and slow storage subsystems',
        'Poor database design and inadequate capacity on servers'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which performance risk is unique to distributed systems compared to multi-tier systems?',
      options: [
        'Inefficient algorithm implementation not utilizing available resources',
        'Critical workflows or dataflows through unreliable or unpredictable remote servers',
        'Poor or non-scalable database design causing degradation',
        'Network bottlenecks and inadequate bandwidth on servers'
      ],
      correctAnswer: 1
    },
    {
      question: 'In multi-tier systems, which performance risk is additional to those found in single computer systems?',
      options: [
        'Memory leaks and background activities like security software',
        'Inefficient algorithms that do not make use of main memory',
        'Poor or non-scalable database design and network bottlenecks',
        'Disk fragmentation and operating system mismanagement'
      ],
      correctAnswer: 2
    },
    {
      question: 'What is the first step in the performance risk analysis process across the software development lifecycle?',
      options: [
        'Assess identified risks ensuring architecture categories are addressed',
        'Manage risks on ongoing basis to ensure adequate mitigation',
        'Identify risks to product quality focusing on time behavior, resource utilization, and capacity',
        'Take appropriate risk mitigation actions based on risk level'
      ],
      correctAnswer: 2
    },
    {
      question: 'When assessing performance-related risks, what must be evaluated for each identified risk?',
      options: [
        'Overall level of risk in terms of likelihood and impact using clearly defined criteria',
        'Total risk level in terms of probability and consequence using specific criteria',
        'Complete risk level in terms of chance and effect using defined criteria',
        'Full risk level in terms of possibility and result using established criteria'
      ],
      correctAnswer: 0
    },
    {
      question: 'Why must business stakeholders in performance risk analysis have particular awareness of production performance problems?',
      options: [
        'To understand how performance issues in production will actually affect customers, users, the business, and downstream stakeholders',
        'To comprehend how performance problems in production will impact customers, users, business operations, and other stakeholders',
        'To recognize how performance challenges in production will influence customers, users, business, and subsequent stakeholders',
        'To appreciate how performance difficulties in production will affect end users, customers, business processes, and related stakeholders'
      ],
      correctAnswer: 0
    },
    {
      question: 'In sequential development models, what should be verified during the Requirements phase?',
      options: [
        'That system performance goals are defined as acceptance criteria',
        'That the system design reflects the performance requirements',
        'That performance requirements are defined and represent stakeholder needs correctly',
        'That the code is efficient and reflects requirements in terms of performance'
      ],
      correctAnswer: 2
    },
    {
      question: 'What should be verified during the Analysis and Design phase in sequential development?',
      options: [
        'That performance requirements are defined correctly',
        'That the system design reflects the performance requirements',
        'That the code reflects requirements and design in terms of performance',
        'That system performance goals are defined as acceptance criteria'
      ],
      correctAnswer: 1
    },
    {
      question: 'During which testing level in sequential development should performance testing be conducted with hardware, software, procedures and data representative of production environment?',
      options: [
        'System Integration Testing',
        'Acceptance Testing',
        'System Testing',
        'Component Integration Testing'
      ],
      correctAnswer: 2
    },
    {
      question: 'What distinguishes System Integration Testing from System Testing in sequential performance testing activities?',
      options: [
        'System Integration Testing uses simulated interfaces while System Testing uses representative production data',
        'System Integration Testing is conducted with entire system representative of production while System Testing may use simulated interfaces',
        'System Integration Testing validates performance meets acceptance criteria while System Testing conducts system level testing',
        'System Integration Testing includes component integration while System Testing focuses on individual components'
      ],
      correctAnswer: 1
    },
    {
      question: 'Why is test planning particularly important for performance testing?',
      options: [
        'Due to the need for allocation of test environments, test data, tools, human resources, and establishing performance testing scope',
        'Due to the requirement for allocating test infrastructure, test information, tools, personnel, and defining performance test scope',
        'Due to the necessity of assigning test environments, test datasets, tools, resources, and determining performance testing scope',
        'Due to the demand for distributing test systems, test data, tools, staff, and establishing performance test boundaries'
      ],
      correctAnswer: 0
    },
    {
      question: 'During test planning for performance testing, what happens to risks, risk levels and risk status?',
      options: [
        'They are identified once at the beginning and remain fixed throughout',
        'They are revisited and modified as needed to reflect changes in risk conditions',
        'They are assessed at the end of planning and updated before testing',
        'They are analyzed during execution and modified during test closure'
      ],
      correctAnswer: 1
    },
    {
      question: 'What causes "slow response under all load levels" failure mode?',
      options: [
        'Memory leaks, disk fragmentation, and unexpected database growth',
        'Resource saturation, concurrent background loads, and insufficient connection pools',
        'Insufficient resource pools, undersized queues, and inadequate error handling',
        'Bad database design, network latency, and inefficient code or queries'
      ],
      correctAnswer: 3
    },
    {
      question: 'What typically causes "slow response under moderate-to-heavy load" compared to light load?',
      options: [
        'Memory leaks, disk fragmentation, and database growth over time',
        'Bad database design, network latency, and inefficient queries',
        'Insufficient resource pools, undersized queues, and poor error handling',
        'Resource saturation, concurrent background loads, and insufficient capacity'
      ],
      correctAnswer: 3
    },
    {
      question: 'What causes "inadequate or slow error handling under heavy load" failure mode?',
      options: [
        'Resource saturation and concurrent background loads',
        'Memory leaks and unexpected database growth',
        'Insufficient resource pools and undersized queues',
        'Bad database design and network latency'
      ],
      correctAnswer: 2
    },
    {
      question: 'In the four-step performance risk process, what is done after taking appropriate risk mitigation actions?',
      options: [
        'Identify new risks to product quality',
        'Assess the identified risks using defined criteria',
        'Manage risks on ongoing basis to ensure adequate mitigation prior to release',
        'Evaluate overall level of risk in terms of likelihood and impact'
      ],
      correctAnswer: 2
    },
    {
      question: 'What must technical stakeholders understand in performance risk analysis?',
      options: [
        'How performance problems affect customers and downstream stakeholders',
        'The relevant architecture categories and their associated risks',
        'Business processes and customer behavior patterns',
        'Intended usage and business workflows of the system'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which component testing activity is specific to performance in sequential development?',
      options: [
        'Verify that system design reflects performance requirements',
        'Conduct performance testing at component integration level',
        'Conduct component level performance testing',
        'Verify that code is efficient and reflects requirements'
      ],
      correctAnswer: 2
    },
    {
      question: 'At the Coding/Implementation phase, what should be verified for performance?',
      options: [
        'That system design reflects the performance requirements',
        'That performance requirements represent stakeholder needs correctly',
        'That the code is efficient and reflects requirements and design in terms of performance',
        'That system performance goals are defined as acceptance criteria'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which factors are of primary interest to business stakeholders when communicating about performance testing?',
      options: [
        'Connection between product risks and test objectives, cost vs representativeness balance, and test repeatability',
        'Tooling, scripting approaches, load generation techniques, and infrastructure setup details',
        'Protocol selection, architecture considerations, and technical implementation details',
        'Test execution procedures, monitoring configurations, and detailed metrics collection methods'
      ],
      correctAnswer: 0
    },
    {
      question: 'What typical risks should be communicated to business stakeholders regarding performance testing?',
      options: [
        'Infrastructure requirements including hardware, tools, bandwidth, test environments, and key staff dependencies',
        'Protocol compatibility issues, OSI layer mismatches, and technical integration challenges',
        'Code quality concerns, algorithmic efficiency problems, and implementation defects',
        'Monitoring tool limitations, metrics collection accuracy, and reporting format incompatibilities'
      ],
      correctAnswer: 0
    },
    {
      question: 'Which OSI model layers are most commonly used for performance testing protocols?',
      options: [
        'Layer 3 (Network Layer) to Layer 5 (Session Layer)',
        'Layer 5 (Session Layer) to Layer 7 (Application Layer)',
        'Layer 4 (Transport Layer) to Layer 6 (Presentation Layer)',
        'Layer 2 (Data Link Layer) to Layer 4 (Transport Layer)'
      ],
      correctAnswer: 1
    },
    {
      question: 'When testing low-level embedded architectures for performance, which OSI layers are typically most in focus?',
      options: [
        'The upper numbered layers of the OSI model',
        'The middle numbered layers of the OSI model',
        'The application and presentation layers primarily',
        'The lower numbered layers of the OSI model'
      ],
      correctAnswer: 3
    },
    {
      question: 'Which protocols are commonly used for database performance testing?',
      options: [
        'HTTP, HTTPS, and REST protocols',
        'SOAP, JSON, and WSCL protocols',
        'ODBC, JDBC, and vendor-specific protocols',
        'FTP, SMTP, and LDAP protocols'
      ],
      correctAnswer: 2
    },
    {
      question: 'What is the relationship between transaction response time, think time, and elapsed time?',
      options: [
        'Transaction response time minus think time equals elapsed time',
        'Transaction response time multiplied by think time equals elapsed time',
        'Transaction response time plus think time equals elapsed time',
        'Transaction response time divided by think time equals elapsed time'
      ],
      correctAnswer: 2
    },
    {
      question: 'What is the purpose of including think time in simulated transactions?',
      options: [
        'To artificially increase system load and stress test capabilities',
        'To better reflect the timing of real user actions during performance testing',
        'To measure network latency between client and server components',
        'To calculate the total processing time required by the system'
      ],
      correctAnswer: 1
    },
    {
      question: 'In the context of nested transactions, what benefit do they provide during performance testing?',
      options: [
        'They reduce the complexity of test script maintenance and execution',
        'They improve the accuracy of load generation and resource utilization',
        'They enable measurement of both discrete steps and aggregate activities in one test',
        'They simplify the correlation of performance metrics across system components'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which three principal steps are involved in identifying operational profiles?',
      options: [
        'Define objectives, Execute tests, Analyze results',
        'Identify data to gather, Gather data from sources, Evaluate data to construct profiles',
        'Plan testing, Design scenarios, Implement scripts',
        'Collect requirements, Model behaviors, Validate profiles'
      ],
      correctAnswer: 1
    },
    {
      question: 'What types of data are gathered to model operational profiles for user interactions?',
      options: [
        'System architecture diagrams, database schemas, and network topologies',
        'Server configurations, resource allocations, and capacity specifications',
        'User personas and roles, generic tasks performed, and estimated user numbers per role/task',
        'Application code metrics, API endpoints, and protocol specifications'
      ],
      correctAnswer: 2
    },
    {
      question: 'Which sources are valuable for gathering data to construct operational profiles?',
      options: [
        'System logs, performance monitoring tools, and automated test results',
        'Interviews with stakeholders, functional specifications, and requirements documents',
        'Code repositories, build artifacts, and deployment configurations',
        'Network traffic analysis, resource utilization reports, and capacity planning tools'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is a load profile in performance testing?',
      options: [
        'A specification of the activity a system may experience in production using virtual users performing operational profiles over time',
        'A document describing the hardware and software requirements for test execution environments',
        'A chart showing the relationship between system response time and concurrent user load',
        'A plan outlining the sequence of test scenarios to be executed during performance testing'
      ],
      correctAnswer: 0
    },
    {
      question: 'What is the term commonly applied to instances that perform actions in a load profile when those instances are users?',
      options: [
        'Simulated users',
        'Virtual users',
        'Test users',
        'Synthetic users'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which principal information is required to create a realistic and repeatable load profile?',
      options: [
        'Test tool capabilities, script complexity, and execution infrastructure specifications',
        'Performance testing objective, operational profiles, throughput/concurrency issues, and quantity/time distribution',
        'Defect tracking procedures, incident management processes, and reporting requirements',
        'Security protocols, authentication mechanisms, and access control configurations'
      ],
      correctAnswer: 1
    },
    {
      question: 'What does a "ramp-up" load profile pattern involve?',
      options: [
        'Instantaneous changes in load at specific time intervals',
        'Steadily decreasing load over the duration of the test',
        'Steadily increasing load over the duration of the test',
        'Maintaining constant load throughout the entire test period'
      ],
      correctAnswer: 2
    },
    {
      question: 'What characterizes a "step" load profile pattern?',
      options: [
        'Gradually increasing load by adding one user at regular intervals',
        'Gradually decreasing load by removing users at regular intervals',
        'Instantaneous changes in load such as adding many virtual users at once',
        'Maintaining a baseline load that fluctuates randomly within defined boundaries'
      ],
      correctAnswer: 2
    },
    {
      question: 'What type of load profile pattern mimics daily or seasonal business cycles?',
      options: [
        'Ramp-up patterns with linear progression',
        'Ramp-down patterns with linear regression',
        'Step patterns with discrete increments',
        'Predefined distributions matching business volume variations'
      ],
      correctAnswer: 3
    },
    {
      question: 'What performance testing limitation may produce risks according to the ISTQB syllabus?',
      options: [
        'Excessive test coverage and over-instrumentation of the system',
        'External interfaces that cannot be simulated, insufficient load, or inability to monitor servers',
        'Too many virtual users causing system crashes during test execution',
        'Overly detailed operational profiles that are difficult to implement'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which communication protocols are typically used for mobile performance testing?',
      options: [
        'ODBC, JDBC, and database vendor protocols',
        'HTTP, HTTPS, and HTML protocols',
        'TruClient, SMP, and MMS protocols',
        'FTP, IMAP, and POP3 protocols'
      ],
      correctAnswer: 2
    },
    {
      question: 'What is an example of a "background load" in a load profile construction?',
      options: [
        'A gradually increasing number of virtual users performing complex transactions',
        'A step input of virtual users performing operational profile activities over the entire test duration',
        'A varying load pattern that mimics peak business hours and off-peak periods',
        'A decreasing load pattern simulating user logout behavior at end of day'
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
