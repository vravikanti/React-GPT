export const VideoTitle =(props)=>{
    return (
        <div className="px-12 absolute pt-[15%]">
            <h1 className="text-6xl font-bold text-white">{props.Title}</h1>
            <p className="py-6  text-base w-1/4  text-white">{props.Overview}</p>
            <div>
                <button className= "text-black bg-gray-300 rounded-lg px-10 text-xl hover:bg-opacity-50">
                    Play</button>
                <button className="text-black  bg-gray-300 rounded-lg text-xl mx-2 px-5">More Info</button>
            </div>
        </div>
    )
}