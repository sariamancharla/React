import { useReducer,useEffect,useState } from "react";
import {projectFireStore} from '../firebase/config'

//defined here as we dont want it to created every time
let initialState={
    document:null,
    isPending:false,
    error:null,
    success:null
}

const firestoreReducer=(state,action)=>{
    switch (action.type)
    {
        case 'IS_PENDING':
            return {
                    isPending:true,
                    document:null,
                    success:false,
                    error:null
                }
        case 'ADDED_DOCUMENT':
            return {
                    isPending:false,
                    document:action.payload,
                    success:true,
                    error:null
                }//no spread as all updated
        case 'ERROR':
            return {
                isPending:false,
                document:null,
                success:false,
                error:action.payload
            }//no spread as all updated
        default:
            return state
    }
        
}

export const useFireStore=(collection)=>{
    const [response,dispatch]=useReducer(firestoreReducer,{initialState})//response is that we get from firestore
    const [isCancelled,setIsCancelled]=useState(false) //when home oading from home to some other component
    
    //collection ref
    const ref=projectFireStore.collection(collection) //reuse for add/update/delete

    //only dispacth if not cancelled
    //this check is neeeded multiple times so created a function
    const dispatchIfNotCancelled=(action)=>{
        if(!isCancelled)
        {
            dispatch(action)
        }
    }
    
    //add a document
    const addDocument=async (doc)=>{
        dispatch({type:'IS_PENDING'})//starting to load something
        
        try{
            const addedDocument=await ref.add(doc)//returns the doc created info
            dispatchIfNotCancelled({type:'ADDED_DOCUMENT',payload:addedDocument})
        }
        catch(err){
            dispatchIfNotCancelled({type:'ERROR',payload:err.message})
        }
    }

    //delete a document
    const deleteDocument=(id)=>{

    }
    
    useEffect(()=>{
        return ()=>setIsCancelled(true) //cleanup function.home to some other comp shift
    },[])//never run again but only once as empty passed

    return {addDocument,deleteDocument,response}
}