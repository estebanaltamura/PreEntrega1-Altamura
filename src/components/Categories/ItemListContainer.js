import { useState, useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { ItemList } from "./ItemList";
import "./ItemListContainer.css"

export const ItemListContainer = ()=>{

    const {idCollection} = useParams() 
    const [collectionData, setCollectionData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const history = useNavigate()


    const getCollectionData = async (idCollection)=>{
        try {
            setIsLoading(true)  
            const response = await fetch("https://63c98161320a0c4c954a3283.mockapi.io/fakeapi")
            const json = await response.json()
            const collection = await json[0]?.[idCollection]
            collection !== undefined ? setCollectionData(collection) : history("/")
            setIsLoading(false) 
        } 
        catch (error) {
            console.error(error);
        }       
    };

    useEffect(()=>{
        window.scrollTo(0,0)
        getCollectionData(idCollection)
    },[idCollection])

    return(        
        <main className="itemListContainer">
            {isLoading == true ? 
                <div className="spinnerContainer" >
                        <Spinner animation="border" role="status" className="spinner">
                        </Spinner> 
                </div> 
                               : 
                <ItemList collectionProducts={collectionData.products} collectionName={collectionData.collectionName}/>
            }
        </main>         
    )
}



