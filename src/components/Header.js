import {auth} from '../utils/firebase';
import { signOut} from "firebase/auth";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged} from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { logo } from '../utils/constants';


const Header=()=>{
    const dispatch = useDispatch();
    const user = useSelector(store=>store.user);
    const navigate=useNavigate();
    const signoutHandler=()=>{
        console.log(user);
        signOut(auth).then(() => {
            // Sign-out successful.
           
          }).catch((error) => {
            // An error happened.
          });
    }
    
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
    return(
        <div className="absolute bg-gradient-to-b from-black z-30 w-screen flex justify-between">
            <img 
            className=" w-40"
            src={logo} 
            alt="logo"/>
            {user!==null?(
                 <div >
                    <label>{user.displayName}</label>
                 <button onClick={signoutHandler}>Signout</button>
             </div>
            ):""}
           
        </div>
    )
}

export default Header;