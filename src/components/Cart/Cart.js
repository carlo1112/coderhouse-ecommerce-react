import { db, formatDate } from "../Firebase/Firebase";
import { Link } from "react-router-dom"
import "./Cart.css"
import { CartContext } from "../Context/CartContext"
import { useState, useContext } from "react"
import { Container, Button } from "react-bootstrap"
import CartItem from '../CartItem/CartItem'
import Loading from "../Loading/Loading"
import FormCart from "../FormCart/FormCart"
import Modals from "../Modals/Modals"
import ModalsConfirm from "../Modals/ModalsConfirm";
import { useAuth } from '../Context/AuthContext'

const Cart = () => {
  const { cart, total, clear } = useContext(CartContext)
  const [loading, setLoading] = useState(false)     // While the purchase is being processed, the loading is displayed
  const [userInfo, setUserInfo] = useState(null)  // For form, the form needs to be implemented
  const [orderId, setOrderId] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const { loggedUser } = useAuth()

  // console.log("logged: ", loggedUser)

  //Modal
  const [message, setMessage] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [showModalConfirm, setShowModalConfirm] = useState(false);

  const updateUserInfo = (userInfo) => {
    setUserInfo(userInfo)
  }

  const createOrder = async () => {
    // console.log("Create")
    setLoading(true)
    const cartItems = cart.map((item) => ({
      id: item.id,
      title: item.name,
      quantity: item.quantity
    }))
    await newOrder(cartItems, userInfo)
    setLoading(false);
  }

  const newOrder = async (cartItems, userInfo) => {
    const orders = db.collection("orders")
    const orderUser = loggedUser ? {
      name: loggedUser.name,
      phone: loggedUser.phoneNumber || '',
      email: loggedUser.email,
      uid: loggedUser.uid
    } : userInfo

    const newOrderInfo = {
      buyer: orderUser,
      items: cartItems,
      date: formatDate(new Date()),
      total: total,
    }
    try {
      const { id } = await orders.add(newOrderInfo)
      // console.log('Su compra se guardo bajo el id: ', id)
      // console.log("Orden completa: ", newOrderInfo)

      setOrderId(id)
      clear()

      setMessage(`Su orden ha sido procesada con éxito bajo el id: "${id}".`)
      setShowModal(true)

    } catch (err) {
      setMessage(`Ocurrió un error en el guardado.`)
      setShowModal(true)
      // console.log("Ocurrió un error en el guardado")
      // console.log(err);
    }
  }

  const showCart = () => {
    return (
      <div className="d-flex flex-column">
        <div className="cart-table" responsive="md">
          <div className="header-table">
            <div className="col-1"></div>
            <div className="col-4" style={{ textAlign: "left" }}><strong>Producto</strong></div>
            <div className="col-2"><strong>Precio</strong></div>
            <div className="col-2"><strong>Cantidad</strong></div>
            <div className="col-2"><strong>Subtotal</strong></div>
            <div className="col-1"></div>
          </div>
          <div className="body-table">
            {
              cart.map((item) =>
                <div className="item-table">
                  <CartItem
                    key={`cart-${item.id}`}
                    id={item.id}
                    title={item.name}
                    price={item.price}
                    description={item.description}
                    pictureUrl={item.image}
                    quantity={item.quantity}
                    subtotal={item.subtotal}
                  />
                </div>
              )
            }
          </div>
        </div>
        <div className="cart-actions">
          < h2 className="m-4"> Total del carrito: ${total}</h2 >
          <Container className="d-flex flex-row justify-content-end m-1">
            <Button variant="danger" onClick={() => setShowModalConfirm(true)}>Vaciar carrito</Button>
            <Button variant="primary" onClick={() => setShowForm(true)}>Continuar con la compra</Button>
          </Container>
        </div>
      </div>
    )
  }

  const emptyCart = () => {
    return (
      <div className="d-flex flex-column justify-content-center">
        <p className="p-2">El carrito está vacío</p>
        <Button variant="primary" as={Link} to='/'>Volver al inicio</Button>
      </div>
    )
  }

  const orderSuccess = () => {
    return (
      <div className="d-flex flex-column justify-content-center">
        <p className="p-2">Su orden ha sido procesada con éxito.</p>
        <Button variant="primary" as={Link} to='/'>Volver al inicio</Button>
      </div>
    )
  }

  const showFormCart = () => {
    return (
      <div className="text-center col-lg-8 col-sm-10">
        <FormCart onChange={updateUserInfo} />
        <Container className="d-flex flex-row justify-content-center">
          <Button className="m-2" variant="primary" onClick={() => setShowForm(false)}>Volver al carrito</Button>
          {(loggedUser === null || loggedUser === undefined) ?
            <Button className="m-2" variant="primary" disabled={userInfo ? false : true} onClick={() => createOrder()}>Finalizar Compra</Button>
            :
            <Button className="m-2" variant="primary" disabled={false} onClick={() => createOrder()}>Finalizar Compra</Button>
          }
        </Container>
      </div>
    )
  }

  const showContent = () => {
    if (cart.length === 0 && orderId === null)
      return emptyCart()
    if (orderId !== null)
      return orderSuccess()
    if (cart.length > 0) {
      if (showForm) {
        return showFormCart()
      } else {
        return showCart()
      }
    }
  }

  // Return de Cart
  return (
    <div className="cart">
      <Container className="align-top justify-content-center p-2 text-center">
        <h2>Carrito de compras</h2>
        <Container className="d-flex justify-content-center">
          {showModal ? <Modals mostrar={showModal} text={message} /> : <></>}
          {showModalConfirm ? <ModalsConfirm mostrar={showModalConfirm} text={"¿Está seguro que desea eliminar todos los productos del carrito?"} handleConfirm={() => clear()} handleCancel={() => setShowModalConfirm(false)} /> : <></>}
          {loading ? <Loading /> : showContent()}
        </Container>
      </Container>
    </div >
  )
}

export default Cart