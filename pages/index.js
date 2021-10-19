import { createClient } from 'contentful'
import RecipeCard from '../components/RecipeCard'
import Link from 'next/link'

//export assync function getStaticProps(){
export async function getStaticProps() {
  const client = await createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

  const myStaticData = `rating`;
  const res = await client.getEntries( {content_type : 'reciepe'});
  //console.log(res.items);
  return{
    props:{
      recipes : res.items,
      "somestatic" : myStaticData
    }
  }
}
export default function Recipes({recipes,somestatic}) {

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard key = {recipe.sys.id} recipe ={recipe} staticdata ={somestatic} />     
      ))}
     <Link href="/chat" className="chat">
       <a><h1>Chat</h1></a>
     </Link>
    </div>
  )
}