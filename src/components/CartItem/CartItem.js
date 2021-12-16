import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Card, Button } from "react-bootstrap" //, Row, Col, Container
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import ModalsConfirm from "../Modals/ModalsConfirm";

// FontAwesome is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";
//import { fasTrash } from '@fortawesome/free-solid-svg-icons'

// iconSlider is created for the brand icon
const iconTrash = <FontAwesomeIcon icon={faTrash} />

const CartItem = ({ id, title, price, description, pictureUrl, quantity, subtotal }) => {

  const { remove } = useContext(CartContext)

  //Modal
  const [showModalConfirm, setShowModalConfirm] = useState(false);

  return (
    <>
      {showModalConfirm ? <ModalsConfirm mostrar={showModalConfirm} text={"¿Está seguro que desea eliminar el producto del carrito?"} handleConfirm={() => remove(id, quantity, price)} handleCancel={() => setShowModalConfirm(false)} /> : <></>}
      <div className="col-1 cartItemImg">
        <Card.Img className="rounded-3 cardImg" variant="top" src={pictureUrl} alt={title} style={{ maxHeight: "50%", display: "block" }} />
      </div>
      <div className="col-4" style={{ textAlign: "left" }}>
        <Card.Title >{title}</Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
      </div>
      <div className="col-2">
        <Card.Text className="p-2">$ {price}</Card.Text>
      </div>
      <div className="col-2">
        <Card.Text className="text-muted">{quantity}</Card.Text>
      </div>
      <div className="col-2">
        <Card.Text className="p-2"><strong>$ {subtotal}</strong></Card.Text>
      </div>
      <div className="col-1">
        <Button variant="danger" onClick={() => setShowModalConfirm(true)}> {iconTrash}</Button>
      </div>
    </>
  )
}

export default CartItem
