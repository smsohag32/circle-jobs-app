import React, { useContext, useState } from "react";
import { JobsContext } from "../App";
import Job from "./Job";

const Jobs = () => {
  const jobsData = useContext(JobsContext);
  const [isSee, setIsSee] = useState(false);

  //   handleSeeMore button
  const handleSeeMore = () => {
    setIsSee(true);
  };

  return (
    <div className="default-container pb-16">
      <div className="flex justify-center items-center mb-10 flex-col">
        <h2 className="font-bold text-4xl opacity-80">Featured Jobs</h2>
        <p className="text-gray-800 text-center px-3 md:px-0 md:w-[50%]">
          <small>
            Discover a wide range of job vacancies in various industries and job
            categories. Our 'All Jobs' section offers a comprehensive listing of
            all available job opportunities, making it easy for you to find and
            apply for jobs that match your skills and experience. Start your job
            search today and take the next step in your career.
          </small>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {jobsData?.slice(0, isSee ? 8 : 4).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        {!isSee && (
          <button onClick={handleSeeMore} className="primary-btn">
            See More
          </button>
        )}
      </div>
    </div>
  );
};

export default Jobs;
