import { HashRouter } from "react-router-dom";
import HeaderLylo from "../../../bases/components/header";
import App from "../App";

const Router = () => (
  <HeaderLylo>
    <HashRouter>
      <App />
    </HashRouter>
  </HeaderLylo>
);
export default Router;
