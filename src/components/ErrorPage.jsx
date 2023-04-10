import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  // const { error, status } = useRouteError();
  // console.log(error, status);
  return (
    <div className="flex justify-center items-center">
      <p>Error page</p>
    </div>
  );
};

export default ErrorPage;
