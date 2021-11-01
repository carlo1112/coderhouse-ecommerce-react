import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from './ItemList/ItemList';
import productos_js from '../productos/productos'
import { useState, useEffect } from "react"

// Contenedor para mostrar items
const ItemListContainer = ({ greeting }) => {

  const stock = 0
  const stock2 = 3

  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true) //mientras los productos no cargan cargando esta en verdadero

  // Se importan los productos 
  // Para que se renderize una sola vez hay que aplicarle un array vacío.
  useEffect(() => {
    const productos = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productos_js)
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
    <div className="itemListContainer">
      <div className="container-fluid row">
        <div className="container justify-content-center display-flex p-2 text-center">
          <h2>{greeting}</h2>
        </div>

        <div className="container-fluid d-flex text-center">
          <ItemCount stock={stock} initial={1} />
          <ItemCount stock={stock2} initial={1} />
        </div>

        {/* Si está cargando los productos muestro el mensaje, sino llamo a ItemList con productos */}
        {cargando ?
          (
            <div className="container-fluid row d-flex justify-content-center my-3 text-center">
              <h2>Cargando Productos...</h2>
            </div>
          )
          :
          (
            <div className="container-fluid row d-flex justify-content-center my-3 text-center tarjetasProductos">
              <ItemList items={productos} />
            </div>
          )
        }
      </div>
    </div >
  )
}

export default ItemListContainer
