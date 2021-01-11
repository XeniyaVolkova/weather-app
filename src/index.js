import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Weather from "./Weather";
import "./Weather.css";
import "./BottomRow.css";

ReactDOM.render(
  <React.StrictMode>
    <Weather />
     <p className="linkGitHub"><a href="https://github.com/XeniyaVolkova/weather-app">Open-source code</a> by Xeniya V.
    <br />  Illustrations are Subject to <i className="far fa-copyright"></i>Copyright</p>
    <div className="allGirls"> <img src="https://static.wixstatic.com/media/3688c9_83f12d09af2449c59f63f07ff38c0d3c~mv2.png" alt="All" width="200" /></div>
   

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
