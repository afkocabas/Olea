import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import UserDropDown from './UserDropDown';
import useAuth from '../hooks/useAuth';


function NavBar() {
    const {isAuthenticated } = useAuth();

    return (
        <Navbar bg="success" data-bs-theme="dark" sticky='top' className='mb-3 navbar'>
            <Container>
            <Nav>
                <Navbar.Brand as={Link} to="/home">Olea</Navbar.Brand>
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/features">Features</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                { isAuthenticated ? <UserDropDown />: <Nav.Link as={Link} to="/login">Log In</Nav.Link>}
            </Nav>
            </Container>
      </Navbar>
    );
}

export default NavBar;