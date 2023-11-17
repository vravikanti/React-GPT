import {createSlice} from '@reduxjs/toolkit';
const userSlice=createSlice({
    name:"userSlice",
    initialState:null,
    reducer:{
        addUser:(state,action)=>{
            state(action.payload);
        },
        remove:(state,action)=>{
            state(null);
        },
    }
})

