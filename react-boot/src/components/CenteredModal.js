import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import BorderSpinner from './BorderSpinner';
import CustomAlert from './CustomAlert';

import useAuth from '../hooks/useAuth';
import useUser from '../hooks/useUser';
import useEnroll from '../hooks/useEnroll';
import useAlert from '../hooks/useAlert';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Row, Col} from 'react-bootstrap';

function CenteredModal(props) {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("");

  const {loading, enroll} = useEnroll();
  const [showAlert, raiseAlert] = useAlert(false);

  const {userID} = useUser();
  const {isAuthenticated} = useAuth();
  const navigation = useNavigate();

  const ENROLLMENT_CONFLICT = "You are already enrolled in this course.";
  const SUCCESSFUL_ENROLLMENT = "You have successfully enrolled in this course.";

  const handleEnroll = async () => {

    try {
      const response = await enroll(userID, props.course.course_id);
      if (response.status === 201) {
        setAlertMessage(SUCCESSFUL_ENROLLMENT);
        setAlertVariant("success");
        raiseAlert();
      }

    }
    catch (error) {
      console.log(error.response.status)
      if (error.response.status === 409) {
        setAlertVariant("danger");
        setAlertMessage(ENROLLMENT_CONFLICT);
        raiseAlert();
      }
    }

  }
    

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

        <Row>

          <Col m='6' >
            <span><strong>Scope:</strong> {props.course.course_major}</span>
            <br />
            <span><strong>Duration</strong>: {props.course.course_duration} hours</span>
          </Col>
          <Col m='6'>
            <span><strong>Instructor:</strong> {props.course.course_teacher}</span>
            <br />
            <span><strong>Price:</strong> ${props.course.course_price}</span>
          </Col>

        </Row>




        {showAlert && <CustomAlert message={alertMessage} variant={alertVariant} />}
      </Modal.Body>
      <Modal.Footer>

        {isAuthenticated ? (
          loading ? <BorderSpinner /> :
          <Button variant="success" onClick={handleEnroll}>Enroll</Button>
        ) : (
          <Button variant="secondary" onClick={handleNavigationToLogin} >Login to Enroll</Button>
        )}

      </Modal.Footer>
    </Modal>
  );
}

export default CenteredModal;