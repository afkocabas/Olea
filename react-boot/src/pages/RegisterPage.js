import RegisterForm from "../components/RegisterForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function RegisterPage() {
    return (
        <>
        <div className="container mt-5 page">
            <div className="row">
                <div className="col col-md-4 mx-auto">
                    <h3 className="text-center">Register Olea</h3>
                    <RegisterForm />
                    <div className="text-center">
                        Already have an account? <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


export default RegisterPage;