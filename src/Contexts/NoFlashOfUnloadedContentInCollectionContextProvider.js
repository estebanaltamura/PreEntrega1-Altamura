import { createContext, useState, useEffect, useContext } from "react"
import { IsLoadingContext } from "./IsLoadingContextProvider"

export const NoFlashOfUnloadedContentInCollectionContext = createContext(null)


export const NoFlashOfUnloadedContentInCollectionContextProvider = ({ children })=>{

	const [ imagesLoadedCounter, setImagesLoadedCounter ] = useState({"onOff": "on", "counter": 0})
  const { setIsLoading } = useContext(IsLoadingContext)

  useEffect(()=>{    
    if (imagesLoadedCounter.counter === 6){
        setIsLoading(false)
        setImagesLoadedCounter({"onOff": "off", "counter": 0})
    }
  },[imagesLoadedCounter])

  return(
    <NoFlashOfUnloadedContentInCollectionContext.Provider value={ { imagesLoadedCounter, setImagesLoadedCounter } }>
      { children }
    </NoFlashOfUnloadedContentInCollectionContext.Provider>
  )
}