import { combineReducers } from "redux";
import count from "./count";

const rootReducer = combineReducers({
  count,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
