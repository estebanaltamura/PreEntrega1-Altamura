import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { ItemDetails } from "./ItemDetails.jsx";
import "./ItemDetailsContainer.css"


export const ItemDetailsContainer = ()=>{

const {id} = useParams()
const [productData, setProductData] = useState({})
const [isLoading, setIsLoading] = useState(true)


const collectionData = async ()=>{

    const getProduct = (claves, allData, id)=>{
        let productFounded;
        claves.forEach(collectionName=>{
            allData[collectionName].products.forEach(product=>{
                if (product.id == id)  productFounded = product
            })
        })
        if (productFounded !== "")  return productFounded        
    }  
    
    
    try {
        setIsLoading(true) 
        const response = await fetch("https://63c98161320a0c4c954a3283.mockapi.io/fakeapi")
        const json = await response.json()
        const allData = await json[0]
        
        const claves = Object.keys(allData)
        const product = getProduct(claves, allData, id)
        
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

useEffect(()=>{
    window.scrollTo(0,0)     
},[])



    return(
        
        <div className="ItemDetailsContainer">
            {isLoading == true ? 
                <div className="spinnerContainer" >
                        <Spinner animation="border" role="status" className="spinner">
                        </Spinner> 
                </div> 
                                : 
                <ItemDetails name={productData.name} price={productData.price} images={productData.images} description={productData.longDescription} productData={productData}/>
            }
        </div> 
    
)   
}