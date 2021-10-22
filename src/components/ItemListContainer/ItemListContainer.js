import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import { Row, Col } from 'react-bootstrap';


// Contenedor para mostrar items, actualmente solo muestra un saludo recibido de un componente superior.
const ItemListContainer = ({ greeting }) => {

  const stock = 0
  const stock2 = 3

  //stock ? 1 : 0
  return (
    <div className="itemListContainer">
      <Row>
        <Col><h2>{greeting}</h2></Col>
      </Row>
      <Row>
        <Col>
          <ItemCount stock={stock} initial={1} />
          <ItemCount stock={stock2} initial={1} />
        </Col>
      </Row>
    </div>
  )
}

export default ItemListContainer
