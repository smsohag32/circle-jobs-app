import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-480px)]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
}

export default App;
