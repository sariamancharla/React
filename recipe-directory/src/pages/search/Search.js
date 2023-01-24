import {useLocation} from 'react-router-dom'
import {useFetch} from '../../hooks/useFetch'

import './Search.css'

import React from 'react'

import RecipeList from '../../components/RecipeList'

export default function Search() {

  const quesryString=useLocation().search
  const quesryParams=new URLSearchParams(quesryString)
  const query =quesryParams.get('q')

  const url='http://localhost:8000/recipes?q='+query
  //const url='http://localhost:3000/recipes'
  const {error,isPending,data}=useFetch(url)

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
