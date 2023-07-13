import { useState, useEffect, useContext } from "react";
import {useParams, useNavigate} from 'react-router-dom';
import { v4 as randomId } from 'uuid'
import { getFirestore, doc, query, where, collection, getDocs, orderBy } from "firebase/firestore"
import { IsLoadingContext } from "../../Contexts/IsLoadingContextProvider";
import { NoFlashOfUnloadedContentInCollectionContextProvider } from "../../Contexts/NoFlashOfUnloadedContentInCollectionContextProvider";
import { CollectionItemList } from "../../components/CollectionComponents/CollectionItemList";
import Spinner from 'react-bootstrap/Spinner';
import "./Collection.css"

export const Collection = ()=>{

  const { idCollection } = useParams() 
  const [ collectionData, setCollectionData ] = useState([])
  const { isLoading, setIsLoading } = useContext(IsLoadingContext)  
  const history = useNavigate()


  const getCollectionData = async (idCollection)=>{
    try {  
      const db = getFirestore() 
      const queryDoc = doc(db, "products", "backpack collections")
      const queryCollection = collection(queryDoc, idCollection)
      const queryFilter = query(queryCollection, orderBy("id"), where("isActive", "==", true))          
      getDocs(queryFilter).then( res=> {
        setCollectionData(res.docs.length === 0 ? history("/home") :res.docs.map(product=>product.data()))                 
      })                       
    } 
    
    catch (error) {
      console.error(error);
    }       
  };

  useEffect(()=>{       
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant"
    })
    getCollectionData(idCollection)     
    //eslint-disable-next-line 
  },[idCollection])

  useEffect(()=>{
    setIsLoading(true) 
  },[])
    

  return(        
    <main className="itemListContainer">
           
      <div className={isLoading === true ? "spinnerContainer" : "hidden"} >
        <Spinner animation="border" role="status" className="spinner"></Spinner> 
      </div>    
      
      <CollectionItemList key={randomId()} visivilityClass={isLoading === true ? "hidden" : "itemList"} collectionProducts={collectionData} collectionName={idCollection} />
      
            
    </main>         
  )
}
