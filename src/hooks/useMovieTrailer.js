import { useEffect } from "react";
import { API_Movies } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieid) =>{
    const dispatch = useDispatch();
    const trailer=useSelector(store=>store.movies.trailer);
    const getTrailer =async()=>{
    const data= await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`, API_Movies);
    const json= await data.json();
    const trailerdata =json.results.filter(movie=> movie.type === "Trailer");
    const trailer=    trailerdata.length?trailerdata[0]:json.results[0];
    dispatch(addTrailer(trailer));
    
   }

   useEffect(()=>{
    !trailer && getTrailer();
   },[])
}

export default useMovieTrailer;