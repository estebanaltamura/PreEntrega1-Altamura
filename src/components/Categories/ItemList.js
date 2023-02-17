import React from "react";
import { Item } from "./Item";
import "./ItemList.css"

export const ItemList = ({data})=>{

    
    return(
        <>
            <main className="itemList">
                <h2 className="titulonovedadescolecciones">Linea alpinismo</h2>
                {data.map((element, index)=>
                    <Item key={index} id={element.id} index={index} nombre={element.nombre} imagen={element.imagen} precio={element.precio}/>
                )}
                
            </main> 
            
            
        </>
    )
}     

