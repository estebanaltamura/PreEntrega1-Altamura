
import "./ItemListContainer.css"
import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';



export const ItemListContainer = ()=>{

const {idCategoria} = useParams() 
const [data, setData] = useState([])
const [isLoading, setIsLoading] = useState(true)


const collectionData = async (idCategoria)=>{
    try {
    const response = await fetch("https://api.jsonstorage.net/v1/json/d6106fdf-e957-4cfe-a8cc-da8e817fc057/66bd85f4-c5d8-4e90-ab5a-a4f6c316f1a9")
    const json = await response.json()
    const collection = await json[idCategoria]
        
    setData(collection)
    setIsLoading(false)
    }    

    catch (error) {
        console.error(error);
    }   
};

useEffect(()=>{
    collectionData(idCategoria)
},[idCategoria])

    return(
        
        <div className="itemListContainer">
            {isLoading == true ? 
                <h1>LOADING...</h1> : 
                <ItemList data={data}/>
            }
        </div> 
        
    )
}

