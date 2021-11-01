/* function ItemList({ items }) {
 * // El componente va a recibir una prop `items` y va a mapear estos `items` al componente `<Item … />`
 * } 
 */
import Item from "./Item/Item"

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((producto) =>
        <Item
          id={producto.id}
          title={producto.marca + ' ' + producto.modelo}
          description={producto.descripcion}
          price={producto.precio}
          pictureUrl={producto.img}
          stock={producto.stock}
        />
      )}
    </>
  )
}

export default ItemList