// import React from 'react'
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children}) {
    const [token, setToken] = useCookies(['refresh_token']);
    if (token.refresh_token) {
        return <Navigate to="/dashboard" replace />;
      }
    
      return children;
}

export default PublicRoute;