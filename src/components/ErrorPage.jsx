import { FaceFrownIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <h1 className="font-extrabold text-6xl opacity-50">Opps !!!</h1>
        <div className="max-w-md text-center">
          <h2 className="my-10 font-extrabold text-9xl text-red-600 opacity-40">
            <span className="sr-only">Error</span>
            {status || 404}
          </h2>
          <p className="text-sm font-semibold md:text-sm text-gray-700 mb-8">
            {error?.message}
          </p>
          <Link to="/" className="primary-btn">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
