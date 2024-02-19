import { createSlice } from "@reduxjs/toolkit";
const swiggyApiSlice = createSlice({
    name:"swiggyData",
    initialState:{
        swiggyApiSlice:null,
    },
    reducers:{
        addSwiggyApis:(state,action)=>{
            state.swiggyApiSlice = action.payload
        },
    }
})
export const {addSwiggyApis} = swiggyApiSlice.actions;
export default swiggyApiSlice.reducer;