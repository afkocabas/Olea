import DropDown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

import useUser from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function UserDropDown() {
    const {contextLogout} = useAuth();
    const {userName} = useUser();
    const navigation = useNavigate();

    const handleLogout = () => {
        contextLogout();
        navigation('/login');
    }
    return (
        <DropDown>
            <DropDown.Toggle variant="success" id="dropdown-basic">
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