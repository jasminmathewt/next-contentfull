
import Image from 'next/image'
import Link from 'next/link'


export default function RecipeCard({recipe,staticdata}) {
    const {title , slug , cookingTime , thumbnail} = recipe.fields
   console.log(staticdata);
    return (
        <div className= "food-wrapper">
             <h4>{title}</h4>
            <div className= "featured">
                <Image src = {'https:' + thumbnail.fields.file.url}
                   width= {thumbnail.fields.file.details.image.width}
                   height= {thumbnail.fields.file.details.image.height}
                />
            </div>
            <div className = "info">           
                <div className="slug">{slug}</div>
                <div className="cookingTime" > Take approx {cookingTime} minuts to make</div>
                <span>{staticdata}</span>
            </div>
            <Link href={'/recipes/'+ slug}><a className="cook">Cook this</a></Link>
            
        </div>
    )
  }