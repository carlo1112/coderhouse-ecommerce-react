import Item from "./Item/Item"

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item) =>
        <Item
          key={item.id}
          id={item.id}
          title={item.brand + ' ' + item.model}
          description={item.description}
          price={item.price}
          pictureUrl={item.image}
          stock={item.stock}
          category={item.category}
        />
      )}
    </>
  )
}

export default ItemList