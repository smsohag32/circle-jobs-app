import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Statistic from "./components/Statistic";
import Blogs from "./components/Blogs";
import loadCategoriesData from "./utilities/loadCategories";
import loadJobsData from "./utilities/loadJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: loadJobsData,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: loadCategoriesData,
      },
      {
        path: "statistic",
        element: <Statistic />,
      },
      {
        path: "blog",
        element: <Blogs />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
