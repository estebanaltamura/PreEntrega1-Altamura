import { v4 as randomId } from 'uuid'
import { CollectionItem } from "./CollectionItem";
import "./CollectionItemList.css"

export const CollectionItemList = ({ collectionProducts, collectionName, visibility })=>{   

  return(   
  <>            
    <div className={visibility}>
      <h2 className="titulonovedadescolecciones">{collectionName}</h2>
      {collectionProducts.map((product, index)=>
        <CollectionItem 
          key={randomId()} 
          id={product.id}  
          index={index} 
          name={product.name} 
          image={product.images[0]} 
          price={product.price} 
          collectionName={collectionName}/>
      )} 
    </div>          
  </>
  )
}  



