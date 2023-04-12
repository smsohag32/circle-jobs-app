import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useEffect, useState } from "react";
import { addToDb, getAppliedJob } from "./utilities/fakedb";
import AOS from "aos";
import "aos/dist/aos.css";

// aos animation
AOS.init();

// context api
export const JobsContext = createContext([]);
export const AppliedJobsContext = createContext({});

// App component
function App() {
  const jobsData = useLoaderData();
  const [appliedJob, setAppliedJob] = useState([]);
  const [filterValueText, setFilterValueTExt] = useState("All");

  // handle apply job
  const handleApplyJob = (job) => {
    let applied = [];

    const isExist = appliedJob.find((job) => job.id == job.id);
    if (!isExist) {
      applied = [...appliedJob, job];
    } else {
      const remaining = appliedJob.filter((jb) => jb.id != job.id);
      applied = [...remaining, job];
    }
    setAppliedJob(applied);
    addToDb(job.id);
  };

  // handle filter jobs
  let filterJobs = appliedJob.filter((job) => {
    if (filterValueText === "Remote") {
      return job.jobType === "Remote";
    } else if (filterValueText === "Onsite") {
      return job.jobType === "Onsite";
    } else {
      return job;
    }
  });

  const filterValueSelected = (filterValue) => {
    setFilterValueTExt(filterValue);
  };
  useEffect(() => {
    const storedJob = getAppliedJob();
    const savedJob = [];
    for (const id in storedJob) {
      const addedJob = jobsData.find((job) => job.id == id);
      if (addedJob) {
        const quantity = storedJob[id];
        addedJob.quantity = quantity;
        savedJob.push(addedJob);
      }
    }
    setAppliedJob(savedJob);
  }, [jobsData]);

  return (
    <JobsContext.Provider value={jobsData}>
      <AppliedJobsContext.Provider
        value={{
          filterJobs,
          handleApplyJob,
          filterValueSelected,
        }}
      >
        <Header />
        <div className="min-h-[calc(100vh-480px)]">
          <Outlet></Outlet>
        </div>
        <div className="bg-blue-100">
          <Footer />
        </div>
      </AppliedJobsContext.Provider>
    </JobsContext.Provider>
  );
}

export default App;
