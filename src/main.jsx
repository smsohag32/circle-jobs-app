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
import JobDetails from "./components/JobDetails";
import AppliedJobs from "./components/AppliedJobs";
import loadDetail from "./utilities/loadDetail";

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
      },
      {
        path: "statistic",
        element: <Statistic />,
      },
      {
        path: "applied",
        element: <AppliedJobs />,
      },
      {
        path: "blog",
        element: <Blogs />,
      },
      {
        path: "job/details/:blogId",
        element: <JobDetails />,
        loader: loadDetail,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
