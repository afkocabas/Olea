import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState('');

    const contextLogin = (token) => {
        setToken(token);
        setIsAuthenticated(true);
    }

    const contextLogout = () => {
        setToken('');
        setIsAuthenticated(false);
    }

    const contextValues = {
        isAuthenticated,
        token,
        contextLogin,
        contextLogout
    }
    
    return (
        <AuthContext.Provider value={contextValues}>
        {children}
        </AuthContext.Provider>
    );
};
