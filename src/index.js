// React and ReactDOM are imported
import React from "react"
import ReactDOM from "react-dom"
import App from './App';
// React-bootstrap library is imported
import 'bootstrap/dist/css/bootstrap.min.css';

// Render 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);