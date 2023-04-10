import React, { useContext } from "react";
import { JobsContext } from "../App";
import Job from "./Job";

const Jobs = () => {
  const jobsData = useContext(JobsContext);
  console.log(jobsData);

  return (
    <div className="default-container pb-16">
      <div className="flex justify-center items-center flex-col">
        <h2 className="font-bold text-4xl opacity-80">Featured Jobs</h2>
        <p className="text-gray-800 text-center px-3 md:px-0 md:w-[50%]">
          <small>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            similique eos sapiente velit esse libero.
          </small>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {jobsData?.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
