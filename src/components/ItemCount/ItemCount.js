import { useState } from "react"
import { Button } from 'react-bootstrap'

const ItemCount = ({ stock, initial, onAdd }) => {

  //Si stock es mayor a 0, initial se establece como 1, sino como 0
  const [stockItem, setStockItem] = useState(stock > 0 ? stock - initial : 0)
  const [cantidad, setCantidad] = useState(stock > 0 ? initial : 0)


  const modificarStock = {
    sumarStock: () => {
      if (stockItem === 0) {
        alert("No hay más stock.")
      } else {
        setCantidad(cantidad + 1)
        setStockItem(stockItem - 1)
      }
    },
    restarStock: () => {
      if (cantidad === 0) {
        alert("No se pueden seleccionar cantidades negativas.")
      } else {
        setCantidad(cantidad - 1)
        setStockItem(stockItem + 1)
      }
    }
  }

  return (
    <div>
      <div className="container justify-content-center display-flex col-6 p-2">
        <div className="container d-flex justify-content-around col-8 p-2">
          <button className="btn btn-primary" onClick={modificarStock.restarStock} disabled={stockItem === 0 && cantidad === 0}>-</button>
          <h5>{cantidad}</h5>
          <button className="btn btn-primary" onClick={modificarStock.sumarStock} disabled={stockItem === 0 && cantidad === 0}>+</button>
        </div>
        <div className="container d-flex justify-content-center">
          <Button variant="primary" disabled={stockItem === 0 && cantidad === 0}>Agregar al carrito</Button>
        </div>
        <div className="container d-flex justify-content-center">
          <p>Stock disponible: {stockItem}</p>
        </div>

      </div>
    </div>
  )
}

export default ItemCount
