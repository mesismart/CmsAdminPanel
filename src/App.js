import logo from "./logo.svg";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Routes from "./Routes";

function App() {
  let route = useRoutes(Routes);
  return <> {route}</>;
}

export default App;
