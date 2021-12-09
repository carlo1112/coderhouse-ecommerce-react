import { createContext, useState } from 'react'

const CartContext = createContext()

// Provider function that will wrap App and allow any other component to access methods, variables, states, etc.
const CartFunction = ({ children }) => {
  const KEY_CART = "cartLocalStorage"
  let cartLocalStorage = JSON.parse(localStorage.getItem(KEY_CART));

  const [cart, setCart] = useState(cartLocalStorage ? cartLocalStorage : [])  // "cart" is an array with products added to de cart

  localStorage.setItem(KEY_CART, JSON.stringify(cart));

  let totalAux = 0
  let quantityAux = 0
  if (cartLocalStorage) {
    cartLocalStorage.forEach((item) => {
      totalAux = totalAux + item.subtotal
      quantityAux = quantityAux + item.quantity
    })
  }

  const [units, setUnits] = useState(quantityAux)// "units" has the amount of products added to the cart
  const [total, setTotal] = useState(totalAux) // "total" has the total accumulated price of the products in the cart

  // onAdd, function that adds products to the cart
  const onAdd = (product, quantity) => {

    if (!isInCart(product.id)) {
      setCart(
        [...cart,
        {
          id: product.id,
          name: product.title,
          price: product.price,
          description: product.description,
          quantity: quantity,
          image: product.pictureUrl,
          subtotal: product.price * quantity
        }
        ]
      )
      setUnits(units + quantity)
      setTotal(total + (product.price * quantity))

    } else {
      // The item is updated
      const cartAux = cart.map((item) => {
        if (item.id === product.id) {
          item.quantity += quantity
          item.subtotal += (product.price * quantity)
        }
        return item
      })
      setUnits(units + quantity)
      setCart(cartAux)
      setTotal(total + (product.price * quantity))
    }
  }

  const isInCart = (id) => {
    return (cart.find(item => item.id === id))
  }

  const remove = (id, quantity, price) => {
    const filteredCart = cart.filter((item) => item.id !== id)
    setCart(filteredCart)
    setTotal(total - (quantity * price))
    setUnits(units - quantity)
  }

  const clear = () => {
    setCart([])
    setUnits(0)
    setTotal(0)
  }

  return (
    <>
      <CartContext.Provider value={{ cart, units, total, onAdd, remove, clear }}>
        {children}
      </CartContext.Provider>
    </>
  )
}

export { CartFunction, CartContext }