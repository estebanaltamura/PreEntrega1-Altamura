import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { v4 as randomId } from 'uuid'
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider";
import { URLDataContext } from "../../contexts/URLDataContextProvider";
import { useGetCollectionData } from "../../services/internal/useGetCollectionData";
import { CollectionItemList } from "../../components/collectionComponents/CollectionItemList";
import Spinner from '../../assets/spinner.gif';
import "./Collection.css"

export const Collection = ()=>{
  const { isLoading, setIsLoading } = useContext(IsLoadingContext)
  const { currentURL }              = useContext(URLDataContext)  
  const [ collectionData, setCollectionData ] = useState([])
  const [ collectionName, setCollectionName ] = useState(null)  
  const { getCollectionData } = useGetCollectionData()
  const history = useNavigate()
  const VIIcounterRef = useRef(0)  
  
  const onLoadHandler = (e)=>{
    const elementJustLoaded = e.target.classList.value.includes('imagenCard') &&  e.target.classList[0]    

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

  const getDataHandler = async (collectionName)=>{
    const getCollectionDataResponse = await getCollectionData(collectionName)
    getCollectionDataResponse ? setCollectionData(getCollectionDataResponse) : history("/home")
  }

  useEffect(()=>{  
    const { section , subSection } = currentURL  
    
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant"
    })

    section === "collections" && setCollectionName(subSection)        
  },[currentURL])

  useEffect(()=>{       
    collectionName !== null &&  getDataHandler(collectionName)     
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