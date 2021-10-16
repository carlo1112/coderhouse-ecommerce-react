import NavBar from "../NavBar/NavBar"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

const Main = () => {
  const user = "Charly";
  const stock = 5;

  return (
    <main>
      <NavBar cantidadItems={stock} />
      <ItemListContainer greeting={`Bienvenido ${user} a Sonido Codeado`} />
    </main>
  )
}

export default Main
