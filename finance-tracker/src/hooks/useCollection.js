import { useState,useEffect,useRef } from "react"
import { projectFireStore } from "../firebase/config"

export const useCollection=(collection,_query,_orderBy)=>{
    const [documents,setDocuments]=useState(null)
    const [error,setError]=useState(null)

    //wrap does not see different for every.avoid infinite loop
    // if we don't use a ref --> infinite loop in useEffect
    // _query is an array and is "different" on every function call
    const query=useRef(_query).current
    const orderBy=useRef(_orderBy).current
    //fire as soon as mount
    useEffect(()=>{
        //we might ref so use let update in future
        let ref=projectFireStore.collection(collection)
        console.log(ref)
        if(query){
            ref=ref.where(...query)//uid==1
        }

        if(orderBy){
            ref=ref.orderBy(...orderBy)
        }
        //as soon as it mounts
        //fires everytime
        //connection at tht moment
        //new snapshot when change to collection
        const unsubscribe=ref.onSnapshot((snapshot)=>{
            let results=[]
            snapshot.docs.forEach(doc=>{
                //name and amount created uid
                results.push({...doc.data(),id:doc.id})
            })
            console.log(results)
            //update state
            setDocuments(results)
            setError(null)
        },(error)=>{
            console.log(error)
            setError('could not fetch the data')
        })

        //unsubscribe
        return()=>unsubscribe()//unmount fires to cleanup
    },[collection,query,orderBy])

    return {documents,error}
}