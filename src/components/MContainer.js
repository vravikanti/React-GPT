import { useSelector } from "react-redux"
import { VideoTitle } from "./VideoTitle";
import { VideoContainer } from "./VideoContainer";

export const MContainer =()=>{
    const movies= useSelector(store=>store.movies?.nowPlaingMovies);
    if (movies === null) return;
    const {title, overview, id} =movies[0];
    return (
        <div>
            <VideoTitle title={title} overview={overview}/>
            <VideoContainer movieid={id}/>
        </div>
    )
}