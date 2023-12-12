import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_Movies, API_NowPlaying_URL } from "../utils/constants";
import { addMovies } from "../utils/moviesSlice";

export const useNowPlayingMovies=()=>{
    const dispatch = useDispatch();

    const nowPlayingList = async ()=>{
        const data= await fetch(API_NowPlaying_URL, API_Movies);
        const json = await data.json();
        console.log(json.results);
        dispatch(addMovies(json.results));
    }
    
    useEffect(()=>{
        nowPlayingList();
    },[])

}