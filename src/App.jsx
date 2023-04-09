import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-480px)]">
        <Outlet></Outlet>
      </div>
      <p className="h-400px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        corporis, accusamus qui natus alias dicta, molestiae quo dignissimos
        odio rerum recusandae. Voluptatem sunt nam inventore quis distinctio
        repellat, neque odio!
      </p>
    </div>
  );
}

export default App;
