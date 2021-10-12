//Variable React en scope
//nodemodules -> carpeta react -> react.js -> traer variable React
import React from "react"

//Variable React en scope
//nodemodules -> carpeta react-dom -> index.js -> traer ReactDOM
import ReactDOM from "react-dom"

//Tiene que tener un elemento 
const Elemento = () => <p>Hola React</p>

//Renderizado del elemento. (primer parametro: Elemento, segundo parametro: lugar donde se va a mostrar)
ReactDOM.render(<Elemento />, document.getElementById("root"))