import MainProvider from "../../bases/provider";
import Router from "./routes/Router";

const BookingEngine = () => {
  return (
    <MainProvider>
      <Router />
    </MainProvider>
  );
};

export default BookingEngine;
