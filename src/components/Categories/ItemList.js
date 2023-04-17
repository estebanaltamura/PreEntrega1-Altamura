import {useRef} from "react";
import { Item } from "./Item";
import "./ItemList.css"

export const ItemList = ({ collectionProducts, collectionName})=>{    

    const itemListElement = useRef()
    const itemsLoaded = useRef([])

    const onLoadItemHandler = (e)=> {
        const itemClass = e.target.classList[0]
        if (itemClass === "imagenCard1" || itemClass === "imagenCard2" || itemClass === "imagenCard3" || itemClass === "imagenCard4" || itemClass === "imagenCard5" ||  itemClass === "imagenCard6"){
            itemsLoaded.current.push(itemClass.current)
        }
        itemsLoaded.current.length === 6 && itemListElement.current.classList.replace("hidden", "itemList")
    }

    return(
        <> 
            <div onLoad={onLoadItemHandler} ref={itemListElement} className="hidden">
                <h2 className="titulonovedadescolecciones">{collectionName}</h2>
                {collectionProducts.map((product, index)=>
                    <Item key={index} id={product.id} index={index} name={product.name} image={product.images[0]} price={product.price}/>
                )}                
            </div>             
        </>
    )
}     

