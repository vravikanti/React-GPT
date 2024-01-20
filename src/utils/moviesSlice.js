import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlaingMovies: null,
        trailer: null,
        popularMovies:null,
        topRatedMovies:null,
    },
    reducers: {
        addMovies : (state,action)=>{
            state.nowPlaingMovies=action.payload
        },
        addTrailer : (state, action)=> {
            state.trailer = action.payload
        },
        addPopularMovies: (state,action) =>{
            state.popularMovies=action.payload
        },
        addTopRatedMovies: (state,action) =>{
            state.topRatedMovies=action.payload
        }
    }
});

export const {addMovies, addTrailer, addPopularMovies, addTopRatedMovies} = moviesSlice.actions;
export default moviesSlice.reducer;