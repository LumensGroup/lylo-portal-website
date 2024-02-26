import { configureStore } from "@reduxjs/toolkit";
// 用于支持异步action
import { Provider } from "react-redux";
import logger from "./middleWares/logger";
import reducers from "./reducers";

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const GlobalStateProvider = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>;
};
