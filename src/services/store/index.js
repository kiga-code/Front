import { createStore, applyMiddleware } from "redux";
import reducers from "../redux/reducers";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
// const componseEnhncers = composeWithDevTools({});

const store = createStore(
    reducers, 
    applyMiddleware(thunk)
);
export default store