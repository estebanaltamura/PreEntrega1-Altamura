import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productos } from "../productos.js";
import { ItemDetails } from "./ItemDetails.jsx";
import "../components/ItemDetailsContainer.css"


export const ItemDetailsContainer = ()=>{

const {id} = useParams()
const [data, setData] = useState("")


useEffect(()=>{
    const fakeFetchData = (id)=>{
        const claves = Object.keys(productos)
        claves.forEach(element=>{
            productos[element].forEach(elementx=>{
                if(elementx.id == id) setData(elementx)
            })
        })
    }
    
    fakeFetchData(id)
})



    return(
        <main className="ItemDetailsContainer">
            <ItemDetails data={data}/>
        </main>

    )
}