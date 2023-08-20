import { useContext } from 'react';
import { IsLoadingContext } from '../../contexts/IsLoadingContextProvider';
import { v4 as randomId } from 'uuid'
import { CollectionItem } from "./CollectionItem";
import "./CollectionItemList.css"

export const CollectionItemList = ({ collectionProducts, collectionName, visibility })=>{ 
  const { isLoading } = useContext(IsLoadingContext)
  return(   
    <>            
      <h2 className={isLoading ? "hidden" : "titulonovedadescolecciones"}>{collectionName}</h2>
      <div className={visibility}>
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