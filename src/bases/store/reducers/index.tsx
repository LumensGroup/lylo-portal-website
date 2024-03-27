import { combineReducers } from "redux";
import count from "./count";
import selectedCar from "./selectedCar";

const rootReducer = combineReducers({
  count,
  selectedCar,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
