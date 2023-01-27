import './Home.css'
//import {useFetch} from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'
import { projectFireStore } from '../../firebase/config'
import {useEffect,useState} from 'react'

export default function Home() {
  //commented as connecting to firebase
  //const {data, isPending,error}=useFetch('http://localhost:8000/recipes')

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(()=>{
    setIsPending(true)

    projectFireStore.collection("recipes")
      .get()
      .then((snapshot)=>{
        if (snapshot.Empty)
        {
          setError("No recipes")
          setIsPending(false)
        }
        else
        {
           let results=[]
           snapshot.docs.forEach(doc=>{
            console.log(doc)    
            results.push({id:doc.id,...doc.data()})
           })
           setData(results)
           setIsPending(false)
        }
        console.log(snapshot)
      }).catch(err=>{
        setError(err.message)
        setIsPending(false)
      })
    
  },[])

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="Loading">Loading...</p>}
      {/* {data && data.map(recipe=>(
        <h2 key={recipe.id}>{recipe.title}</h2>
      ))}       */}
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}
