import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

// add
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import all app.js
import App from './App';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log());








