import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { db } from '../Firebase/Firebase';

// Contenedor para mostrar items
const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)  // While products are loading, "loading" is true
  const { filter, id_filter } = useParams()     // Category filter

  // Function to empty the product array and set "loading" to true
  const initialize = () => {
    setLoading(true);
    setProducts([]);
  }

  // Products are imported from Firebase
  // To render it only once and not generate a loop, an empty array must be applied to it.
  // Variables are added to the empty array that have to be constantly monitored.

  useEffect(() => {
    if (id_filter != null) {
      initialize()

      // It's filtered by "category" or "brand".
      if (filter === "category") {
        db.collection('products').where('category', '==', id_filter).get()
          .then(resp => {
            setProducts(resp.docs.map(item => ({ id: item.id, ...item.data() })))
          })
          .catch(err => console.log(err))
          .finally(() => setLoading(false))

      } else if (filter === "brand") {
        db.collection('products').where('brand', '==', id_filter).get()
          .then(resp => {
            setProducts(resp.docs.map(item => ({ id: item.id, ...item.data() })))
          })
          .catch(err => console.log(err))
          .finally(() => setLoading(false))
      } else {
        console.log("No tendría que haber entrado acá")
      }
    } else {  // If no filters are applied, all products are printed.
      db.collection('products').get()
        .then(resp => {
          setProducts(resp.docs.map(item => ({ id: item.id, ...item.data() })))
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [filter, id_filter])

  return (
    <div className="itemListContainer">
      <div className="container-fluid">
        <div className="container justify-content-center display-flex p-2 text-center">
          {(greeting !== "") ? <h2>{greeting}</h2> : <h2>{`Filtro: ${id_filter}`}</h2>} {/**${filter} -  */}
        </div>

        {/* Si está loading los products muestro el mensaje, sino llamo a ItemList con products */}
        <div className="container-fluid row d-flex justify-content-center my-3 text-center cardProducts">
          {loading ? (<Loading />) : <ItemList items={products} />}
        </div>
      </div>
    </div >
  )
}

export default ItemListContainer
