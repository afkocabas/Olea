import {Container} from "react-bootstrap";

import BorderSpinner from "../components/BorderSpinner";

function LoadingPage() {
    return (
        <Container className='text-center mt-5'>
            <BorderSpinner />
        </Container>
    );
}

export default LoadingPage;