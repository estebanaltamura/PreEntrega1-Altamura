import { useContext } from "react";
import { IsLoadingContext } from "../../Contexts/IsLoadingContextProvider";
import {useRef} from "react";
import { Item } from "./Item";
import "./ItemList.css"

export const ItemList = ({ collectionProducts, collectionName})=>{  
    
    const { setIsLoading } = useContext(IsLoadingContext)

    const componentsLoaded = useRef([])

    //const itemListElement = useRef() 
    //const itemsLoaded = useRef([])

    const onLoadItemHandler = (e)=> {


            

        
        
        const elementJustLoaded = e.target.classList[0]
        componentsLoaded.current.push(elementJustLoaded) 

        const componentsLoadedFiltered = componentsLoaded.current.filter(element=>     element === "imagenCard1" 
                                                                                    || element === "imagenCard2" 
                                                                                    || element === "imagenCard3" 
                                                                                    || element === "imagenCard4" 
                                                                                    || element === "imagenCard5" 
                                                                                    || element === "imagenCard6")

        console.log(componentsLoadedFiltered.length)
        if(componentsLoadedFiltered.length === 6){ 
            console.log("6ddd")
            setIsLoading(false)
        }        

        // if (itemClass === "imagenCard1" || itemClass === "imagenCard2" || itemClass === "imagenCard3" || itemClass === "imagenCard4" || itemClass === "imagenCard5" 
        // ||  itemClass === "imagenCard6"){
        //     itemsLoaded.current.push(itemClass.current)
        // }
        // itemsLoaded.current.length === 6 && itemListElement.current.classList.replace("hidden", "itemList")
    }

    return(
        <> 
            <div onLoad={onLoadItemHandler} className="itemList">
                <h2 className="titulonovedadescolecciones">{collectionName}</h2>
                {collectionProducts.map((product, index)=>
                    <Item key={index} id={product.id} index={index} name={product.name} image={product.images[0]} price={product.price}/>
                )}                
            </div>             
        </>
    )
}     

