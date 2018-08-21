import { combineReducers } from "redux";
import burgers from "./burgers";
import ingredients from "./ingredients";

export default combineReducers({
  burgers,
  ingredients
});
