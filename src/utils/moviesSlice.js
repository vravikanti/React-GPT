import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlaingMovies: null,
        trailer: null,
    },
    reducers: {
        addMovies : (state,action)=>{
            state.nowPlaingMovies=action.payload
        },
        addTrailer : (state, action)=> {
            state.trailer = action.payload
        }
    }
});

export const {addMovies, addTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;