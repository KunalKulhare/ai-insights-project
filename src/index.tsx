import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create the root element for the React application
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Render the app inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optionally log web vitals to the console or send them to an analytics endpoint
reportWebVitals(console.log); // This line logs web vitals to the console
