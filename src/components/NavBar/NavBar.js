import CartWidget from '../CartWidget/CartWidget';
// Se importan componentes de react-bootstrap
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'

// Se importan FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

// Se crea variable para el icono
const iconSlider = <FontAwesomeIcon icon={faSlidersH} />

// NavBar genera el menú Navbar que a su vez contiene al componente CartWidget
const NavBar = ({ cantidadItems }) => {
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
              <NavDropdown.Item as={Link} to="/categoria/accesorios">Accesorios</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/auriculares">Auriculares</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/consolas">Consolas de Mezcla</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/interfaces">Interfaces de Audio</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/microfonos">Micrófonos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/monitores">Monitores</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Marcas" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/marca/AKG">AKG</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/marca/Behringer">Behringer</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/marca/Focusrite">Focusrite</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/marca/Samson">Samson</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/marca/Sennheiser">Sennheiser</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/marca/Rode">Rode</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/marca/Shure">Shure</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/faq">Preguntas Frecuentes</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
          <CartWidget cantidad={cantidadItems} />
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default NavBar