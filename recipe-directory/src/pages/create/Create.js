import { useRef, useState } from "react"
//import { useFetch } from "../../hooks/useFetch"
import {useNavigate} from 'react-router-dom'
import { projectFireStore } from '../../firebase/config'

import "./Create.css"


export default function Create() {
  const [title,setTitle] =useState('')
  const [method,setMethod] =useState('')
  const [cookingTime,setCookingTime] =useState('')
  const [newIngredient,setNewIngredient]=useState('')
  const [ingredients,setIngredients]=useState([])
  const ingredientInput=useRef(null)
  //const{data,error,postData}=useFetch('http://localhost:8000/recipes',"POST")
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(title,method,cookingTime,ingredients)
    //postData({title,ingredients,method,cookingTime:cookingTime+' minutes'})
    const doc={title,ingredients,method,cookingTime:cookingTime+' minutes'}
    try{
      await projectFireStore.collection('recipes').add(doc)
      navigate('/')
    } catch(err){
      console.log(err)
    }
    
  }

  const handleAdd=(e)=>{
    e.preventDefault()
    const ing=newIngredient.trim()
    if (ing && !ingredients.includes(ing)){
        setIngredients(prevIngredients=>[...prevIngredients,ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }

  // useEffect(()=>{
  //     if(data){
  //       navigate('/')        
  //     }
  // },[data])

  return (
    <div className ="create">
      <h2 className="page-title">Add a new Recipe</h2>
       <form onSubmit ={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input 
            type ="text"
            onChange ={(e)=>setTitle(e.target.value)}
            value ={title}
            required
          />
        </label>
        
        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input type="text" 
            onChange={(e)=>setNewIngredient(e.target.value)}
            value={newIngredient}
            ref={ingredientInput}            
            />
            <button onClick={handleAdd} className="btn">Add</button>
          </div>
        </label>
        
        <p>Current Ingredients: {ingredients.map(i=><em key={i}>{i},</em>)}</p> 

        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange ={(e)=>setMethod(e.target.value)}
            value ={method}
            required
          />
        </label>
        <label>
          <span>Cooking time(minutes):</span>
          <input
            onChange ={(e)=>setCookingTime(e.target.value)}
            value ={cookingTime}
            required
          />
        </label>

        <button className="btn">Submit</button>
       </form>
      

    </div>
  )
}
