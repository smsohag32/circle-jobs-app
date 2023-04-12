import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
const AppliedJob = ({ job }) => {
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
    <div className="flex border my-6 p-7 flex-col md:flex-row justify-between md:items-center">
      <div className="flex flex-col md:flex-row  md:items-center gap-6">
        <span className="w-44 flex items-center justify-center h-44 bg-gray-100">
          <img
            className="object-contain w-32 h-10"
            src={companyLogo}
            alt="companyLogo"
          />
        </span>
        <div className="">
          <h4 className="font-bold">{jobTitle}</h4>
          <p className="text-sm mt-2">{companyName}</p>
          <div className="flex my-3 gap-3">
            <span className="primary-text border py-1 px-2 border-blue-500">
              {jobType}
            </span>
            <span className="primary-text border py-1 px-1 border-blue-500">
              {employmentStatus}
            </span>
          </div>
          <div>
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
        </div>
      </div>

      {/* view details button */}
      <div className="mt-7 md:mt-0">
        <Link to={`/job/details/${id}`}>
          <button className="secondary-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default AppliedJob;
