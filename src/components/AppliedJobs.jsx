import { useContext } from "react";
import { AppliedJobsContext } from "../App";
import { Link } from "react-router-dom";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const { appliedJob } = useContext(AppliedJobsContext);
  const {} = appliedJob;

  return (
    <div className="default-container py-16">
      <div className="text-right">
        {/* dropdown */}

        <select id="short" className="px-2 py-2 border-2 rounded-sm">
          <option selected value="Show All">
            <button>Short by: </button>
          </option>
          <option value="remote">
            <button>Remote</button>
          </option>
          <option value="onsite">
            <button>Onsite</button>
          </option>
        </select>
      </div>
      <div>
        {appliedJob?.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
