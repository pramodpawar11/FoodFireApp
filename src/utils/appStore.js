import { configureStore } from "@reduxjs/toolkit";
import swiggyDataReducer from "./swiggyApiSlice";
const appStore = configureStore({
    reducer:{
        swiggyData:swiggyDataReducer,
    }
})
export default appStore;