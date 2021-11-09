import NavBar from "../NavBar/NavBar"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import Faq from "../Faq/Faq"
import Contacto from "../Contacto/Contacto"
import Cart from "../Cart/Cart"
import "./Main.css"
import { Switch, Route } from 'react-router-dom'

// Main contiene los componentes NavBar e ItemListContainer
const Main = () => {
  // Se crean dos constantes para pasar sus valores como props a los componentes correspondientes
  const user = "Charly";
  const stockCarrito = 5;

  return (
    <main>
      <NavBar cantidadItems={stockCarrito} />

      <Switch>
        <Route path="/" exact>
          <ItemListContainer greeting={`¡Bienvenido ${user} a Sonido Codeado!`} />
        </Route>

        <Route path="/faq" exact>
          <Faq />
        </Route>

        <Route path="/contacto" exact>
          <Contacto />
        </Route>

        <Route path="/cart" exact>
          <Cart />
        </Route>

        <Route path="/item/:id_item" exact>
          <ItemDetailContainer />
        </Route>

        {/* Acá le puede llegar el valor /categoria/'categoria' o /marca/'marca' */}
        <Route path="/:filtro/:id_filtro" exact>
          <ItemListContainer greeting={""} />
        </Route>

      </Switch>
    </main>
  )
}

export default Main
