import { HashRouter } from "react-router-dom";
import HeaderLylo from "../../../bases/components/header";
import App from "../App";

const Router = () => (
  <HashRouter>
    <HeaderLylo>
      <App />
    </HeaderLylo>
  </HashRouter>
);
export default Router;
