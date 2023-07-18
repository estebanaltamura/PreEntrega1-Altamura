import { useState, useEffect, useContext, useRef } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import { v4 as randomId } from 'uuid'
import { getFirestore, doc, query, where, collection, getDocs, orderBy } from "firebase/firestore"
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider";
import { CollectionItemList } from "../../components/collectionComponents/CollectionItemList";
import Spinner from '../../assets/spinner.gif';
import { Player } from '@lottiefiles/react-lottie-player';
import "./Collection.css"

export const Collection = ()=>{
  const { isLoading, setIsLoading } = useContext(IsLoadingContext)  
  const [ collectionData, setCollectionData ] = useState([])
  const [ collectionName, setCollectionName ] = useState(null)

  const url     = useLocation()  
  const history = useNavigate()

  const VIIcounterRef = useRef(0)

  useEffect(()=>{
    const urlInParts = url.pathname.split("/")
    const urlLastPart = urlInParts[urlInParts.length - 1]
    const urlLastPartclean = urlLastPart.replaceAll("%20", " ")
    console.log(urlLastPartclean)
    setCollectionName(urlLastPartclean)
    //console.log(urlLastPartclean)
  },[url])

  useEffect(()=>{        
    setIsLoading(true)

    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant"
    })

    collectionName !== null && getCollectionData(collectionName)      
    //eslint-disable-next-line 
  },[collectionName])

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
    
  const onLoadHandler = (e)=>{
    const elementJustLoaded = e.target.classList[0]   
    //console.log(elementJustLoaded)
    if (elementJustLoaded === "imagenCard1" ||
        elementJustLoaded === "imagenCard2" ||
        elementJustLoaded === "imagenCard3" ||
        elementJustLoaded === "imagenCard4" ||
        elementJustLoaded === "imagenCard5" ||
        elementJustLoaded === "imagenCard6"){
      
      VIIcounterRef.current += 1
    }
    if(VIIcounterRef.current === 6){      
      VIIcounterRef.current = 0
      setIsLoading(false)
    } 
    

  }

  return(        
    <main className="itemListContainer" onLoad={onLoadHandler}>      
      <div className={isLoading === true ? "spinnerContainer" : "hidden"} >
        <img src={Spinner} />  
        {/* <Player
          autoplay
          loop          
          speed= '2'         
          src="https://lottie.host/bc11eea0-68fb-4a16-8247-b1a418f3c5ed/OlFoga7EfH.json"
          style={{ height: '180px', width: '180px'}}
          >          
        </Player>        */}
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
