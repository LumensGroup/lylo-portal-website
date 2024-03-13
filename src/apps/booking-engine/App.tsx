import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/index";
import List from "./pages/ListDemo/list";
import { ROUTESMAP } from "./routes";
import PaySuccess from "./pages/PaySuccess";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path={ROUTESMAP.ListDemo} Component={List} />
      <Route path={ROUTESMAP.PaySuccess} Component={PaySuccess} />
    </Routes>
  );
}

export default App;
