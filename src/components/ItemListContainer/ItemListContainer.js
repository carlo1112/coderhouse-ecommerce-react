import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="itemListContainer">
      <h2>{greeting}</h2>
    </div>
  )
}

export default ItemListContainer
