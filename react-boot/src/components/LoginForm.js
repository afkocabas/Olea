// Bootstrap Components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Components
import CustomAlert from './CustomAlert';

// Hooks
import useForm from '../hooks/useForm';
import useAlert from '../hooks/useAlert';

// React
import {useState} from 'react';


function LoginForm() {
  const {values, handleChange}  = useForm({initialState: {username: '', password: ''}});
  const [showAlert, raiseAlert] = useAlert(false);
  const [alertMessage, setAlertMessage] = useState('');

  const MESSAGE_FOR_EMPTY_FIELDS = 'Please fill in all fields.';
  const MESSAGE_INVALID_CREDENTIALS = 'Invalid username or password.';

  const validateForm = () => {
    if (values.username === '' || values.password === '') {
      setAlertMessage(MESSAGE_FOR_EMPTY_FIELDS);
      return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {

      console.log(values);

    }
    else {

      raiseAlert();

    }

  }

  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control 
        name='username'
        type="text" 
        placeholder="Enter username" 
        value={values.username}
        onChange={handleChange}
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        name='password'
        type="password" 
        placeholder="Password" 
        value={values.password} 
        onChange={handleChange}
        />
      </Form.Group>

        <div className= "d-flex justify-content-center mb-3">
          <Button variant="success" type="submit"> Login </Button>
        </div>

        {showAlert && <CustomAlert variant="danger" message={alertMessage}/>}
    </Form>
  );
}

export default LoginForm;