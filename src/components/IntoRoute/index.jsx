import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth'

export const IntoRoute = ({ component, ...rest }) => {
  const usuario = useAuth()

  const _render = ({ location }) =>
    usuario ? <Redirect
    to={{
      pathname: "/dashboard",
      state: { from: location },
    }}
  /> : component

  return <Route {...rest} render={_render} />;
};
