import React from "react";
import { Item } from "./Item";
import "./ItemList.css"

export const ItemList = ({ collectionProducts, collectionName})=>{    
    return(
        <>
            <div className="itemList">
                <h2 className="titulonovedadescolecciones">{collectionName}</h2>
                {collectionProducts.map((product, index)=>
                    <Item key={index} id={product.id} index={index} name={product.name} image={product.images[0]} price={product.price}/>
                )}                
            </div>             
        </>
    )
}     

