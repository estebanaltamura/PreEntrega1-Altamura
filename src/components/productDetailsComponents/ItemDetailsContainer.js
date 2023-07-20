import {useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { getFirestore, doc, collection, getDocs, where, query } from "firebase/firestore"; 
import { ItemDetails } from "./ItemDetails.js";
import "./ItemDetailsContainer.css"


export const ItemDetailsContainer = ()=>{

  const {idProduct, idCollection} = useParams() 
  const [productData, setProductData] = useState({})
  const [isLoading, setIsLoading] = useState(true)


  const collectionData = async (idProduct, idCollection)=>{
    try{
      setIsLoading(true) 
      const db = getFirestore()
      const queryDoc = doc(db, "products", "backpack collections")        
      const queryCollection = collection(queryDoc, idCollection)
      const queryFilter = query(queryCollection, where("id", "==", Number(idProduct)))
      getDocs(queryFilter).then( res=>{
        setProductData( res.docs[0].data())
        Array.isArray(res.docs[0].data().images) && setIsLoading(false)
      })
    }  

    catch (error) {
      console.error(error);
    }   
  };

  useEffect(()=>{
    collectionData(idProduct, idCollection)    
    //eslint-disable-next-line  
  },[idProduct])

  useEffect(()=>{
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant"
    })       
  },[])

  return(        
    <div className="ItemDetailsContainer">
      {isLoading === true ? 
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

                                


