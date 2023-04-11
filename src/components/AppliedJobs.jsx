import { useContext } from "react";
import { AppliedJobsContext } from "../App";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const { filterJobs, filterValueSelected } = useContext(AppliedJobsContext);
  const {} = filterJobs;
  // selected filter value
  const jobsFilterValue = (event) => {
    filterValueSelected(event.target.value);
  };
  return (
    <div className="default-container py-16">
      <div className="text-right">
        {/* dropdown */}
        <label className="mr-4" htmlFor="short">
          Short by:
        </label>
        <select
          onChange={jobsFilterValue}
          className="px-2 py-2 border-2 rounded-sm"
        >
          <option value="all">All</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
        </select>
      </div>
      <div>
        {filterJobs?.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
