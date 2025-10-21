import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// CAMBIO: Apuntamos a la nueva ubicación de App.js
import App from './presentation/App'; 

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();