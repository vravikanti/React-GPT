
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";




export const VideoContainer =({movieid})=>{
    useMovieTrailer(movieid);
    const movieTrailer = useSelector(store=>store.movies.trailer);
    return (
        <div>
            <iframe 
            className=" w-screen aspect-video"
            src={"https://www.youtube.com/embed/"+movieTrailer?.key+"?&autoplay=1&mute=1"}
            title="YouTube video player"
            frameBorder="0" 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen></iframe>
        </div>
    )
}