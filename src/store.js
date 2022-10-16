import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import portfolioDetailsReducer from "./reducers/portfolioDetailsReducer";


const reducer = combineReducers({
    portfolioDetails: portfolioDetailsReducer,

});



const initialState = { portfolio: {} }
const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;