
import "./ItemListContainer.css"
import { ItemList } from "./ItemList";
import { Loading } from "./Loading";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';



export const ItemListContainer = ()=>{

const {idCategoria} = useParams() 
const [data, setData] = useState([])
const [isLoading, setIsLoading] = useState(true)


const collectionData = async (idCategoria)=>{
    try {
    const response = await fetch("https://63c98161320a0c4c954a3283.mockapi.io/fakeapi")
    const json = await response.json()
    const collection = await json[0][idCategoria]
        
    
    if (collection.length > 0){
        setData(collection) 
        setIsLoading(false)
    } 
    console.log(collection)
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
                    <>
                         <h1>{data.length.toString()}</h1> 
                    </>
                : 
                <ItemList data={data} />
            }
        </div> 
        
    )
}

/*<ItemList data={data} */

