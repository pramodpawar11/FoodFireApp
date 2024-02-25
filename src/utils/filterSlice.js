import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
    name:"filterData",
    initialState:{
        values:null,
        deliveryTime:null,
        rating:null,
        lowToHigh:null,
        highToLow:null,
    },
    reducers:{
        adddeliveryTime:(state,action)=>{
            state.deliveryTime = action.payload;
        },
        addrating:(state,action)=>{
            state.rating = action.payload;
        },
        addlowToHigh:(state,action)=>{
            state.lowToHigh = action.payload;
        },
        addhighToLow:(state,action)=>{
            state.highToLow = action.payload;
        },
        addvalues:(state,action)=>{
            state.values = action.payload
        }
    },
    
})
export const {adddeliveryTime,addrating,addlowToHigh,addhighToLow,addvalues} = filterSlice.actions;
export default filterSlice.reducer