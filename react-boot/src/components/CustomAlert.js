import Alert from 'react-bootstrap/Alert';

function CustomAlert({ variant, message }) {
  return (
    <Alert variant={variant} className='d-flex justify-content-center'>
      {message}
    </Alert>
  );
}

export default CustomAlert;
