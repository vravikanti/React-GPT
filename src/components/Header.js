import {auth} from '../utils/firebase';
import { signOut} from "firebase/auth";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged} from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { logo, Supported_languages } from '../utils/constants';
import {toggleGptSearchView} from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header=()=>{
    const dispatch = useDispatch();
    const user = useSelector(store=>store.user);
    const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
    const navigate=useNavigate();

    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log('Auth state change');
              const {uid,email,displayName} = user;
              console.log('on Auth');
                dispatch(addUser({uid:uid,email:email,displayName:displayName}));
                navigate('/browse');
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
              navigate('/');
            }
          });

          return () =>unsubscribe();
    },[]);

    const handleLanguageChange=(e)=>{
      dispatch(changeLanguage(e.target.value));
    }
    const signoutHandler=()=>{
        console.log(user);
        signOut(auth).then(() => {
            // Sign-out successful.
           
          }).catch((error) => {
            // An error happened.
          });
    }

    const handleGptSearch =() =>{
      dispatch(toggleGptSearchView());
    }
    
    
    return(
        <div className="absolute bg-gradient-to-b from-black z-30 w-screen flex justify-between">
            
            <img 
            className=" w-40"
            src={logo} 
            alt="logo"/>
            {user!==null?(
                 <div className='flex p-2'>
                  { showGptSearch && (
                  <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
                    {Supported_languages.map(lang=>(
                      <option key={lang.key} value={lang.key}>{lang.name}</option>
                    ))}

                  </select>)}
                  <button className='py-2 px-2 my-2 mx-2 text-white' onClick={handleGptSearch}>{showGptSearch?"Home":"GPT Search"}</button>
                  <label className='py-2 px-1 my-2 mx-1'>{user.displayName}</label>
                 <button onClick={signoutHandler}>Signout</button>
             </div>
            ):""}
           
        </div>
    )
}

export default Header;