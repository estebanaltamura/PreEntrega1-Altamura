import { useEffect, useContext } from "react";
import { NoFlashOfUnloadedContentInCollectionContextProvider } from "../../Contexts/NoFlashOfUnloadedContentInCollectionContextProvider";
import { NoFlashOfUnloadedContentInCollectionContext } from "../../Contexts/NoFlashOfUnloadedContentInCollectionContextProvider";
import { IsLoadingContext } from "../../Contexts/IsLoadingContextProvider";
import { v4 as randomId } from 'uuid'
import {useRef} from "react";
import { CollectionItem } from "./CollectionItem";
import "./CollectionItemList.css"

export const CollectionItemList = ({ collectionProducts, collectionName, visivilityClass })=>{ 
    
    // const { imagesLoadedCounter, setImagesLoadedCounter } = useContext(NoFlashOfUnloadedContentInCollectionContext)
    // const { setIsLoading } = useContext(IsLoadingContext)

    // useEffect(()=>{
    //     setImagesLoadedCounter({"onOff": "on", "counter": 0})        
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



