import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import './App.css'

const Home = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6">
    <h1 className="text-4xl font-bold">Mastering React.js</h1>
    <p className="mt-4 text-lg">React is a JavaScript library used for building user interfaces, especially for single-page applications (SPAs). It was developed by Facebook (Meta) and follows a component-based architecture, allowing developers to create reusable UI components. <br />
   <h3>Why Use React?</h3> 
Component-Based: UI is broken down into reusable components. <br />
Virtual DOM: Improves performance by reducing direct interactions with the real DOM.<br />
Declarative: Makes UI updates predictable and easier to debug.<br />
Fast & Efficient: Uses a one-way data flow for better control over the application state.<br /><br />
<h4>Core Features of React</h4>
✅ JSX – A syntax that lets you write HTML in JavaScript. <br />
✅ State & Props – Manages dynamic data and component communication.<br />
✅ Hooks (useState, useEffect) – Functional approach to handling component logic.
✅ React Router – Enables navigation in SPAs.<br />
✅ Redux/Context API – For managing complex application states.</p>
    <Link to="/study" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg">Start Learning</Link>
  </motion.div>
);

const StudyPlan = () => (
  <motion.div initial={{ x: -50 }} animate={{ x: 0 }} className="p-6">
    <h2 className="text-3xl font-semibold">Study Plan</h2>
    <ul className="list-disc pl-6 mt-4">
      <li>JSX & Components</li>
      <li>Props & State</li>
      <li>Event Handling</li>
      <li>State Management (Context API, Redux)</li>
      <li>Routing with React Router</li>
    </ul>
      <p>1. JSX (JavaScript XML)

JSX allows developers to write HTML-like syntax within JavaScript files, making code more readable and easier to write. Instead of using React.createElement(), JSX simplifies UI creation.
<br />


2. Components

React applications are built using components, which are reusable and independent pieces of UI. Components can be functional or class-based.

<br />


3. Props (Properties)

Props allow data to be passed from a parent component to a child component, making components dynamic and reusable. <br />



4. State Management

State is used to manage dynamic data within a component. The useState hook allows functional components to maintain and update state. <br />




5. Virtual DOM

React uses a Virtual DOM to enhance performance. Instead of directly updating the real DOM, it creates a virtual copy, compares differences, and updates only the necessary elements. <br />

6. Hooks (React 16.8+)

Hooks enable functional components to use state and lifecycle features without needing class components.

useState – Manages state

useEffect – Handles side effects (API calls, event listeners)

useContext – Accesses global state  <br />

7. React Router
React Router enables navigation within single-page applications without reloading the page. <br />


8. Context API & Redux (State Management)
When managing state across multiple components, Context API and Redux help maintain a global state. <br />

9. Performance Optimization

React provides tools like:

React.memo – Prevents unnecessary re-renders

useMemo & useCallback – Optimizes expensive computations</p>
  
    <Link to="/project" className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg">Project Overview</Link>
  </motion.div>
);

const Project = () => (
  <motion.div initial={{ y: -50 }} animate={{ y: 0 }} className="p-6">
    <h2 className="text-3xl font-semibold">Project: Task Manager App</h2>
    <p className="mt-4">A React-based to-do list with CRUD operations.</p>
    <ul className="list-disc pl-6 mt-4">
      <li>UseState for managing tasks</li>
      <li>React Router for navigation</li>
      <li>Tailwind CSS for styling</li>
    </ul>
    <Link to="/deployment" className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg">Deployment Guide</Link>
  </motion.div>
);

const Deployment = () => (
  <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="p-6">
    <h2 className="text-3xl font-semibold">Deployment Guide</h2>
    <p className="mt-4">Deploy your React app on Vercel or Netlify.</p>
    <ul className="list-disc pl-6 mt-4">
      <li>Optimize performance</li>
      <li>Host on Netlify / Vercel</li>
      <li>Enable CI/CD for updates</li>
    </ul>
    <Link to="/" className="mt-4 inline-block bg-red-600 text-white px-4 py-2 rounded-lg">Back to Home</Link>
  </motion.div>
);

const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-blue-500 p-4">
        <ul className="flex space-x-4 text-white">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/study">Study Plan</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/deployment">Deployment</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<StudyPlan />} />
        <Route path="/project" element={<Project />} />
        <Route path="/deployment" element={<Deployment />} />
      </Routes>
    </div>
  </Router>
);

export default App;
