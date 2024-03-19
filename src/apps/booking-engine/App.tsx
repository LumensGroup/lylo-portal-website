import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddonsPage from "./pages/Addons";
import List from "./pages/ListDemo/list";
import SelectCarPage from "./pages/SelectCar";
import { ROUTESMAP } from "./routes";

function App() {
  return (
    <Routes>
      <Route path={ROUTESMAP.ListDemo} Component={List} />
      <Route path={ROUTESMAP.SelectCarPage} Component={SelectCarPage} />
      <Route path={ROUTESMAP.Addons} Component={AddonsPage} />
    </Routes>
  );
}

export default App;
