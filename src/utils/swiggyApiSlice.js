import { createSlice } from "@reduxjs/toolkit";
const swiggyApiSlice = createSlice({
    name:"swiggyData",
    initialState:{
        topRestaurants:null,
        deliveryRestaurants:null,
    },
    reducers:{
        addtopRestaurants:(state,action)=>{
            state.topRestaurants= action.payload
        },
        adddeliveryRestaurants:(state,action)=>{
            state.deliveryRestaurants=action.payload
        }
    }
})
export const {addtopRestaurants,adddeliveryRestaurants} = swiggyApiSlice.actions;
export default swiggyApiSlice.reducer;