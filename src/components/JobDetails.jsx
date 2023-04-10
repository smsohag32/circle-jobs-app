import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobDetail = useLoaderData();
  console.log(jobDetail);
  const {
    jobResponsibility,
    jobDescription,
    experiences,
    educationalRequirements,
  } = jobDetail;
  return (
    <div className="default-container py-16 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-1 md:col-span-2">
        <p>
          <span className="font-bold text-sm">Job Description:</span>{" "}
          <small>{jobDescription}</small>
        </p>
        <p>
          <span className="font-bold text-sm">Job Responsibility: </span>
          <small>{jobResponsibility}</small>
        </p>
        <p>
          <span className="font-bold text-sm">Educational Requirement: </span>{" "}
          <br /> {educationalRequirements}
        </p>
        <p>
          <span className="font-bold text-sm">Experiences: </span>
          <br />
          {experiences}
        </p>
      </div>
      <div className="bg-gray-100 flex flex-col p-7">
        <div className="">
          <h5>Job Details</h5>
          <hr />
          <p></p>
          <p></p>
          <h5>Contact Information</h5>
          <hr />
        </div>
        <button className="primary-btn">Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetails;
