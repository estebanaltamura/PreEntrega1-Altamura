import React from "react";
import { Item } from "./Item";
import "../components/ItemList.css"

export const Itemlist = ({data})=>{

    
    return(
        <>
            <main className="itemList">
                <h2 className="titulonovedadescolecciones">Linea alpinismo</h2>
                {data.map((element, index)=>
                    <Item key={index} index={index} nombre={element.nombre} precio={element.precio} imagen={element.imagen} id={element.id}/>
                )}
            </main> 
            
            
        </>
    )
}     

