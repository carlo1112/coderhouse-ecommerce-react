import "./Cart.css"
import { Context } from "../Context/CartContext"
import { useState, useContext } from "react"
import { Container, Button } from "react-bootstrap"
import CartItem from '../CartItem/CartItem'
import { Link } from "react-router-dom"
import { getFirestore, formatDate } from "../Firebase/Firebase"
import Cargando from "../Cargando/Cargando"

const Cart = () => {

  const { cart, total, clear } = useContext(Context)
  const [loading, setLoading] = useState(false)     // Mientras se procesa la compra, se muestra el loading
  //const [userInfo, setUserInfo] = useState(null)  // Para formulario, falta implementar formulario
  const [orderId, setOrderId] = useState(null)

  const createOrder = async () => {
    setLoading(true)
    const user = {
      nombre: "Carlos",
      email: "email@test.com",
      telefono: "44445555",
    }
    const cartItems = cart.map((item) => ({
      id: item.id,
      title: item.nombre,
      quantity: item.cantidad
    }))
    await newOrder(cartItems, user)
    setLoading(false);
  }

  const newOrder = async (cartItems, user) => {
    const db = getFirestore()
    const orders = db.collection("orders")
    const newOrderInfo = {
      buyer: user,
      items: cartItems,
      date: formatDate(new Date()),
      total: total,
    }
    try {
      const { id } = await orders.add(newOrderInfo)
      console.log('Su compra se guardo bajo el id: ', id)
      console.log("Orden completa: ", newOrderInfo)
      setOrderId(id)
      clear()
    } catch (err) {
      console.log("Ocurrió un error en el guardado")
      console.log(err);
    }
  }

  const showCart = () => {
    return (
      <>
        {
          cart.map((item) =>
            <CartItem
              key={`cart-${item.id}`}
              id={item.id}
              title={item.nombre}
              price={item.precio}
              pictureUrl={item.imagen}
              cantidad={item.cantidad}
              subtotal={item.subtotal}
            />
          )
        }
        < h2 > Total del carrito: ${total}</h2 >
        <Container>
          <Button variant="danger" onClick={() => clear()}>Vaciar carrito</Button>
          <Button variant="primary" onClick={() => createOrder()}>Finalizar Compra</Button>
        </Container>
      </>

    )
  }

  const emptyCart = () => {
    return (
      <>
        <p>El carrito está vacío</p>
        <Button variant="primary" as={Link} to='/'>Volver al inicio</Button>
      </>
    )
  }

  const orderSuccess = () => {
    return (
      <>
        <p>Su orden ha sido procesada con éxito.</p>
        <Button variant="primary" as={Link} to='/'>Volver al inicio</Button>
      </>
    )
  }

  const showContent = () => {
    if (cart.length === 0 && orderId === null)
      return emptyCart()
    if (orderId !== null)
      return orderSuccess()
    if (cart.length > 0)
      return showCart()
  }

  // Return de Cart
  return (
    <div className="cart">
      <Container className="container align-top justify-content-center p-2 text-center ">
        <h2>Soy el carrito</h2>
        <Container>
          {loading ? <Cargando /> : showContent()}
        </Container>
      </Container>
    </div >
  )
}

export default Cart
