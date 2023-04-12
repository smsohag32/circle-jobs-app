import React from "react";
import vector from "/Vector.png";
const TitleBanner = ({ children }) => {
  return (
    <div className="min-h-16 relative bg-gray-50 py-7 flex justify-center items-center">
      <div className="p-5">
        <h1 className="text-2xl font-bold opacity-60">{children}</h1>
      </div>
      <img className="absolute w-40 left-20 bottom-0" src={vector} alt="" />
    </div>
  );
};

export default TitleBanner;
