import React from 'react'
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children}) {
    const [token, setToken] = useCookies(['refresh_token']);
    if (!token.refresh_token) {
        return <Navigate to="/" replace />;
      }
    
      return children;
}

export default PrivateRoute