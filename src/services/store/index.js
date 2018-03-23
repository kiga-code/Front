import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../redux/reducers";
import thunk from "redux-thunk";
const componseEnhancers =
  typeof window === "object" && window.___REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.___REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(reducers, componseEnhancers(applyMiddleware(thunk)));

export default store;
