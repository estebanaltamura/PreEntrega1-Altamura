import { createContext, useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { IsLoadingContext } from "./IsLoadingContextProvider";

export const URLchangesContext = createContext(null)

export const URLchangesContextProvider = ( {children} )=>{

  const [ currentLastPartOfURL, setCurrentLastPartOfURL ] = useState(null)
  const { setIsLoading } = useContext(IsLoadingContext)

  const url = useLocation()

  useEffect(()=>{
    const urlInParts = url.pathname.split("/")
    const urlLastPart = urlInParts[urlInParts.length - 1]
    const urlLastPartclean = urlLastPart.replaceAll("%20", " ")    
    setCurrentLastPartOfURL(urlLastPartclean)    
    
  },[url])

  useEffect(()=>{
    //setIsLoading(true)
  },[currentLastPartOfURL])


  return(
    <URLchangesContext.Provider value={{ currentLastPartOfURL, setCurrentLastPartOfURL }}>
      {children}
    </URLchangesContext.Provider>
  )
}