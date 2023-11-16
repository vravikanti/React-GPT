import { useState } from "react";
import Header from "./Header";

const Login=()=>{
    const [signUp, setSignUp]= useState(false);
    
    return(
        <div><Header/>
        <div className="absolute">
        <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
            alt="bg"
            />
        </div>
        <form className=" w-4/12 absolute text-center p-12 my-36 mx-80 bg-black text-white bg-opacity-80">
            <h1 className="text-2xl p-1 m-1">{signUp?"Sign Up":"Sign In"}</h1>
            {signUp?<input type="text" placeholder="Name" className="p-4 m-1 h-8 text-sm"/>:""}
            <input type="text" placeholder="Email Address" className="p-4 m-1 h-8 text-sm"/>
            <input type="text" placeholder="Password" className=" p-4 m-1 h-8 text-sm"/>
            <button className="p-4 w-30 m-1 bg-red-700 text-sm">{signUp?"Sign Up":"Sign In"}</button>
            <p className=" text-sm" onClick={()=>setSignUp(!signUp)}>
            {signUp?"Already Registered? SignIn here":"New to Netflix? Signup here"}</p>
        </form>
        </div>
    )
}

export default Login;

