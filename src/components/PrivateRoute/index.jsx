import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth'

export const PrivateRoute = ({ component, ...rest }) => {
  const usuario = useAuth()

  const _render = ({ location }) =>
    usuario ? (
      component
    ) : (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: location },
        }}
      />
    );

  return <Route {...rest} render={_render} />;
};
