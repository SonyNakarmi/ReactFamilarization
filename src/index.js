import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CommentComponent from './CommentComponent';
import Clock from './RenderingElements';


// Components and Props - call CommentComponent component within ReactDOM.render(); method as 1st parameter
// Rendering elements - call RenderingElements component within ReactDOM.render(); method as 1st parameter

ReactDOM.render(
    <Clock />
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
