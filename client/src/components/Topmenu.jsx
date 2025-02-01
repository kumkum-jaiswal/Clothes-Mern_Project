import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from "../images/logo.jpg";
const Topmenu=()=>{
    return(
        <>
        
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width="100%" height="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id='nav'>
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
            <Nav.Link as={Link} to="men">Mens Collection</Nav.Link>
            <Nav.Link as={Link} to="women">Women Collection</Nav.Link>
            <Nav.Link as={Link} to="kids">Kids Collection</Nav.Link>
            <Nav.Link as={Link} to="cart">My Cart</Nav.Link>
            {/* <Nav.Link href="">Contact us</Nav.Link> */}
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="men">Mens</NavDropdown.Item>
              <NavDropdown.Item href="women">
               Womens
              </NavDropdown.Item>
              <NavDropdown.Item href="kids">Kids</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="home">
                All
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

          
     

          
        </>
    )
}

export default Topmenu;