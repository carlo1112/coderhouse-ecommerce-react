import './CartWidget.css';
import { Container } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const iconCart = <FontAwesomeIcon icon={faShoppingCart} color="white" />

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
