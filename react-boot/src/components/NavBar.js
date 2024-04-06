import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar bg="success" data-bs-theme="dark" sticky='top' className='mb-3 navbar'>
            <Container>
            <Nav>
                <Navbar.Brand as={Link} to="/">Olea</Navbar.Brand>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/features">Features</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/pricing">Profile</Nav.Link>
            </Nav>
            </Container>
      </Navbar>
    );
}

export default NavBar;