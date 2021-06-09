import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
 import reportWebVitals from './reportWebVitals';
// import CommentComponent from './CommentComponent';
// import Clock from './RenderingElements';
// import Clock from './LifecycleMethod';
// import Form from './Form';
//import Toggle from './HandlingEvents'
// import Greeting from './ConditionalRendering';
//import LoginControl from './StatefulComponents';
//import MailboxRenderer from './Conditional';
// import Page from './PreventRendering';
//import Lists from './Lists';
import NameForm from './ControlledComponents';

// Please import relevant components that you want to view from js files and use them in ReactDOM.render() 
// method as 1st param. Below is list of some params
// Components and Props - call CommentComponent file  component within ReactDOM.render(); method as 1st parameter
// Rendering elements - call RenderingElements file component within ReactDOM.render(); method as 1st parameter
// State & LifeCycle- call LifeCycleMetods.js file  component

ReactDOM.render(
    <NameForm/>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Example on components to use for Topic and files from which to import
// 1. Inline if with logical operator - component <MailboxRenderer />, import import MailboxRenderer from './Conditional';
// 2. StatefulComponent -  <LoginControl />,  import LoginControl from './StatefulComponents';
// 3. For lists and keys -  <Lists nums={[1,2,3,4,5,6]}/> , import Lists from './Lists';
// 4. Controlled components to maintain state in React - <NameForm />, 