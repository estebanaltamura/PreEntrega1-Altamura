import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { v4 as randomId } from 'uuid'
import { getFirestore, doc, query, where, collection, getDocs, orderBy } from "firebase/firestore"
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider";
import { CollectionItemList } from "../../components/collectionComponents/CollectionItemList";
import { URLDataContext } from "../../contexts/URLDataContextProvider";
import Spinner from '../../assets/spinner.gif';
import "./Collection.css"

export const Collection = ()=>{
  const { isLoading, setIsLoading } = useContext(IsLoadingContext)
  const { currentURL }              = useContext(URLDataContext)  

  const [ collectionData, setCollectionData ] = useState([])
  const [ collectionName, setCollectionName ] = useState(null)  

  const history = useNavigate()
  const VIIcounterRef = useRef(0)
  
  const getCollectionData = async (idCollection)=>{
    try {        
      const db = getFirestore() 
      const queryDoc = doc(db, "products", "backpack collections")
      const queryCollection = collection(queryDoc, idCollection)
      const queryFilter = query(queryCollection, orderBy("id"), where("isActive", "==", true))          
      getDocs(queryFilter).then( res=> {
        setCollectionData(res.docs.length === 0 ? history("/home") : res.docs.map(product=>product.data()))                 
      })                       
    } 
    
    catch (error) {
      console.log("error de request")
      console.error(error);
    }       
  }; 
  
  const onLoadHandler = (e)=>{
    const elementJustLoaded = e.target.classList[0] 

    if(VIIcounterRef.current < 6){      
      if (elementJustLoaded === "imagenCard1" ||
          elementJustLoaded === "imagenCard2" ||
          elementJustLoaded === "imagenCard3" ||
          elementJustLoaded === "imagenCard4" ||
          elementJustLoaded === "imagenCard5" ||
          elementJustLoaded === "imagenCard6"){  

            VIIcounterRef.current += 1
      }      
    }         

    if(VIIcounterRef.current === 6){      
      VIIcounterRef.current = 0
      setIsLoading(false)
    }     
  }

  useEffect(()=>{  
    const { section , subSection } = currentURL   
    section === "collections" && setCollectionName(subSection)        
  },[currentURL])

  useEffect(()=>{       
 
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant"
    })

    collectionName !== null && getCollectionData(collectionName)      
    //eslint-disable-next-line 
  },[collectionName])

  return(        
    <main className="itemListContainer" onLoad={onLoadHandler}>      
      <div className={isLoading === true ? "spinnerContainer" : "hidden"} >
        <img src={Spinner} />        
      </div>       
       
      <CollectionItemList       
        key={randomId()}     
        visibility={isLoading === true ? "hidden" : "itemList"}    
        collectionProducts={collectionData} 
        collectionName={collectionName} 
      />       
    </main>         
  )
}
