import { useContext } from "react"
import { Context } from "../Context/CartContext"
import { Container, Card, Button, Row, Col } from "react-bootstrap"


const CartItem = ({ id, title, price, pictureUrl, cantidad, subtotal }) => {

  const { remove } = useContext(Context)

  return (
    <Container className="">
      <Card className="" style={{ width: '100%' }}>
        <Row className='no-gutters'>
          <Col className="col-sm"> {/*} md={5} lg={5}>*/}
            <Card.Img className="rounded-3" variant="top" src={pictureUrl} alt={title} style={{ width: "50%" }} />
          </Col>
          <Col className="col-lg">
            <Card.Body>
              <Row>
                <Container className="col align-self-start">
                  <Card.Title>{title}</Card.Title>
                </Container>
              </Row>
              <Row>
                <Col className="col-sm" >
                  <Card.Text>Precio unitario</Card.Text>
                  <Card.Text className="p-2">$ {price}</Card.Text>
                  <Card.Text className="text-muted">Cantidad: {cantidad}</Card.Text>
                </Col>
                <Col className="col-sm">
                  <Card.Text>Subtotal</Card.Text>
                  <Card.Text className="p-2"><strong>$ {subtotal}</strong></Card.Text>
                  <Button variant="danger" onClick={() => remove(id, cantidad, price)}>Eliminar producto</Button>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default CartItem
