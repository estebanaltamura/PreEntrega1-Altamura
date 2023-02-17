import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productos } from "../productos.js";
import { ItemDetails } from "./ItemDetails.jsx";
import "../components/ItemDetailsContainer.css"


export const ItemDetailsContainer = ()=>{

const {id} = useParams()
const [productData, setProductData] = useState({})
const [isLoading, setIsLoading] = useState(true)


const collectionData = async (idProduct)=>{

    const getProduct = (claves, allData, id)=>{
        let productFounded;
        claves.forEach(element=>{
            allData[element].forEach(elementx=>{
                if (elementx.id == id)  productFounded = elementx
            })
        })
        if (productFounded !== ""){
            return productFounded
        }  
    }
    
    try {
        const response = await fetch("https://63c98161320a0c4c954a3283.mockapi.io/fakeapi")
        const json = await response.json()
        const allData = await json[0]
        
        const claves = Object.keys(allData)
        const product = getProduct(claves, allData, idProduct)
           
        setProductData(product) 
        setIsLoading(false)
    }    

    catch (error) {
        console.error(error);
    }   
};

useEffect(()=>{
    collectionData(id)
},[id])

    return(
        
        <div className="ItemDetailsContainer">
            {isLoading == true ? 
        
        <>
            <h1>LOADING...</h1> 
        </>
                                : 
        
            <ItemDetails nombre={productData.nombre} precio={productData.precio} imagen={productData.imagen}/>
            }
        </div> 
    
)   
}