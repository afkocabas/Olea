import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import useForm from '../hooks/useForm';
import useAlert from '../hooks/useAlert';

import CustomAlert from './CustomAlert';

import {registerUser } from '../api/userService.js';


function RegisterForm() {
    const {values, handleChange}  = useForm({initialState: {username: '', password: '', confirm: ''}});
    const [showAlert, raiseAlert] = useAlert(false);    
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVariant, setAlertVariant] = useState('danger');



    const navigation = useNavigate(); 

    const MESSAGE_FOR_EMPTY_FIELDS = 'Please fill in all fields.';
    const MESSAGE_FOR_PASSWORD_MISMATCH = 'Passwords do not match.';
    const MESSAGE_FOR_USERNAME_TAKEN = 'Username is already taken.';
    const MESSAGE_FOR_SERVER_ERROR = 'Server error.';
    const MESSAGE_FOR_SUCCESSFUL_REGISTRATION = 'User registered successfully.';

    const validateForm = () => {
        if (
            values.username === '' || 
            values.password === '' || 
            values.confirm ===  '' 
        ) {  
            setAlertMessage(MESSAGE_FOR_EMPTY_FIELDS);
            return false;
        }

        if (values.password !== values.confirm) {
            setAlertMessage(MESSAGE_FOR_PASSWORD_MISMATCH);
            return false;
        }

        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await registerUser({username:values.username, password: values.password});

                if (response.status === 201) {
                    console.log('User registered successfully');
                    setAlertMessage(message => MESSAGE_FOR_SUCCESSFUL_REGISTRATION);
                    setAlertVariant('success');
                    raiseAlert();

                    // after 1 second, navigate to login page
                    setTimeout(() => {
                        navigation('/login');
                    }, 1000);   
                }
            }

            catch(error) {
                if(!error.response) {
                    console.log(error);
                    return;
                }
                if (error.response.status === 400) {
                    setAlertMessage(MESSAGE_FOR_USERNAME_TAKEN);
                    raiseAlert();
                }

                if (error.response.status === 500) {
                    setAlertMessage(MESSAGE_FOR_SERVER_ERROR);
                    raiseAlert();
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
            <Form.Control type="text" 
            placeholder="Enter username"
            name="username"
            value={values.username}
            onChange={handleChange}
             />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}

             />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Confirm Password"
            name="confirm"
            value={values.confirm}
            onChange={handleChange}
             />
        </Form.Group>
            <div className= "d-flex justify-content-center mb-3">
                <Button variant="success" type="submit"> Register </Button>
            </div>
            {showAlert && <CustomAlert variant={alertVariant} message={alertMessage} />}
        </Form>
    );
}


export default RegisterForm;