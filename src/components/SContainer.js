import { useSelector } from "react-redux"
import MovieList from "./MovieList"

export const SContainer =()=>{
    const movies = useSelector(store=>store.movies);
    
    return (
        <div className=" bg-black">
        <div className=" -mt-40 pl-2 relative z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlaingMovies} />
            <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
            <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
            
        </div>
        </div>
    )
}