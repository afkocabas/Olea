import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import useAuth from '../hooks/useAuth';


function HomePage() {
    const {contextLogout} = useAuth();

    // HomePage to be a page class
    return (
        <Container className="mt-5">
            <h1>Home Page</h1>
            <Button onClick={contextLogout}>Logout</Button>
        </Container>
    )
}


export default HomePage;
