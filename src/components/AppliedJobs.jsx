import { useContext } from "react";
import { AppliedJobsContext } from "../App";
import { Link } from "react-router-dom";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const { appliedJob } = useContext(AppliedJobsContext);
  const {} = appliedJob;

  return (
    <div className="default-container py-16">
      <div>
        {/* dropdown */}
        <div className="dropdown dropdown-bottom">
          <label tabIndex={0} className="btn m-1">
            Click
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
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
