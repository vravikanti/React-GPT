import { useSelector } from "react-redux"
import { VideoTitle } from "./VideoTitle";
import { VideoContainer } from "./VideoContainer";

export const MContainer =()=>{
    const movies= useSelector(store=>store.movies?.nowPlaingMovies);
    if (movies === null) return;
    console.log(movies);
    console.log(movies[0]);
    const {title, overview, id} =movies[0];
    return (
        <div>
            <VideoTitle Title={title} Overview={overview}/>
            <VideoContainer movieid={id}/>
        </div>
    )
}