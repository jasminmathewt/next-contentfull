import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
})
export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type : 'reciepe'
  })
  const paths = res.items.map(item=> {
    return {
        params: { slug: item.fields.slug } , // See the "paths" section below
    }
  })
  //console.log(paths);
  return{
    paths,
    fallback: false
  }
}
export async function getStaticProps({params}) {
    const {items} = await client.getEntries({
    content_type : 'reciepe',
    'fields.slug' : params.slug

  })
  return {
    props: { reciepe: items[0] }, // will be passed to the page component as props
  }
}
export default function RecipeDetails({reciepe}) {
  console.log(reciepe);
  const {title,slug,featuredImage,ingradients,method,cookingTime} = reciepe.fields
  return (
    <div className= 'product-info' >
       <div className="banner-img">
       <Image src = {'https:' + featuredImage.fields.file.url}
          width= {featuredImage.fields.file.details.image.width}
          height= {featuredImage.fields.file.details.image.height}
        />
       </div>
       <div className="info-details">
        <div className="recipe-title"><h2>{title}</h2></div>
        <div className="cookingTime">
          Takes about {cookingTime} minuts
        </div>
        <div className="slug">{slug}</div>
        <div className="ingradinets">
          <h4>Ingradient</h4>
          <ul>
            {ingradients.map(ingradient => (
              <li>{ingradient}</li>     
            ))}
          </ul>
        </div>
        <div className="method">
          <h4>Method</h4>
          {documentToReactComponents(method)}
        </div>       
       </div>      
    </div>
  )
}