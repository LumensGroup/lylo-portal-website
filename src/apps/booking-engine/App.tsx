import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddonsPage from "./pages/Addons";
import List from "./pages/ListDemo/list";
import PaySuccess from "./pages/PaySuccess";
import SelectCarPage from "./pages/SelectCar";
import { ROUTESMAP } from "./routes";
import { CheckOutPage } from "./pages/CheckOutPage";
import DriverInfo from "./pages/DriverInfo";

function App() {
  return (
    <Routes>
      <Route path={ROUTESMAP.ListDemo} Component={List} />
      <Route path={ROUTESMAP.PaySuccess} Component={PaySuccess} />
      <Route path={ROUTESMAP.SelectCarPage} Component={SelectCarPage} />
      <Route path={ROUTESMAP.Addons} Component={AddonsPage} />
      <Route path={ROUTESMAP.CheckOut} Component={CheckOutPage} />
      <Route path={ROUTESMAP.DriverInfo} Component={DriverInfo} />
    </Routes>
  );
}

export default App;
