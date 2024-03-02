import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { API_Movies, API_PopularMovies_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

export const usePopularMovies=()=>{
    const dispatch = useDispatch();
    const popularMovies=useSelector(store=>store.movies.popularMovies);
    const popularPlayingList = async ()=>{
        const data= await fetch(API_PopularMovies_URL, API_Movies);
        const json = await data.json();
        console.log(json.results);
        dispatch(addPopularMovies(json.results));
    }
    
    useEffect(()=>{
      !popularMovies &&  popularPlayingList();
    },[])

}