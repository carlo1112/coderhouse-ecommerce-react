import './ItemDetailContainer.css';
//import productos_js from '../productos/productos'
import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router';
import Cargando from '../Cargando/Cargando';
import { getFirestore } from '../Firebase/Firebase';

// Contenedor para mostrar detalle del item
const ItemDetailContainer = () => {

  const [producto, setProducto] = useState([])
  const [cargando, setCargando] = useState(true) //mientras el producto no se carga, 'cargando' esta en verdadero

  const { id_item } = useParams()

  //Para que se renderize una sola vez hay que aplicarle un array vacío al final del useEffect.
  useEffect(() => {

    const db = getFirestore()
    const itemCollection = db.collection('productos')
    const item_buscado = itemCollection.doc(id_item)

    item_buscado.get().then((doc) => {

      setCargando(true)
      setProducto([])

      if (!doc.exists) {
        console.log('No se encontró el producto.')
        return
      }
      setProducto({ id: doc.id, ...doc.data() })
    }).catch((error) => {
      console.log("Error: no se puede acceder a productos", error)
      alert('El producto no existe')
    }).finally(() => {
      setCargando(false)
    })
  }, [id_item])

  //   const getItem = () => {
  //     return new Promise((resolve, reject) => {

  //       setCargando(true)
  //       setProducto([])

  //       setTimeout(() => {
  //         //Se busca el producto que coincida con la busqueda
  //         const item_buscado = productos_js.find((prod => prod.id === parseInt(id_item)))
  //         resolve(item_buscado)
  //       }, 500)
  //     })
  //   }
  //   getItem()
  //     .then((prod) => {
  //       setProducto(prod)
  //       setCargando(false)
  //     })
  // }, [id_item])

  return (
    <div className="itemDetailContainer">
      <div className="container-fluid row">

        {/* Si se esta cargando se muestra el mensaje, sino se muestra el ItemDetail */}
        <div className="container-fluid row d-flex justify-content-center my-3 text-center tarjetasProductos">
          <h2>Item Detail</h2>
        </div>

        <div className="container-fluid row d-flex justify-content-center my-3 text-center">
          {cargando ? <Cargando /> : (
            <ItemDetail
              key={`detail-${producto.id}`}
              id={producto.id}
              title={producto.marca + ' ' + producto.modelo}
              description={producto.descripcion}
              price={producto.precio}
              pictureUrl={producto.img}
              stock={producto.stock}
            />)}
        </div>
      </div>
    </div >
  )
}

export default ItemDetailContainer
