import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
const Job = ({ job }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    employmentStatus,
    jobType,
    companyLocation,
    salary,
  } = job;
  return (
    <div data-aos="fade-up" className="border p-10 rounded-sm">
      <img
        className="w-40 mb-2 h-12 object-contain"
        src={companyLogo}
        alt="companyLogo"
      />
      <h4 className="font-bold my-1">{jobTitle}</h4>
      <p className="text-gray-700 text-sm">{companyName}</p>
      <div className="flex my-3 gap-3">
        <span className="primary-text border rounded-sm py-1 px-2 border-blue-500">
          {jobType}
        </span>
        <span className="primary-text border rounded-sm py-1 px-2 border-blue-500">
          {employmentStatus}
        </span>
      </div>
      <div className="mb-4">
        <p className="flex text-sm items-center  md:flex-row gap-2">
          <span>
            <MapPinIcon className="h-4 w-4 text-gray-400" />
          </span>
          {companyLocation}
          <span>
            <CurrencyDollarIcon className="h-4 w-4 text-gray-400" />
          </span>
          {salary}
        </p>
      </div>
      <Link to={`./job/details/${id}`}>
        <button className="secondary-btn">View Details</button>
      </Link>
    </div>
  );
};

export default Job;
