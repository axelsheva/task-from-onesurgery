import { combineReducers } from "redux";
import products from "./products";
import ingredients from "./ingredients";

export default combineReducers({
  ingredients,
  products
});
