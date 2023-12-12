import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";

import {MContainer} from "./MContainer.js";
import {SContainer} from "./SContainer.js";


const Browse=()=>{
   useNowPlayingMovies();
    
    return(
        <div>
            <Header/>
            <MContainer/>
            <SContainer/>
        </div>
    )
}

export default Browse;

