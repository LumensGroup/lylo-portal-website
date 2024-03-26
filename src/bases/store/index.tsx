import { configureStore } from "@reduxjs/toolkit";
// 用于支持异步action
import { Provider } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import logger from "./middleWares/logger";
import reducers from "./reducers";

const persistConfig = {
  key: "lylo", // 保存在localStorage中的键
  storage, // 默认的存储引擎
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
const persistor = persistStore(store);

export const GlobalStateProvider = ({ children }: any) => {
  return (
    <Provider store={store}>
      {" "}
      <PersistGate loading={null} persistor={persistor}>
        {children}{" "}
      </PersistGate>
    </Provider>
  );
};

export { persistor, store };
