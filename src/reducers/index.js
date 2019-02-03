import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import user from "./user";
import tickets from "./tickets";
import customers from "./customers";

export default combineReducers({
  form,
  user,
  tickets,
  customers
});
