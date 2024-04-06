import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import useForm from '../hooks/useForm';
import useAlert from '../hooks/useAlert';

import CustomAlert from './CustomAlert';

function RegisterForm() {
    const {values, handleChange}  = useForm({initialState: {username: '', password: '', confirm: ''}});
    const [showAlert, raiseAlert] = useAlert(false);    
    const [alertMessage, setAlertMessage] = useState('');

    const MESSAGE_FOR_EMPTY_FIELDS = 'Please fill in all fields.';
    const MESSAGE_FOR_PASSWORD_MISMATCH = 'Passwords do not match.';
    const MESSAGE_FOR_USERNAME_TAKEN = 'Username is already taken.';

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
            {showAlert && <CustomAlert variant='danger' message={alertMessage} />}
        </Form>
    );
}


export default RegisterForm;