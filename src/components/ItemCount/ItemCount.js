import { useState } from "react"
import { Container, Button, Card } from 'react-bootstrap'

const ItemCount = ({ stock, initial, onAdd }) => {

  //If stock is greater than 0, initial is set to 1, if not 0.
  const [stockItem, setStockItem] = useState(stock > 0 ? stock - initial : 0)
  const [quantity, setQuantity] = useState(stock > 0 ? initial : 0)

  const modifyStock = {
    sumarStock: () => {
      if (stockItem === 0) {
        alert("No hay más stock.")
      } else {
        setQuantity(quantity + 1)
        setStockItem(stockItem - 1)
      }
    },
    restarStock: () => {
      if (quantity === 0) {
        alert("No se pueden seleccionar cantidades negativas.")
      } else {
        setQuantity(quantity - 1)
        setStockItem(stockItem + 1)
      }
    }
  }

  return (
    <Container className="">
      <Container className="justify-content-center display-flex col-12 p-2">

        <Container className="d-flex justify-content-center">
          <Card.Text className="text-muted">Stock disponible: {stockItem}</Card.Text>
        </Container>

        <Container className=" d-flex justify-content-between col-4 p-2">
          <Button className="col-3" variant="primary" onClick={modifyStock.restarStock} disabled={stockItem === 0 && quantity === 0}>-</Button>
          <h5>{quantity}</h5>
          <Button className="col-3" variant="primary" onClick={modifyStock.sumarStock} disabled={stockItem === 0 && quantity === 0}>+</Button>
        </Container>

        <Container className=" d-flex justify-content-center">
          <Button className="col-4" variant="primary" onClick={() => { onAdd({ quantity }) }} disabled={stockItem === 0 && quantity === 0}>
            Agregar al carrito
          </Button>
        </Container>

      </Container>
    </Container>
  )
}

export default ItemCount
