import './ItemDetailContainer.css';
import productos_js from '../productos/productos'
import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router';

// Contenedor para mostrar detalle del item
const ItemDetailContainer = () => {

  const [producto, setProducto] = useState([])
  const [cargando, setCargando] = useState(true) //mientras el producto no se carga, 'cargando' esta en verdadero

  const { id_producto } = useParams()

  //Para que se renderize una sola vez hay que aplicarle un array vacío al final del useEffect.
  useEffect(() => {
    const getItem = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productos_js)
        }, 1000)
      })
    }
    getItem()
      .then((prods) => {
        const item = prods.find((prod => prod.id === parseInt(id_producto)))
        setProducto(item)
        setCargando(false)
      })
  }, [id_producto])

  return (
    <div className="itemDetailContainer">
      <div className="container justify-content-center display-flex p-2 text-center">

        {/* Si se esta cargando se muestra el mensaje, sino se muestra el ItemDetail */}
        {cargando ? <h2>Cargando Detalles del Producto...</h2> : (
          <div className="container-fluid row d-flex justify-content-center my-3 text-center tarjetasProductos">

            <h2>Item Detail</h2>

            <ItemDetail
              key={`detail-${producto.id}`}
              id={producto.id}
              title={producto.marca + ' ' + producto.modelo}
              description={producto.descripcion}
              price={producto.precio}
              pictureUrl={producto.img}
              stock={producto.stock}
            />

          </div>
        )}
      </div>
    </div>
  )
}

export default ItemDetailContainer
