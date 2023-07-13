import { useEffect, useContext } from "react";
import { NoFlashOfUnloadedContentInCollectionContextProvider } from "../../Contexts/NoFlashOfUnloadedContentInCollectionContextProvider";
import { IsLoadingContext } from "../../Contexts/IsLoadingContextProvider";
import { v4 as randomId } from 'uuid'
import { CollectionItem } from "./CollectionItem";
import "./CollectionItemList.css"

export const CollectionItemList = ({ collectionProducts, collectionName, visivilityClass })=>{ 
    
    // const { imagesLoadedCounter, setImagesLoadedCounter } = useContext(NoFlashOfUnloadedContentInCollectionContext)
     const { setIsLoading, isLoading } = useContext(IsLoadingContext)

    

    // useEffect(()=>{
    //     console.log("rendereo coleccion", collectionProducts, isLoading, visivilityClass)        
    // },[])
  

    return(
        <> 
            <NoFlashOfUnloadedContentInCollectionContextProvider>
            
                <div className={visivilityClass}>
                    <h2 className="titulonovedadescolecciones">{collectionName}</h2>
                        {collectionProducts.map((product, index)=>
                                <CollectionItem key={randomId()} id={product.id} index={index} name={product.name} image={product.images[0]} price={product.price}/>
                        )} 
                </div>             
            </NoFlashOfUnloadedContentInCollectionContextProvider>
        </>
    )
}  



