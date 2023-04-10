import React from "react";

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
    <div className="border p-10 rounded-sm">
      <img src={companyLogo} alt="companyLogo" />
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
      <button className="secondary-btn">View Details</button>
    </div>
  );
};

export default Job;
