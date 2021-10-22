import './CartWidget.css';
import { Container } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const iconCart = <FontAwesomeIcon icon={faShoppingCart} color="white" />

// El componente CartWidget contiene un icono de carrito y un numero que muestra un valor recibido de un componente superior.
const CartWidget = ({ cantidad }) => {
  return (
    <div className="cart_widget">
      <Container fluid>
        {iconCart}
        {cantidad}
      </Container>
    </div>

  )
}

export default CartWidget