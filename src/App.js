import logo from "./logo.svg";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Routes from "./Routes";
import Topbar from "./Pages/Topbar/Topbar";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  let route = useRoutes(Routes);
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        {route}
      </div>
    </>
  );
}

export default App;
