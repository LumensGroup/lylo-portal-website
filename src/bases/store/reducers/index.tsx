import { combineReducers } from "redux";
import count from "./count";
import selectedAddons from "./selectAddons";
import selectedCar from "./selectedCar";

const rootReducer = combineReducers({
  count,
  selectedCar,
  selectedAddons,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
