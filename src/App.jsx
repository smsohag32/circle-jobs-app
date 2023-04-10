import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { createContext } from "react";

export const JobsContext = createContext([]);
function App() {
  const jobsData = useLoaderData();
  console.log(jobsData);
  return (
    <JobsContext.Provider value={jobsData}>
      <Header />
      <div className="min-h-[calc(100vh-480px)]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </JobsContext.Provider>
  );
}

export default App;
