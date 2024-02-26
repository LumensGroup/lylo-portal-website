import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/index";
import List from "./pages/ListDemo/list";
import { ROUTESMAP } from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path={ROUTESMAP.ListDemo} Component={List} />
    </Routes>
  );
}

export default App;
