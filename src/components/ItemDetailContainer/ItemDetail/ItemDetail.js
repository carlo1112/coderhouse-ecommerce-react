import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../../ItemCount/ItemCount"
import { Context } from "../../Context/CartContext"
import { Container, Card, Button } from "react-bootstrap"

const ItemDetail = ({ id, title, description, price, pictureUrl, stock }) => {

  const [seAgrego, setSeAgrego] = useState(false)
  const { onAdd } = useContext(Context)

  const agregar = (props) => {
    setSeAgrego(true)
    onAdd({ id, title, price, pictureUrl }, props.cantidad) //producto, cantidad
    console.log(`Se agregaron ${props.cantidad} unidades del producto ${title} al carrito`)
  }

  return (
    <Container className="col-12 col-md-12 col-lg-12 d-flex justify-content-center my-3">
      <Card className="card p-3 bg-light rounded-3">
        <Card.Img className="rounded-3" variant="top" src={pictureUrl} alt={title} style={{ width: "100%" }} />
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Subtitle className="p-2" style={{ textAlign: "right" }}><strong>$ {price}</strong></Card.Subtitle>
          <Card.Text className="text-center">{description}</Card.Text>

          {!seAgrego ?
            <ItemCount onAdd={agregar} stock={stock} initial={1} />
            :
            <div className="container d-flex justify-content-center">
              <Button as={Link} to='/cart' className="col-4" variant="primary">Terminar compra</Button>
            </div>
          }

          <Button as={Link} to={'/'} variant="primary">Volver</Button>
        </Card.Body>
      </Card>
    </Container >
  )
}

export default ItemDetail
