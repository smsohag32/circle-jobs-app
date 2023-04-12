import { useLoaderData, useParams } from "react-router-dom";
import {
  PhoneIcon,
  MapPinIcon,
  AtSymbolIcon,
  CurrencyDollarIcon,
  IdentificationIcon,
} from "@heroicons/react/24/solid";
import { useContext } from "react";
import { AppliedJobsContext } from "../App";
import TitleBanner from "./TitleBanner";
const JobDetails = () => {
  const jobDetail = useLoaderData();
  const { handleApplyJob } = useContext(AppliedJobsContext);

  const {
    jobResponsibility,
    jobTitle,
    jobDescription,
    experiences,
    educationalRequirements,
    contactInfo,
    companyLocation,
    salary,
  } = jobDetail;

  return (
    <>
      <TitleBanner>Details Job</TitleBanner>
      <div className="default-container py-16 grid grid-cols-1 md:grid-cols-3  gap-4">
        <div className="col-span-1 md:col-span-2">
          <p className="mb-5">
            <span className="font-bold text-sm">Job Description: </span>
            <small>{jobDescription}</small>
          </p>
          <p className="mb-5">
            <span className="font-bold text-sm">Job Responsibility: </span>
            <small>{jobResponsibility}</small>
          </p>
          <p className="mb-5">
            <span className="font-bold mb-2 text-sm">
              Educational Requirement:{" "}
            </span>
            <br /> {educationalRequirements}
          </p>
          <p className="mb-5">
            <span className="font-bold text-sm">Experiences: </span>
            <br />
            {experiences}
          </p>
        </div>
        <div className=" flex flex-col">
          <div className="bg-gray-100 p-7 rounded-sm">
            <h5 className="pb-2">Job Details</h5>
            <hr />
            <p className="flex items-center text-sm text-gray-700 my-2 gap-2">
              <span>
                <CurrencyDollarIcon className="h-4 w-4 opacity-70 primary-text" />
              </span>
              <span>Salary: {salary}</span>
            </p>
            <p className="flex items-center mb-2 text-sm text-gray-700 gap-2">
              <span>
                <IdentificationIcon className="h-4 w-4 opacity-70 primary-text" />
              </span>
              <span>Job Title: {jobTitle}</span>
            </p>
            <h5 className="py-2">Contact Information</h5>
            <hr />
            <p className="flex items-center my-2 text-sm text-gray-700 gap-2">
              <span>
                <PhoneIcon className="h-4 w-4 opacity-70 primary-text" />
              </span>
              <span>Phone: </span>
              {contactInfo.phone}
            </p>
            <p className="flex items-center my-2 text-sm text-gray-700 gap-2">
              <span>
                <AtSymbolIcon className="h-4 w-4 opacity-70 primary-text" />
              </span>
              <span>Email: </span>
              {contactInfo.email}
            </p>
            <p className="flex items-center my-2 text-sm text-gray-700 gap-2">
              <span>
                <MapPinIcon className="h-4 w-4 opacity-70 primary-text" />
              </span>
              <span>Address: </span>
              {companyLocation}
            </p>
          </div>
          <button
            onClick={() => handleApplyJob(jobDetail)}
            className="primary-btn mt-5"
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
