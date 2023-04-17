import React, { useContext } from "react";
import { DataContext } from "../components/Providers/AuthInfoProvider";
import { Navigate } from "react-router-dom";

const SecureRoute = ({ children }) => {
  //   context   //

  const { user, loading } = useContext(DataContext);
  if (loading) {
    return (
      <div className="flex justify-center mt-[20%]">
        <progress className="progress w-56 "></progress>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/signIn">{children}</Navigate>;
};

export default SecureRoute;
