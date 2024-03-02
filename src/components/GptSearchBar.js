import { useDispatch, useSelector } from "react-redux"
import {lang} from '../utils/languageConstants';
import { useRef, useState } from "react";
import openai from '../utils/openai';
import {API_Movies} from '../utils/constants';
import {addGptMovieResult} from '../utils/gptSlice';
import GptMovieSuggestions from "./GptMovieSuggestions";

export const GptSearchBar =()=>{
    const [showGpt,setShowGpt] =useState(true);
    const langkey=useSelector(store=>store.config.lang);
    console.log(lang[langkey].gptsearchplaceholder);
    const gptinput= useRef(null);
    const dispatch =useDispatch();
    const movieTBDSearch = async (movie) =>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',
        API_Movies,
        );

        const movieResult= await data.json();
        return movieResult.results;
    } 

    const handleGptMovieSearch =async () =>{
        console.log(gptinput.current.value);
        // const gptQuery='Act as a movie recommendation system and suggest some movies for the query: '+gptinput.current.value+ ' only give me names of 5 movies, comma seperated like the exaple result given ahead. Example Result: Golmaal, Sita Gita';
        // const gptResults=await openai.chat.completions.create({
        //     messages:{role:'user',content:gptQuery},
        //     model: 'gpt-3.5-turbo',
        // });
        // console.log(gptMoviesResult);
        // if(!gptResults.choices) return null;
        // const movies=gptResults.choices?.[0]?.message?.content.split(',');
        // const gptMoviesResult= Promise.all(movies.map(movie=>movieTBDSearch(movie)));

        // dispatch(addGptMovieResult({movieNames:movies,movieResults:gptMoviesResult}));
    }

    return <div className="pt-[10%] flex justify-center">
        <form className="w-1/3 grid grid-cols-6 bg-black " onSubmit={(e)=>e.preventDefault()}>
            <input 
            ref={gptinput}
            type="text" className="p-4 m-4 h-5 bg-white col-span-4 text-sm" placeholder={lang[langkey].gptsearchplaceholder} />
            <button className="h-9 py-2 my-4 mx-3 col-span-2 text-sm rounded-lg  bg-red-700 text-white "
            onClick={handleGptMovieSearch}
            >{lang[langkey].search}</button>
        </form>
        {showGpt?<GptMovieSuggestions/>:""}
    </div>
}

