import { useAuth } from '../Context/AuthContext'
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import "./UserNav.css"

const UserNav = () => {

  const { signOut, loggedUser } = useAuth()

  return (
    <div className="header">
      <div className="logger-user">
        {
          loggedUser ?
            (
              <>
                <div>{loggedUser.name}</div>
                <Button className="btn btn-link btn-anchor" onClick={signOut}>Cerrar sesión</Button>
              </>
            ) : (
              <Button className="btn btn-link btn-anchor login" as={Link} to={`/login`}>Ingresar</Button>
            )
        }
      </div>
    </div>
  )
}

export default UserNav
