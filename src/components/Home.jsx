import React from "react";
import HeaderBanner from "./HeaderBanner";
import JobsCategory from "./JobsCategory";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const categoriesData = useLoaderData();
  console.log(categoriesData);
  return (
    <>
      <div className="bg-gray-100">
        <HeaderBanner />
      </div>
      <JobsCategory categoriesData={categoriesData} />
    </>
  );
};

export default Home;
