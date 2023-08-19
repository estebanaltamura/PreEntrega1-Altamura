import { useEffect, useState, useContext } from "react";
import { useParams } from 'react-router-dom';
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider";
import { getFirestore, doc, collection, getDocs, where, query } from "firebase/firestore"; 
import { ProductDetails } from '../../components/productDetailsComponents/ProductDetails';
import Spinner from '../../assets/spinner.gif';
import "./ProductDetailsContainer.css"

export const ProductDetailsContainer = ()=>{
  const { isLoading, setIsLoading } = useContext(IsLoadingContext)
  const {idProduct, idCollection} = useParams() 
  const [productData, setProductData] = useState(null)

  const collectionData = async (idProduct, idCollection)=>{
    try{       
      const db = getFirestore()
      const queryDoc = doc(db, "products", "backpack collections")        
      const queryCollection = collection(queryDoc, idCollection)
      const queryFilter = query(queryCollection, where("id", "==", Number(idProduct)))
      const productDataResponse = await getDocs(queryFilter)        
      setProductData(productDataResponse.docs[0].data())      
    }  

    catch (error) {
      console.error(error);
    }   
  };

  const onLoadHandler = (e)=>{    
    e.target.id === 'firstSlideImage' && setIsLoading(false)
  }

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
    <div className="ItemDetailsContainer" onLoad={onLoadHandler} >      
        <div className={isLoading === true ? "spinnerContainer" : "hidden"} >
          <img src={Spinner} />        
        </div>               
        {
          productData !== null &&  <ProductDetails name={productData.name} price={productData.price} images={productData.images} description={productData.longDescription} productData={productData}/>
        }       
    </div>     
  )   
}

                                


