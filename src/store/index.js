import { configureStore,combineReducers } from "@reduxjs/toolkit";
import port from "./port";


const reducer = combineReducers({
    port
})

const store = configureStore({
    reducer,
})

export default store