import { combineReducers } from "redux";
import productosReducer from "./productosReducer"; //este es el reducer de productos

export default combineReducers({
  productos: productosReducer,
});
