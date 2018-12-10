import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import user from "./user";
import tickets from "./tickets";

export default combineReducers({
  form,
  user,
  tickets
});
