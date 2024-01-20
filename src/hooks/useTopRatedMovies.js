import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_Movies, API_TopRatesMovies_URL } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

export const useTopRatedMovies=()=>{
    const dispatch = useDispatch();

    const topRatedPlayingList = async ()=>{
        const data= await fetch(API_TopRatesMovies_URL, API_Movies);
        const json = await data.json();
        console.log(json.results);
        dispatch(addTopRatedMovies(json.results));
    }
    
    useEffect(()=>{
        topRatedPlayingList();
    },[])

}