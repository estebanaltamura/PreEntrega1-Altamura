import React from "react";
import "../components/ItemListContainer.css"
import { Itemlist } from "./Itemlist";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import { productos } from "../productos";

export const ItemListContainer = ()=>{

const {idCategoria} = useParams() 
const [data, setData] = useState("")


useEffect(()=>{

    const fakeFetchData = (colectionName)=>{
        return productos[colectionName]}

    const data = fakeFetchData(idCategoria)
    setData(data)   
    console.log(data)

},[idCategoria])

    return(
        <div className="itemListContainer">
            {data && <Itemlist data={data}/>}
        </div> 
        
    )
}