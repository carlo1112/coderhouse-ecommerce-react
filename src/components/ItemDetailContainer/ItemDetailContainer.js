import './ItemDetailContainer.css';
import { useState, useEffect } from "react"
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail/ItemDetail'
import Loading from '../Loading/Loading';
import { db } from '../Firebase/Firebase';

// Container to show item detail
const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)  // While the product is loading, "loading" is true

  const { id_item } = useParams()

  useEffect(() => {
    const itemCollection = db.collection('products')
    const itemToShow = itemCollection.doc(id_item)

    itemToShow.get().then((doc) => {

      setLoading(true)
      setProduct([])

      if (!doc.exists) {
        // console.log('No se encontró el producto.')
        return
      }
      setProduct({ id: doc.id, ...doc.data() })
      // console.log("categoria del itemdetail product: ", doc.category)
    }).catch((err) => {
      // console.log("Error: no se puede acceder a productos", err)
      // alert('El producto no existe')
    }).finally(() => {
      setLoading(false)
    })
  }, [id_item])
  return (
    <div className="itemDetailContainer">
      <div className="container-fluid row">

        <div className="container-fluid row d-flex justify-content-center my-3 text-center tarjetasProductos">
          <h2>Item Detail</h2>
        </div>

        <div className="container-fluid row d-flex justify-content-center my-3 text-center">

          {loading ? <Loading /> : (
            (product && product.id) ? (<ItemDetail
              key={`detail-${product.id}`}
              id={product.id}
              title={product.brand + ' ' + product.model}
              description={product.description}
              price={product.price}
              pictureUrl={product.image}
              stock={product.stock}
              category={product.category}
            />
            ) : <p>Producto no encontrado</p>
          )
          }
        </div>
      </div>
    </div >
  )
}

export default ItemDetailContainer
