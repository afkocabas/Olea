import { useContext } from "react";
import {UserContext} from "../contexts/UserContext";

const useUser = () => {
    const contextValues = useContext(UserContext);
    return contextValues;
}

export default useUser;