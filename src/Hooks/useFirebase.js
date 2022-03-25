import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user,setUser]=useState({}); 



    const auth =getAuth();

    const signInUsingGoogle = () =>{
        const googleProvider =new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user)
        })
    }
    //observe user state changed
    useEffect(()=>{
        const unsubscribed= onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        })
        return()=>unsubscribed;
    },[])
    const logOut =()=>{
        signOut(auth)
        .then(()=>{})
    }
    


    return{
        user,
        logOut,
        signInUsingGoogle
    } 
};
    
export default useFirebase;