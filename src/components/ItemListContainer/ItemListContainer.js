import './ItemListContainer.css';
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from './ItemList/ItemList';
import productos_js from '../productos/productos'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';

// Contenedor para mostrar items
const ItemListContainer = ({ greeting }) => {

  // const stock = 0
  // const stock2 = 3

  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true) //mientras los productos no cargan cargando esta en verdadero
  const { filtro, id_filtro } = useParams()
  // const [mensajePrincipal, setMensajePrincipal] = useState(greeting)

  // console.log("greeting principal 1: " + greeting)
  // console.log("greeting principal 2: " + mensajePrincipal)
  // console.log("filtro: " + filtro)
  // console.log("id: " + id_filtro)

  // Se importan los productos 
  // Para que se renderize una sola vez hay que aplicarle un array vacío.

  useEffect(() => {
    // Si id_filtro no es null, se filtra por categoria o marca.
    let productos_promesa

    if (id_filtro != null) {

      productos_promesa = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {

            if (filtro === "categoria") {

              const productosPorCategoria = productos_js.filter(producto => producto.categoria === id_filtro)
              resolve(productosPorCategoria)
              // setMensajePrincipal(`Filtro: ${filtro} - ${id_filtro}`)
            } else if (filtro === "marca") {

              const productosPorMarca = productos_js.filter(producto => producto.marca === id_filtro)
              resolve(productosPorMarca)
              // setMensajePrincipal(`Filtro: ${filtro} - ${id_filtro}`)
            } else {
              console.log("No tendría que haber entrado acá")
            }

            // console.log("filtro: " + filtro)
            // console.log("id adentro: " + id_filtro)

          }, 2000)
        })
      }
    } else {                        // Si no se aplican filtros, imprime todos los productos.

      productos_promesa = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(productos_js)
            // setMensajePrincipal(greeting)
          }, 2000)
        })
      }
    }

    productos_promesa()
      .then((prods) => {
        setProductos(prods)
        setCargando(false)
      })
  }, [filtro, id_filtro]) //aca tengo que hacer el pasaje en el [] array vacio para que no se borren las variables.

  // console.log("greeting principal 3: " + mensajePrincipal)

  return (
    <div className="itemListContainer">
      <div className="container-fluid row">
        <div className="container justify-content-center display-flex p-2 text-center">
          {(greeting !== "") ? <h2>{greeting}</h2> : <h2>{`Filtro: ${filtro} - ${id_filtro}`}</h2>}
        </div>

        {/* <div className="container-fluid d-flex text-center">
          <ItemCount stock={stock} initial={1} />
          <ItemCount stock={stock2} initial={1} />
        </div> */}

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
