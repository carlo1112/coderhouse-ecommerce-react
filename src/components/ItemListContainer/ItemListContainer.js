import './ItemListContainer.css';

// Contenedor para mostrar items, actualmente solo muestra un saludo recibido de un componente superior.
const ItemListContainer = ({ greeting }) => {
  return (
    <div className="itemListContainer">
      <h2>{greeting}</h2>
    </div>
  )
}

export default ItemListContainer
