import React from "react";
import { Link } from "react-router-dom";

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
    <div className="flex border my-6 p-7 flex-col md:flex-row justify-between items-center">
      <div className="flex items-center gap-6">
        <img src={companyLogo} alt="companyLogo" />
        <div className="">
          <h4>{jobTitle}</h4>
          <p>{companyName}</p>
          <div className="flex gap-3">
            <span className="primary-text border py-1 px-2 border-blue-500">
              {jobType}
            </span>
            <span className="primary-text border py-1 px-1 border-blue-500">
              {employmentStatus}
            </span>
          </div>
          <div>
            <p>
              <span>icon</span>
              {companyLocation} <span>icon</span>
              {salary}
            </p>
          </div>
        </div>
      </div>

      {/* view details button */}
      <div>
        <Link to={`/job/details/${id}`}>
          <button className="secondary-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default AppliedJob;
