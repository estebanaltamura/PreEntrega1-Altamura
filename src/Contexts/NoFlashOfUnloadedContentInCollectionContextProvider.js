import { createContext, useState, useEffect, useContext } from "react"
import { IsLoadingContext } from "./IsLoadingContextProvider"

export const NoFlashOfUnloadedContentInCollectionContext = createContext(null)


export const NoFlashOfUnloadedContentInCollectionContextProvider = ({ children })=>{

	const [ imagesLoadedCounter, setImagesLoadedCounter ] = useState(0)
  const [ lastVII, setLastVII ] = useState([])
  const { setIsLoading } = useContext(IsLoadingContext)

  useEffect(()=>{    
    if (imagesLoadedCounter === 6){
        setIsLoading(false)
        setImagesLoadedCounter({"onOff": "off", "counter": 0})
    }
    console.log(imagesLoadedCounter)
  },[imagesLoadedCounter])


  useEffect(()=>{
    console.log(lastVII)
    //setImagesLoadedCounter((imagesLoadedCounter)=>imagesLoadedCounter + 1)
  },[lastVII])

  return(
    <NoFlashOfUnloadedContentInCollectionContext.Provider value={ { imagesLoadedCounter, setImagesLoadedCounter, lastVII, setLastVII } }>
      { children }
    </NoFlashOfUnloadedContentInCollectionContext.Provider>
  )
}