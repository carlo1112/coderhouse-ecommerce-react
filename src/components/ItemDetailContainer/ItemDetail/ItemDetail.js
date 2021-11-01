/*
function ItemDetail({ item }) {
  return 
    <>
           …
           // Desarrolla la vista de detalle expandida del producto con su imagen título, descripción y precio
           ...
    </>;
*/

import { Container, Card, Button } from "react-bootstrap"
import ItemCount from "../../ItemCount/ItemCount"

const ItemDetail = ({ id, title, description, price, pictureUrl, stock }) => {
  return (
    <Container className="col-12 col-md-12 col-lg-12 d-flex justify-content-center my-3">
      <Card key={id} className="card p-3 bg-light rounded-3">
        <Card.Img className="rounded-3" variant="top" src={pictureUrl} alt={title} style={{ width: "100%" }} />
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Subtitle className="p-2" style={{ textAlign: "right" }}><strong>$ {price}</strong></Card.Subtitle>
          <Card.Text className="text-center">{description}</Card.Text>
          <ItemCount stock={stock} initial={1} />
          <Button variant="primary">Volver</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ItemDetail
