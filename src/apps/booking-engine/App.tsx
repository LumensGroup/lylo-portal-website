import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddonsPage from "./pages/Addons";
import List from "./pages/ListDemo/list";
import SelectCarPage from "./pages/SelectCar";
import { ROUTESMAP } from "./routes";
import PaySuccess from "./pages/PaySuccess";
import { ErrorComponents } from "./pages/ErrorComponents";

function App() {
  return (
    <Routes>
      <Route path={ROUTESMAP.ListDemo} Component={List} />
      <Route path={ROUTESMAP.PaySuccess} Component={PaySuccess} />
      <Route path={ROUTESMAP.SelectCarPage} Component={SelectCarPage} />
      <Route path={ROUTESMAP.Addons} Component={AddonsPage} />
      <Route path={ROUTESMAP.ErrorComponents} Component={ErrorComponents} />
    </Routes>
  );
}

export default App;
