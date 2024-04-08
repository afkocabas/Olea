import {AuthContext} from '../contexts/AuthContext';
import { useContext } from 'react';

const useAuth = () => {
    const  contextValues  = useContext(AuthContext);
    return contextValues;
}


export default useAuth;