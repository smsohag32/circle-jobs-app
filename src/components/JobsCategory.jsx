import React from "react";
import Category from "./Category";

const JobsCategory = ({ categoriesData }) => {
  return (
    <div className="default-container py-16">
      <div className="flex justify-center items-center flex-col">
        <h2 className="font-bold text-4xl opacity-80">Job Category</h2>
        <p className="text-gray-800 text-center px-3 md:px-0 md:w-[50%]">
          <small>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            similique eos sapiente velit esse libero.
          </small>
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-8">
        {categoriesData?.map((singleCategory) => (
          <Category singleCategory={singleCategory} key={singleCategory.id} />
        ))}
      </div>
    </div>
  );
};

export default JobsCategory;
