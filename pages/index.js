import { createClient } from 'contentful'
import RecipeCard from '../components/RecipeCard'

//export assync function getStaticProps(){
export async function getStaticProps() {
  const client = await createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });
  const res = await client.getEntries( {content_type : 'reciepe'});
  //console.log(res.items);
  return{
    props:{
      recipes : res.items
    }
  }
}
export default function Recipes({recipes}) {
  console.log(recipes);
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard key = {recipe.sys.id} recipe ={recipe}/>     
      ))}
     
    </div>
  )
}