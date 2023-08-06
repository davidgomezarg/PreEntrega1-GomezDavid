import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget.js';
import {Link} from "react-router-dom";

const NavBar =()=> {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
          <img
              alt="Logo"
              src="../img/favicon.png"
              width="30"
              height=""
              className="d-inline-block align-top mx-3"
            />
            María Bárbara
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">INICIO</Nav.Link>
            <Nav.Link as={Link} to="category/frescos">FRESCOS</Nav.Link>
            <Nav.Link as={Link} to="category/secos">SECOS</Nav.Link>
            <Nav.Link as={Link} to="category/conservas">CONSERVAS</Nav.Link>
            <Nav.Link as={Link} to="category/semillas">SEMILLA</Nav.Link>
            <Nav.Link as={Link} to="/cart"><CartWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    )
    }

export default NavBar;