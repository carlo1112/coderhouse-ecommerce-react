import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from './ItemList/ItemList';
import productos from '../productos/productos'

// Contenedor para mostrar items, actualmente solo muestra un saludo recibido de un componente superior.
const ItemListContainer = ({ greeting }) => {

  const stock = 0
  const stock2 = 3

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
        <div className="container-fluid row d-flex justify-content-center my-3 text-center tarjetasProductos">
          <ItemList items={productos} />
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer
