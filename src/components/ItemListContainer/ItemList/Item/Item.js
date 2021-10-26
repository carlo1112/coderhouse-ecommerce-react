/*
function Item({ item }) {
 // Desarrolla la vista de un ítem donde item es de tipo
 // { id, title, price, pictureUrl }
}
*/
import { Container, Card, Button } from "react-bootstrap"

const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    // col - md - 4 mt - 5 mb - 5
    <Container className="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-3" >
      <Card className="card p-3 bg-light rounded-3">
        <Card.Img className="rounded-3" variant="top" src={pictureUrl} alt={title} />
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Subtitle className="p-2" style={{ textAlign: "right" }}><strong>$ {price}</strong></Card.Subtitle>
          <Card.Text className="text-center">{description}</Card.Text>
          <Button variant="primary">Ver detalles</Button>
        </Card.Body>
      </Card>
    </Container>

  )
}

export default Item
