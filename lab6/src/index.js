// Import necessary modules and styles
import React from 'react';  // Import React library
import ReactDOM from 'react-dom/client';  // Import ReactDOM for rendering
import './index.css';  // Import a CSS file for styling
import App from './App';  // Import the main application component
import reportWebVitals from './reportWebVitals';  // Import a function for measuring web performance metrics

// Create a root element using ReactDOM.createRoot and attach it to the HTML element with the id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main application component within a <React.StrictMode> component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
