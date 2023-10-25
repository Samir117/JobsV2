import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ isAuthenticated, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: '/Login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
