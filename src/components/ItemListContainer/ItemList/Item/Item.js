/**
 * function Item({ item }) {
 * // Desarrolla la vista de un ítem donde item es de tipo
 * // { id, title, price, pictureUrl }
 * } 
 */
import { Container, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Item = ({ id, title, description, price, pictureUrl, stock, categoria }) => {
  return (
    <Container className="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-3">
      <Card key={id} className="card p-3 bg-light rounded-3">
        <Card.Img className="rounded-3" variant="top" src={pictureUrl} alt={title} />
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Subtitle className="p-2" style={{ textAlign: "right" }}><strong>$ {price}</strong></Card.Subtitle>
          <Card.Text className="text-center">{description}</Card.Text>
          <Card.Text className="text-muted">Stock disponible: {stock}</Card.Text>
          <Button variant="primary" as={Link} to={`/producto/${id}`}>Ver detalles</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Item
