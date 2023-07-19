import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const URLDataContext = createContext(null)

export const URLDataContextProvider = ( {children} )=>{

  const [ currentURL, setCurrentURL ] = useState({}) 
  const url = useLocation()

  useEffect(()=>{    
    const urlInParts = url.pathname.split("/")
    const urlInPartsWithoutFisrtEmptyElement = urlInParts.slice(1, urlInParts.length)    

    const getSectionAndSubSection = (urlInPartsWithoutFisrtEmptyElement)=>{
      let section
      let subSection

      if(urlInPartsWithoutFisrtEmptyElement.length === 1){
        section     = urlInPartsWithoutFisrtEmptyElement[0].replaceAll("%20", " ")
        subSection  = null
      }
      if(urlInPartsWithoutFisrtEmptyElement.length > 1){
        section     = urlInPartsWithoutFisrtEmptyElement[0].replaceAll("%20", " ")
        subSection  = urlInPartsWithoutFisrtEmptyElement[1].replaceAll("%20", " ")
      }

      return { section, subSection}
    }
    
    const { section, subSection } = getSectionAndSubSection(urlInPartsWithoutFisrtEmptyElement)
    
    setCurrentURL( { section , subSection } )       
  },[url])  


  return(
    <URLDataContext.Provider value={ { currentURL, setCurrentURL } }>
      {children}
    </URLDataContext.Provider>
  )
}