import { createSlice } from "@reduxjs/toolkit";
const swiggyApiSlice = createSlice({
    name:"swiggyData",
    initialState:{
        topRestaurants:null,
        deliveryRestaurants:null,
        bestPlacesToEat:null,
    },
    reducers:{
        addtopRestaurants:(state,action)=>{
            state.topRestaurants= action.payload
        },
        adddeliveryRestaurants:(state,action)=>{
            state.deliveryRestaurants=action.payload
        },
        addbestPlacesToEar:(state,action)=>{
            state.bestPlacesToEat = action.payload
        }
    }
})
export const {addtopRestaurants,adddeliveryRestaurants,addbestPlacesToEar} = swiggyApiSlice.actions;
export default swiggyApiSlice.reducer;