import DropDown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

import useUser from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';

import Cookie from 'js-cookie';

function UserDropDown() {
    const {contextLogout} = useAuth();
    const {userName} = useUser();
    const navigation = useNavigate();

    const handleLogout = () => {
        contextLogout();
        localStorage.removeItem('token');
        Cookie.remove('token')
        navigation('/login');
    }
    return (
        <DropDown>
            <DropDown.Toggle variant="success" id="dropdown-basic">
                <FontAwesomeIcon icon={faUser} style={{color: "white", marginRight: "8px"}} />
                {userName}
            </DropDown.Toggle>
            <DropDown.Menu>
                <DropDown.Item as={Link} to="/profile">Profile</DropDown.Item>
                <DropDown.Divider />
                <DropDown.Item onClick={handleLogout}>Logout</DropDown.Item>
            </DropDown.Menu>
        </DropDown>
    );
}

export default UserDropDown;