import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { JobsContext } from "../App";

const JobDetails = () => {
  const jobsData = useContext(JobsContext);
  console.log(jobsData);
  const id = useLoaderData();
  const matchingData = jobsData.find((job) => job.id == id);
  console.log(matchingData);
  return <div>job details</div>;
};

export default JobDetails;
