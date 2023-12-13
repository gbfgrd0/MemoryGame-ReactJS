import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import JogoMemoria from './JogoMemoria';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JogoMemoria />
  </React.StrictMode>
);

reportWebVitals();
