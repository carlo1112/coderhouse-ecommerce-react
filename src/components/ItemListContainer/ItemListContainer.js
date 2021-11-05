import './ItemListContainer.css';
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from './ItemList/ItemList';
import productos_js from '../productos/productos'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import Cargando from '../Cargando/Cargando';

// Contenedor para mostrar items
const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)    //mientras los productos no cargan cargando esta en verdadero
  const { filtro, id_filtro } = useParams()

  // Funcion para vacíar el array de productos y poner "cargando" en true
  const inicializar = () => {
    setCargando(true);
    setProductos([]);
  }

  // Se importan los productos 
  // Para que se renderize una sola vez y no se genere un loop, hay que aplicarle un array vacío.
  // Se agregan las variables al array vacío que tienen que ser monitoreadas constantemente.

  useEffect(() => {

    // Si id_filtro no es null, se filtra por categoria o marca.
    let productos_promesa
    if (id_filtro != null) {

      productos_promesa = () => {
        return new Promise((resolve, reject) => {

          inicializar()

          setTimeout(() => {
            // Se filtra por "categoria" o "marca".
            if (filtro === "categoria") {

              const productosPorCategoria = productos_js.filter(producto => producto.categoria === id_filtro)
              resolve(productosPorCategoria)
            } else if (filtro === "marca") {

              const productosPorMarca = productos_js.filter(producto => producto.marca === id_filtro)
              resolve(productosPorMarca)
            } else {
              console.log("No tendría que haber entrado acá")
            }
          }, 2000)
        })
      }
    } else {      // Si no se aplican filtros, imprime todos los productos.

      productos_promesa = () => {
        return new Promise((resolve, reject) => {

          inicializar()

          setTimeout(() => {
            resolve(productos_js)
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

  return (
    <div className="itemListContainer">
      <div className="container-fluid row">
        <div className="container justify-content-center display-flex p-2 text-center">
          {(greeting !== "") ? <h2>{greeting}</h2> : <h2>{`Filtro: ${filtro} - ${id_filtro}`}</h2>}
        </div>

        {/* Si está cargando los productos muestro el mensaje, sino llamo a ItemList con productos */}
        <div className="container-fluid row d-flex justify-content-center my-3 text-center tarjetasProductos">
          {cargando ? (<Cargando />) : <ItemList items={productos} />}
        </div>
      </div>
    </div >
  )
}

export default ItemListContainer
