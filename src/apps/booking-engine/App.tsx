import { Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./pages/ListDemo/list";
import SelectCarPage from "./pages/SelectCarPage";
import { ROUTESMAP } from "./routes";

function App() {
  return (
    <Routes>
      {/* <Route path="/" Component={Home} /> */}
      <Route path={ROUTESMAP.ListDemo} Component={List} />
      <Route path={ROUTESMAP.SelectCarPage} Component={SelectCarPage} />
    </Routes>
  );
}

export default App;
