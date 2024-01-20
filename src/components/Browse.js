import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";

import {MContainer} from "./MContainer.js";
import {SContainer} from "./SContainer.js";
import { usePopularMovies } from "../hooks/usePopularMovies.js";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies.js";


const Browse=()=>{
   useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();
    return(
        <div>
            <Header/>
            <MContainer/>
            <SContainer/>
        </div>
    )
}

export default Browse;

