import CartWidget from '../CartWidget/CartWidget';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap' // React-bootstrap components are imported
import "./NavBar.css"
import UserNav from '../UserNav/UserNav';

// FontAwesome is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

// iconSlider is created for the brand icon
const iconSlider = <FontAwesomeIcon icon={faSlidersH} />

const NavBar = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {iconSlider}
          Sonido Codeado
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/accesorios">Accesorios</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/auriculares">Auriculares</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/consolas">Consolas de Mezcla</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/interfaces">Interfaces de Audio</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/microfonos">Micrófonos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/monitores">Monitores</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Marcas" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/brand/AKG">AKG</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/brand/Behringer">Behringer</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/brand/Focusrite">Focusrite</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/brand/Samson">Samson</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/brand/Sennheiser">Sennheiser</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/brand/Rode">Rode</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/brand/Shure">Shure</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/faq">Preguntas Frecuentes</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>

          <UserNav />

          <CartWidget />

        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default NavBar