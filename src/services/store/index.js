import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../redux/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

const componseEnhancers = composeWithDevTools({});
  

const store = createStore(reducers, componseEnhancers(applyMiddleware(thunk)));

export default store;
