import "./Cart.css"
import { Context } from "../Context/CartContext"
import { useContext } from "react"
import { Container, Button } from "react-bootstrap"
import CartItem from '../CartItem/CartItem'
import { Link } from "react-router-dom"

const Cart = () => {

  const { cart, total, clear } = useContext(Context)

  return (
    <div className="cart">
      <Container className="container align-top justify-content-center p-2 text-center ">
        <h2>Soy el carrito</h2>

        <Container>
          {/* Si hay productos en el carrito, los muestra.*/}
          {cart.length > 0 ? (
            <>
              {cart.map((producto) =>
                <CartItem
                  key={`cart-${producto.id}`}
                  id={producto.id}
                  title={producto.nombre}
                  price={producto.precio}
                  pictureUrl={producto.imagen}
                  cantidad={producto.cantidad}
                  subtotal={producto.subtotal}
                />
              )}

              <h2>Total del carrito: ${total}</h2>
              <Container>
                <Button variant="danger" onClick={() => clear()}>Vaciar carrito</Button>
                <Button variant="primary">Finalizar Compra(sin implementar)</Button>
              </Container>
            </>
          )
            :
            (
              <>
                <p>El carrito está vacío</p>
                <Button variant="primary" as={Link} to='/'>Volver al inicio</Button>
              </>
            )
          }
        </Container>
      </Container>
    </div >
  )
}

export default Cart
