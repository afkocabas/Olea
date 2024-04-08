// Bootstrap Components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Components
import CustomAlert from './CustomAlert';

// Hooks
import useForm from '../hooks/useForm';
import useAlert from '../hooks/useAlert';
import useAuth from '../hooks/useAuth';
import useUser from '../hooks/useUser';


// React
import {useState} from 'react';

// React Dom
import {useNavigate} from 'react-router-dom';

// API calls
import { loginUser } from '../api/userService';


function LoginForm() {
  const {values, handleChange}  = useForm({initialState: {username: '', password: ''}});
  const [showAlert, raiseAlert] = useAlert(false);
  const [alertMessage, setAlertMessage] = useState('');

  const navigation = useNavigate();


  // ContextLogin Function takes a parameter, token
  const {contextLogin} = useAuth();
  const {setUserID, setUserName} = useUser(); 
  


  const MESSAGE_FOR_EMPTY_FIELDS = 'Please fill in all fields.';
  const MESSAGE_INVALID_CREDENTIALS = 'Invalid username or password.';

  const validateForm = () => {
    if (values.username === '' || values.password === '') {
      setAlertMessage(MESSAGE_FOR_EMPTY_FIELDS);
      return false;
    }
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {

      // TODO: Add logic to authenticate user
      // Step 1: Send a POST request to the /login endpoint with the username and password
      try {
        const response = await loginUser(values);
        // Step 2: If the credentials are valid, the server will respond with a 200 status code and a token
        if (response.status === 200) {
          console.log('Login successful');
          console.log(response.data);
          // Step 3: Extract the related data from the response 
          const token = response.data.token
          const userId = response.data.user.id;
          const userName = response.data.user.username;
          localStorage.setItem('token', token);
          // Step 4: Update authContext with the token
          contextLogin(token);
          // Step 5: Update userContext with the user information
          setUserID(userId);
          setUserName(userName);
          navigation('/home');

          // Step 6: Redirect the user to the home page
        }  

      }

      catch (error) {
        console.log(error);
        // If the credentials are invalid, the server will respond with a 401 status code
        // If the server is down, the server will respond with a 500 status code
        if (error.response.status === 401) {
          setAlertMessage(MESSAGE_INVALID_CREDENTIALS);
          raiseAlert();
        } 

        else if (error.response.status === 500) {
          setAlertMessage('Server is down. Please try again later.');
        }
      }
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