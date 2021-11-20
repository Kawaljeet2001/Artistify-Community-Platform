import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const user = useSelector((state) => state.user.value);
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default ProtectedRoute;
