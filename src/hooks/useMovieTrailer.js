import { useEffect } from "react";
import { API_Movies } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieid) =>{
    const dispatch = useDispatch();
    const getTrailer =async()=>{
    const data= await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`, API_Movies);
    const json= await data.json();
    const trailerdata =json.results.filter(movie=> movie.type === "Trailer");
    const trailer=    trailerdata.length?trailerdata[0]:json.results[0];
    dispatch(addTrailer(trailer));
    
   }

   useEffect(()=>{
    getTrailer();
   },[])
}

export default useMovieTrailer;