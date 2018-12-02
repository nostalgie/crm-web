import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "reducers";

export default function configureStore() {
  const middlewares = applyMiddleware(logger, thunk);
  const enhancer = composeWithDevTools(middlewares);
  const store = createStore(reducer, enhancer);
  return store;
}
