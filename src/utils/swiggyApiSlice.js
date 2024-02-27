import { createSlice } from "@reduxjs/toolkit";
const swiggyApiSlice = createSlice({
    name:"swiggyData",
    initialState:{
        topRestaurants:null,
        mergedRestaurants:null,
        bestPlacesToEat:null,
        defaultMerged:null,
    },
    reducers:{
        addtopRestaurants:(state,action)=>{
            state.topRestaurants= action.payload
        },
        addmergedRestaurants:(state,action)=>{
            state.mergedRestaurants=action.payload
        },
        addbestPlacesToEar:(state,action)=>{
            state.bestPlacesToEat = action.payload
        },
        adddefaultMerged:(state,action)=>{
            state.defaultMerged = action.payload
        }
    }
})
export const {addtopRestaurants,addmergedRestaurants,addbestPlacesToEar,adddefaultMerged} = swiggyApiSlice.actions;
export default swiggyApiSlice.reducer;