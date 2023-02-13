import { useState,useEffect } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogout=()=>{
    const [isCancelled,setIsCancelled]=useState(false)
    const [error,setError]=useState(null)
    const [isPending,setIsPending]=useState(false)
    const {dispatch}=useAuthContext()

    const logout=async()=>{
        setError(null)//After rectify error,reset the error to null
        setIsPending(true) //starting signup loading

        try{
            await projectAuth.signOut()

            //dispacth logout action
            dispatch({type:'LOGOUT'})

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
        }
    }

    useEffect(()=>{

        //cleanup function
        return (
            setIsCancelled(true)
        )
    },[])
    return {logout,error,isPending}
}