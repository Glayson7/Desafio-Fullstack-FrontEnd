import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuthentication = (Component) => {
  const AuthenticatedComponent = (props) => {
    const token = localStorage.getItem('access_token');

    // Se o token existir, renderiza o componente passado para withAuthentication
    if (token) {
      return <Component {...props} />;
    }

    // Se não, redireciona para a página de login
    return <Navigate to="/login" />;
  };

  return AuthenticatedComponent;
};

export default withAuthentication;
