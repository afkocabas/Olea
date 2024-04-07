import {createContext, useState} from 'react';

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [userID, setUserID] = useState(''); // [1]
    const [userName, setUserName] = useState(''); // [2]

    const contextValues = {
        setUserID,
        setUserName,
        userID,
        userName
    }

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    );
}