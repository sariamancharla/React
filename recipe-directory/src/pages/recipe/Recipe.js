import './Recipe.css'

import React from 'react'

import { useParams } from 'react-router-dom'
//import { useFetch } from '../../hooks/useFetch'
import { projectFireStore } from '../../firebase/config'
import {useEffect,useState} from 'react'

export default function Recipe() {
  const {id}=useParams()
  //const url ='http://localhost:8000/recipes/'+id
  //const {error,isPending,data:recipe}=useFetch(url)
  
  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(()=>{
    setIsPending(true)
    // projectFireStore.collection("recipes").doc(id).get().then((doc)=>{
    //   if (doc.exists){
    //     setIsPending(false)
    //     setRecipe(doc.data())
    //   }
    //   else
    //   {
    //     setIsPending(false)
    //     setError("Could not find the recipe")
    //   }
    //   console.log(doc.data())
      
    // })
    //Listener to fetch the latest data
    const unsub=projectFireStore.collection("recipes").doc(id).onSnapshot((doc)=>{
      if (doc.exists){
        setIsPending(false)
        setRecipe(doc.data())
      }
      else
      {
        setIsPending(false)
        setError("Could not find the recipe")
      }
      console.log(doc.data())      
    },(err)=>{
      setIsPending(false)
      setError(err.message)
    })

    return()=>unsub()

  },[id])

  //update
  const handleClick=()=>{
    projectFireStore.collection("recipes").doc(id).update({
      title:'Snewxbxvbxvbent'
    })
  }
  return (
    <div className="recipe">
      {error && <p>{error}</p>}
      {isPending && <p>Loading....</p>}
      {/* {recipe && <h1>{recipe.title}</h1>} */}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook</p>
          <ul>
            {recipe.ingredients.map(ing=><li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
      <button onClick={()=>handleClick()}>Update me</button>
    </div>
  )
}
