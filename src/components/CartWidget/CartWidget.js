import './CartWidget.css';
import { Container } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../Context/CartContext';

const iconCart = <FontAwesomeIcon icon={faShoppingCart} color="white" />

// El componente CartWidget contiene un icono de carrito y un numero que muestra un valor recibido de un componente superior.
const CartWidget = () => {

  const { unidades } = useContext(Context)

  return (
    <div className="cart_widget">
      <Container as={Link} to="/cart" fluid>
        {iconCart}
        {unidades > 0 ?
          (
            <div className="cantidadCarrito">
              <h5>{unidades}</h5>
            </div>
          )
          : <></>
        }
      </Container>
    </div>
  )
}

export default CartWidget