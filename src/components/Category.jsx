import React from "react";

const Category = ({ singleCategory }) => {
  const { category, jobAvailable, categoryIcon } = singleCategory;
  return (
    <div data-aos="flip-up" className="p-8  flex flex-col bg-gray-100">
      <img className="w-10 h-10" src={categoryIcon} alt="categoryIcon" />
      <div className="mt-auto pt-4">
        <h4 className="font-semibold text-md">{category}</h4>
        <p className="text-gray-800">
          <small>{jobAvailable} Jobs Available</small>
        </p>
      </div>
    </div>
  );
};

export default Category;
