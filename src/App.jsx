import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext } from "react";

export const JobsContext = createContext([]);
function App() {
  const jobsData = useLoaderData();

  return (
    <JobsContext.Provider value={jobsData}>
      <Header />
      <div className="min-h-[calc(100vh-480px)]">
        <Outlet></Outlet>
      </div>
      <div className="bg-blue-50">
        <Footer />
      </div>
    </JobsContext.Provider>
  );
}

export default App;
