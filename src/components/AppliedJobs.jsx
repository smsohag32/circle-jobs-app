import { useContext } from "react";
import { AppliedJobsContext } from "../App";

const AppliedJobs = () => {
  const { appliedJob } = useContext(AppliedJobsContext);
  console.log(appliedJob);

  return <div></div>;
};

export default AppliedJobs;
