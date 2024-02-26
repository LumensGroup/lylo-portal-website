import ReactDOM from "react-dom/client";
import BookingBar from "./apps/booking-bar";
import BookingEngine from "./apps/booking-engine";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

const Components = {
  "booking-bar": BookingBar,
  "booking-engine": BookingEngine,
  root: BookingBar,
};

const components: any = Components;

(() => {
  const element = document.getElementById("booking-bar");

  if (element) {
    const root = ReactDOM.createRoot(element);
    const Component = BookingBar;
    root.render(<Component />);
  }
})();

reportWebVitals();
