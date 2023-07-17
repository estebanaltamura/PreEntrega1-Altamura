import { useContext, useEffect } from "react";
import { NoFlashOfUnloadedContentInCollectionContext } from "../../contexts/NoFlashOfUnloadedContentInCollectionContextProvider";
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider";

import { Link, useParams } from "react-router-dom";
import "./CollectionItem.css"


export const CollectionItem = ({image, name, price, id, index})=>{ 
    
    const { imagesLoadedCounter, setImagesLoadedCounter } = useContext(NoFlashOfUnloadedContentInCollectionContext)    

    useEffect(()=>{           
        

        if(imagesLoadedCounter.counter === 6){
            console.log("deberia parar")
            setImagesLoadedCounter(()=>({"onOff": "off", "counter": 0})) 
            //setIsLoading(false)
        } 
        
    },[imagesLoadedCounter])

    const {idCollection} = useParams()   

    const onLoadImageHandler = (e)=>{        

        const elementJustLoaded = e.target.classList[0]   
        
        
        if(imagesLoadedCounter.onOff === "on" && imagesLoadedCounter.counter <6){
            
            if(elementJustLoaded === "imagenCard1" 
            || elementJustLoaded === "imagenCard2" 
            || elementJustLoaded === "imagenCard3" 
            || elementJustLoaded === "imagenCard4" 
            || elementJustLoaded === "imagenCard5" 
            || elementJustLoaded === "imagenCard6"){
                
                //console.log(elementJustLoaded, "contador antes", )
                
                
                setImagesLoadedCounter((imagesLoadedCounter)=>{return({"onOff": "on", "counter":  imagesLoadedCounter.counter + 1})})
                
            }
        }
        




        // componentsLoaded.current.push(elementJustLoaded)     
    
        // const componentsLoadedFiltered = componentsLoaded.current.filter(element=>element === "coleccionesImagenes" || element === "portadaMobile" || element === "portada375" || element === "portadaDesktop")
        // console.log(componentsLoadedFiltered)
        // if(componentsLoadedFiltered.length === 4){ 
        //   setIsLoading(false)
        // }        

    }
    
    
    return(
        <Link className={`card card${index+1}`} to={`/products/${idCollection}/${id}`}>
            <img className={`imagenCard${index + 1} imagenCard`} src={image} alt="foto" onLoad={onLoadImageHandler}></img>
            <p className={`tituloCard${index + 1} tituloCard`}>{name}</p>
            <p className={`precioCard${index + 1} precioCard`}>{`$${price}`}</p> 
        </Link>            
    )
}






