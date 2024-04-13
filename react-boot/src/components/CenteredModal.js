import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import useAuth from '../hooks/useAuth';
import {useNavigate} from 'react-router-dom';

function CenteredModal(props) {
  const {isAuthenticated} = useAuth();
  const navigation = useNavigate();
  

  const handleNavigationToLogin = () => {
    navigation('/login',);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.course.course_name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Course Content:</h6>
        <p>
          {props.course.course_info}
        </p>
        <h6>Course Details:</h6>
      </Modal.Body>
      <Modal.Footer>

        {isAuthenticated ? (
          <Button variant="success">Enroll</Button>
        ) : (
          <Button variant="secondary" onClick={handleNavigationToLogin} >Login to Enroll</Button>
        )}

      </Modal.Footer>
    </Modal>
  );
}

export default CenteredModal;