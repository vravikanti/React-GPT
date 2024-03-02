import { useSelector } from "react-redux";

const GptMovieSuggestions=()=>{

    const {movieNames,movieResults}=useSelector(store=>store.gpt);
    if(!movieNames) return null;

    return (
        <div className="p4 m-4 bg-black text-white">
            {
                // movieNames.map((movie,index)=>(
                //     <Movielist 
                //     key={movie}
                //     title ={movie} movies={movieResults[index]}/>
                // ))
            }
        </div>
    )

}
export default GptMovieSuggestions;