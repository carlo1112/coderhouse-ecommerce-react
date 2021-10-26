/*
function ItemList({ items }) {
 // El componente va a recibir una prop `items` y va a mapear estos `items` al componente `<Item … />`
}
*/
import { useState, useEffect } from "react"
import Item from "./Item/Item"

const ItemList = ({ items }) => {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true) //mientras los productos no cargan cargando esta en verdadero

  //Para que se renderize una sola vez hay que aplicarle un array vacío.
  useEffect(() => {
    const productos = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(items)
        }, 2000)
      })
    }
    productos()
      .then((prods) => {
        setProductos(prods)
        setCargando(false)
      })
  }, [])

  return (
    <>
      {cargando ? <h2>Cargando Productos...</h2> : ( //Si cargando es verdadero se muestra el mensaje, sino se muestran las tarjetas.
        productos.map((producto) =>
          <Item id={producto.id} title={producto.marca + ' ' + producto.modelo}
            description={producto.descripcion} price={producto.precio} pictureUrl={producto.img} />
        )
      )
      }
    </>
  )
}

export default ItemList