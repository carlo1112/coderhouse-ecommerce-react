// Se importa React y ReactDOM
import React from "react"
import ReactDOM from "react-dom"
import App from './App';
// Se importa libreria de react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Se renderiza 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);