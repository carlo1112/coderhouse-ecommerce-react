import CartWidget from '../CartWidget/CartWidget';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'

const iconSlider = <FontAwesomeIcon icon={faSlidersH} />

const NavBar = ({ cantidadItems }) => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          {iconSlider}
          ~Sonido Codeado~
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">~Inicio</Nav.Link>
            <NavDropdown title="~Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/2.1">Accesorios</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.2">Auriculares</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.3">Consolas de Mezcla</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.4">Interfaces de Audio</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.5">Micrófonos</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.6">Monitores</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="~Marcas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Audio-Technica</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">AKG</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Focusrite</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Interfaces de Audio</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Rode</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Shure</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">~Preguntas Frecuentes</Nav.Link>
            <Nav.Link href="#link">~Contacto</Nav.Link>
          </Nav>
          <CartWidget cantidad={cantidadItems} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}



export default NavBar
