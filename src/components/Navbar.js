import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget.js';

const NavBar =()=> {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img
              alt=""
              src="../img/favicon.png"
              width="30"
              height=""
              className="d-inline-block align-top mx-3"
            />
            María Bárbara
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">INICIO</Nav.Link>
            <Nav.Link href="#">PRODUCTOS</Nav.Link>
            <Nav.Link href="#">LABORATORIO</Nav.Link>
            <Nav.Link href="#">NOSOTROS</Nav.Link>
            <Nav.Link href="#">CONTACTO</Nav.Link>
            <Nav.Link href="#"><CartWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    )
    }

export default NavBar;