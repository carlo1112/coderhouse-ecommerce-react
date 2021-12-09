import { Container, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({ id, title, description, price, pictureUrl, stock, category }) => {

  const categoryUpperFirstLetter = category.charAt(0).toUpperCase() + category.slice(1) // Category is lowercase, the first letter is converted to uppercase and saved in a new variable

  return (
    <Container className="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-3">
      <Card key={id} className="card p-3 bg-light rounded-3 item_card">
        <Link to={`/item/${id}`}>
          <Card.Img className="rounded-3" variant="top" src={pictureUrl} alt={title} />
        </Link>
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Subtitle className="p-2" style={{ textAlign: "center" }}>{categoryUpperFirstLetter}</Card.Subtitle>
          <Card.Subtitle className="p-2" style={{ textAlign: "center" }}><strong>$ {price}</strong></Card.Subtitle>
          {/* <Card.Text className="text-center">{description}</Card.Text>
          <Card.Text className="text-muted">Stock disponible: {stock}</Card.Text> */}
          <Button variant="primary" as={Link} to={`/item/${id}`}>Ver detalles</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Item
