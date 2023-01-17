import './Home.css'
import {useFetch} from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'


export default function Home() {
  const {data, isPending,error}=useFetch('http://localhost:8000/recipes')

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
