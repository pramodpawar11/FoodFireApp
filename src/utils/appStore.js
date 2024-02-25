import { configureStore } from "@reduxjs/toolkit";
import swiggyDataReducer from "./swiggyApiSlice";
import filterDataReducer from "./filterSlice";
const appStore = configureStore({
    reducer:{
        swiggyData:swiggyDataReducer,
        filterData:filterDataReducer,
    }
})
export default appStore;