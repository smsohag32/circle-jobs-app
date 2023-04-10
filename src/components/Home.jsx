import React from "react";
import HeaderBanner from "./HeaderBanner";
import JobsCategory from "./JobsCategory";
import { useLoaderData } from "react-router-dom";
import Jobs from "./Jobs";

const Home = () => {
  const categoriesData = useLoaderData();
  console.log(categoriesData);
  return (
    <>
      <div className="bg-gray-100">
        <HeaderBanner />
      </div>
      <JobsCategory categoriesData={categoriesData} />
      <Jobs />
    </>
  );
};

export default Home;
