import './Recipe.css'

import React from 'react'

import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

export default function Recipe() {
  const {id}=useParams()
  const url ='http://localhost:8000/recipes/'+id
  const {error,isPending,data:recipe}=useFetch(url)

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
    </div>
  )
}
