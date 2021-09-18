import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, roles, ...rest }) {
  return (
      <Route {...rest} render={props => {
          if (!localStorage.getItem('user')) {
              return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          }

          // logged in so return component
          return <Component {...props} />
      }} />
  );
}

export default PrivateRoute;