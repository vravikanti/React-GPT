import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_Movies, API_NowPlaying_URL } from "../utils/constants";
import { addMovies } from "../utils/moviesSlice";

export const useNowPlayingMovies=()=>{
    const dispatch = useDispatch();
    const nowPlaying=useSelector(store=>store.movies.nowPlaingMovies);
    const nowPlayingList = async ()=>{
        const data= await fetch(API_NowPlaying_URL, API_Movies);
        const json = await data.json();
        console.log(json.results);
        dispatch(addMovies(json.results));
    }
    
    useEffect(()=>{
       !nowPlaying && nowPlayingList();
    },[])

}