import './CartWidget.css';
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const iconCart = <FontAwesomeIcon icon={faShoppingCart} color="white" />

// The CartWidget component contains a cart icon and a number that shows the number of products in the cart.
const CartWidget = () => {

  const { units } = useContext(CartContext)

  return (
    <div className="cart_widget">
      <Container as={Link} to="/cart" fluid>
        {iconCart}
        {units > 0 ?
          (
            <div className="cartQuantity">
              <h5>{units}</h5>
            </div>
          ) : <></>
        }
      </Container>
    </div>
  )
}

export default CartWidget