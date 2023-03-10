import { useState,useEffect } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useSignup=()=>{
    const [isCancelled,setIsCancelled]=useState(false)
    const [error,setError]=useState(null)
    const [isPending,setIsPending]=useState(false)
    const {dispatch}=useAuthContext()

    const signup=async(email,password,displayName)=>{
        setError(null)//After rectify error,reset the error to null
        setIsPending(true) //starting signup loading

        try{
            //signup user
            //reaches to firebase and tries to signup
            const res=await projectAuth.createUserWithEmailAndPassword(email,password)
            //console.log(res.user)//user created is displayed

            //user not created
            if (!res){
                throw new Error('Could not signup')
            }

            //add displayName to user
            //await res.user.updateProfile({displayName:displayName})//takes object
            await res.user.updateProfile({displayName})//takes object

            //dispatch login action
            dispatch({type:'LOGIN',payload:res.user})

            if(!isCancelled){
                setIsPending(false) 
                setError(null)
            }   
        }
        catch(err){
            if(!isCancelled){
                console.log(err.message)
                setError(err.message)
                setIsPending(false) 
            }
            console.log(err.message)
        }
    }
    useEffect(()=>{

        //cleanup function
        return (
            setIsCancelled(true)
        )
    },[])

    return {signup,error,isPending}

}