import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Weather from "./Weather";
import "./Weather.css";
import "./BottomRow.css";

ReactDOM.render(
  <React.StrictMode>
    <Weather />
    <p className="linkGitHub"><a href="https://github.com/XeniyaVolkova/weather-app">Open-source code</a> by Xeniya V.</p>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
