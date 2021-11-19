import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import Cargando from '../Cargando/Cargando';
import { getFirestore } from '../Firebase/Firebase';

// Contenedor para mostrar items
const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)    //mientras los productos no cargan cargando esta en verdadero
  const { filtro, id_filtro } = useParams()         //filtro de categorias

  // Funcion para vacíar el array de productos y poner "cargando" en true
  const inicializar = () => {
    setCargando(true);
    setProductos([]);
  }

  // Se importan los productos 
  // Para que se renderize una sola vez y no se genere un loop, hay que aplicarle un array vacío.
  // Se agregan las variables al array vacío que tienen que ser monitoreadas constantemente.

  useEffect(() => {

    if (id_filtro != null) {

      inicializar()

      // Se filtra por "categoria" o "marca".
      if (filtro === "categoria") {

        const dbQuery = getFirestore()
        dbQuery.collection('productos').where('categoria', '==', id_filtro).get()
          .then(resp => {
            setProductos(resp.docs.map(productos => ({ id: productos.id, ...productos.data() })))
          })
          .catch(err => console.log(err))
          .finally(() => setCargando(false))

      } else if (filtro === "marca") {

        const dbQuery = getFirestore()
        dbQuery.collection('productos').where('marca', '==', id_filtro).get()
          .then(resp => {
            setProductos(resp.docs.map(productos => ({ id: productos.id, ...productos.data() })))
          })
          .catch(err => console.log(err))
          .finally(() => setCargando(false))
      } else {
        console.log("No tendría que haber entrado acá")
      }

    } else {  // Si no se aplican filtros, imprime todos los productos.

      const dbQuery = getFirestore()
      dbQuery.collection('productos').get()
        .then(resp => {
          setProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data() })))
        })
        .catch(err => console.log(err))
        .finally(() => setCargando(false))
    }
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
