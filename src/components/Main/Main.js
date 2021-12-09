import { Switch, Route } from 'react-router-dom'
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import Faq from "../Faq/Faq"
import Contact from "../Contact/Contact"
import Cart from "../Cart/Cart"
import "./Main.css"
import Login from "../Login/Login"
import Register from "../Register/Register"
import { useAuth } from '../Context/AuthContext'
import Footer from '../Footer/Footer'

const Main = () => {
  const { loggedUser } = useAuth()
  const userName = loggedUser ? loggedUser.name : ''
  return (
    <main>
      <Switch>

        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        <Route path="/" exact>
          <ItemListContainer greeting={`¡Bienvenido ${userName} a Sonido Codeado!`} />
        </Route>

        <Route path="/faq" exact>
          <Faq />
        </Route>

        <Route path="/contacto" exact>
          <Contact />
        </Route>

        <Route path="/cart" exact>
          <Cart loggedUser={loggedUser} />
        </Route>

        <Route path="/item/:id_item" exact>
          <ItemDetailContainer />
        </Route>

        {/* /category/'category' or /brand/'brand' */}
        <Route path="/:filter/:id_filter" exact>
          <ItemListContainer greeting={""} />
        </Route>

      </Switch>

      <Footer />
    </main>
  )
}

export default Main
