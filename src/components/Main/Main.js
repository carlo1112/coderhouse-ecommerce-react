import NavBar from "../NavBar/NavBar"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

// Main contiene los componentes NavBar e ItemListContainer
const Main = () => {
  // Se crean dos constantes para pasar sus valores como props a los componentes correspondientes
  const user = "Charly";
  const stockCarrito = 5;

  return (
    <main>
      <NavBar cantidadItems={stockCarrito} />
      <ItemListContainer greeting={`¡Bienvenido ${user} a Sonido Codeado!`} />
      <ItemDetailContainer />
    </main>
  )
}

export default Main
