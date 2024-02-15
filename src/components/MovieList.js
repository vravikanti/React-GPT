import MovieCard from "./MovieCard";

const MovieList =({title,movies})=>{
    console.log(movies);
    return (
        <div className="p-2">
            <h1 className=" text-white text-base">{title}</h1>
            <div className="flex scrollbar-hide overflow-x-scroll">
                <div className="flex">
                    {movies?.map(movie=>(
                    <MovieCard key={movie.id} posterPath={movie.poster_path}/>
                    ))}
                </div>
            </div>
    </div>)
}

export default MovieList;

