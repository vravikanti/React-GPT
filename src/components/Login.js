import { useState,useRef } from "react";
import {useNavigate} from 'react-router-dom';
import Header from "./Header";
import { checkValidation } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login=()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [signUp, setSignUp]= useState(false);
    const [errorMessage,setErrorMessage]=useState("");
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);

    

    const loginHandler=()=>{
        console.log(email.current.value);
      const validate=  checkValidation(email.current.value,password.current.value);
      setErrorMessage(validate);
      //if(errorMessage !== null) return;
        console.log(signUp);
      if(signUp){
        //Signup
        console.log("Sign up")
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            updateProfile(user,{
                displayName:name.current.value,
            }).then(()=>{
                const {uid,email,displayName} =auth.currentUser;
                console.log(displayName);
                dispatch(addUser(
                    {
                        uid:uid,
                        email:email,
                        displayName:displayName,
                    }
                ));
               
            })
           console.log(name.current.value);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
            // ..
        });
      }else{
        //signin
        console.log('login1');
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                console.log('login');
                const user = userCredential.user;
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            });
      }
      
    }
    return(
        <div><Header/>
        <div className="absolute">
        <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
            alt="bg"
            />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className=" w-3/12 absolute text-center p-12 my-36 mx-auto right-0 left-0 bg-black text-white bg-opacity-80">
            <h1 className="text-2xl p-1 m-1">{signUp?"Sign Up":"Sign In"}</h1>
            {signUp?<input type="text" 
            ref={name}
            placeholder="Name" className="p-4 my-4  w-full text-sm text-black"/>:""}
            <input 
            type="text" placeholder="Email Address" className="p-4 my-4 w-full  text-sm text-black"
            ref={email}
            />
            <input
             type="text" placeholder="Password" className=" p-4 my-4 w-full  text-sm text-black"
                ref={password}
             />
             <p className=" p-4 py-1 text-sm text-red-500 ">{errorMessage}</p>
            <button onClick={loginHandler} className="p-4 my-4  w-full bg-red-700 text-sm">{signUp?"Sign Up":"Sign In"}</button>
            <p className=" text-sm" onClick={()=>setSignUp(!signUp)}>
            {signUp?"Already Registered? SignIn here":"New to Netflix? Signup here"}</p>
        </form>
        </div>
    )
}

export default Login;

