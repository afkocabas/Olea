import LoginForm from "../components/LoginForm"
import CenteredModal from "../components/CenteredModal"
import { Link } from "react-router-dom";

function LoginPage({showModal, setShowModal}) {

    return (
        <>
          <div className="container mt-5 page">

            <div className="row">

              <div className="col col-md-4 mx-auto">

                <h3 className="text-center">Login Olea</h3>

                <LoginForm />
                <div className="text-center">
                    Do not have an account yet? <Link to="/register">Register</Link>
                </div>

                <CenteredModal show={showModal} onHide={() => setShowModal(false)} />

              </div>

            </div>

          </div>
        </>

    )
}

export default LoginPage;