import React, { useState } from 'react'

const Context = React.createContext()

// Se crea funcion que va a tener todo el resto de funciones
// Funcion proveedora que va a envolver a App y permitirá que cualquier otro componente acceda a metodos, variables, estados, etc
const CartFunction = ({ children }) => {
  const [cart, setCart] = useState([]) // estado del carrito
  const [unidades, setUnidades] = useState(0) // unidades me dice cuantos productos distintos tengo
  const [total, setTotal] = useState(0) // total me guarda el total del carrito que llevo acumulado

  // Funcion con la que va a agregar los productos
  const onAdd = (producto, cantidad) => {

    if (!isInCart(producto.id)) {
      setCart(
        [...cart,
        {
          id: producto.id,
          nombre: producto.title,
          precio: producto.price,
          cantidad: cantidad,
          imagen: producto.pictureUrl,
          subtotal: producto.price * cantidad
        }
        ]
      )
      console.log(cart)
      console.log(`subtotal: ${producto.price * cantidad}`)
      setUnidades(unidades + 1) // agrego un producto y la cantidad de ese producto
      setTotal(total + (producto.price * cantidad))

      console.log(`Producto en carrito, ${producto.cantidad}, ${cantidad}, ${total}`)
    } else {
      // Actualizo el item
      const cartAux = cart.map((item) => {
        if (item.id === producto.id) {
          item.cantidad += cantidad
          item.subtotal += (producto.price * cantidad)
        }
        return item
      })
      setCart(cartAux)
      setTotal(total + (producto.price * cantidad))
    }

  }

  const isInCart = (id) => {
    return (cart.find(item => item.id === id))
  }

  const remove = (id, cantidad, precio) => {
    const carritoFiltrado = cart.filter((item) => item.id !== id)
    setCart(carritoFiltrado)
    setTotal(total - (cantidad * precio))
    setUnidades(unidades - 1)

  }

  const clear = () => {
    setCart([])
    setUnidades(0)
    setTotal(0)
  }

  return (
    <>
      <Context.Provider value={{ cart, unidades, total, onAdd, remove, clear }}>
        {children}
      </Context.Provider>
    </>
  )
}

export { CartFunction, Context }

