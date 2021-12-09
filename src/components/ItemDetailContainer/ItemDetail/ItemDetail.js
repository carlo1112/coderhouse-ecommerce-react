import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../../ItemCount/ItemCount"
import { CartContext } from "../../Context/CartContext"
import { Container, Card, Button, Col, Image } from "react-bootstrap"
import Modals from "../../Modals/Modals"
import "./ItemDetail.css"

const ItemDetail = ({ id, title, description, price, pictureUrl, stock, category }) => {

  const [isAdded, setIsAdded] = useState(false)
  const { onAdd } = useContext(CartContext)
  const categoryUpperFirstLetter = category ? category.charAt(0).toUpperCase() + category.slice(1) : '' // Category is lowercase, the first letter is converted to uppercase and saved in a new variable

  const [message, setMessage] = useState('')
  const [showModal, setShowModal] = useState(false);

  const addToCart = (props) => {
    setIsAdded(true)
    onAdd({ id, title, price, pictureUrl }, props.quantity) //product, quantity
    setMessage(`Se agregaron ${props.quantity} unidades del producto ${title} al carrito`)
    setShowModal(true)
  }

  return (
    <Container className="col-12 col-md-12 col-lg-12 d-flex justify-content-center my-3">
      {showModal ? <Modals mostrar={showModal} text={message} /> : <></>}

      <Card style={{ heigth: "20rem" }} className="card p-3 bg-light rounded-3">
        <Card.Body>
          <Col>
            <Container>
              <Image className="card-image rounded-3" src={pictureUrl} alt={title} />
            </Container>
          </Col>
          <Col>
            <Card.Title className="text-center">{title}</Card.Title>
            <Card.Subtitle className="p-2" style={{ textAlign: "center" }}><strong>{categoryUpperFirstLetter}</strong></Card.Subtitle>
            <Card.Subtitle className="p-2" style={{ textAlign: "center" }}><strong>$ {price}</strong></Card.Subtitle>
            <Card.Text className="text-center">{description}</Card.Text>

            {!isAdded ?
              <ItemCount onAdd={addToCart} stock={stock} initial={1} />
              :
              <Container className="">
                <Container className="justify-content-center display-flex col-12 p-2">
                  <Button as={Link} to='/cart' className="col-4" variant="primary">Terminar compra</Button>
                </Container>
              </Container>
            }

            <div className="back-button"><Button as={Link} to={'/'} variant="primary">Volver</Button></div>
          </Col>
        </Card.Body>
      </Card >
    </Container >
  )
}

export default ItemDetail
