import React from 'react';
import { AuthProvider } from './AuthContext';
import { UserProvider } from './UserContext';

const AppContext = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </AuthProvider>
  );
};

export default AppContext;