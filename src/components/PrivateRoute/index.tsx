import React, { ReactNode, useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { AppContext } from "../../App";

export const PrivateRoute = ({
  children,
  ...rest
}: {
  children: ReactNode;
  path: string;
}) => {
  const { store } = useContext(AppContext);

  const _render = ({ location }: { location: any }) =>
    store?.usuario ? (
      children
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
