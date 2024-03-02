import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";

import {MContainer} from "./MContainer.js";
import {SContainer} from "./SContainer.js";
import { usePopularMovies } from "../hooks/usePopularMovies.js";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies.js";
import {GptSearchBar} from "./GptSearchBar.js";
import { useSelector } from "react-redux";


const Browse=()=>{
    const gptSearch=useSelector(store=>store.gpt.showGptSearch);
    console.log(gptSearch);
   useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();
    return(
        <div>
            <Header/>
            {gptSearch? <GptSearchBar/>:
            <>
             <MContainer/>
            <SContainer/>
            </>
            }
           
        </div>
    )
}

export default Browse;

