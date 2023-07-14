import { useContext, useEffect } from "react"
import { ScreenWidthContext } from "../../../Contexts/ScreenWidthContextProvider"
import { PortadaMobile } from "./PortadaMobile"

import "./CoverImage.css"

export const CoverImage = ()=>{

  const { screenWidth } = useContext(ScreenWidthContext)  
  
  useEffect(()=>{
    //console.log("coverimage DOMcontentLoaded")
  },[])

  return(
    <>
      {
        screenWidth < 375 ?
          <PortadaMobile />
                          :
        screenWidth < 768 ?
          <img className="portada375" loading="eager" src="https://i.postimg.cc/Zn5z1JjG/portada375.jpg" alt="imagen media" />        :

          <img className="portadaDesktop" loading="eager" src="https://i.postimg.cc/W1kcRW61/portada-desktop.jpg" alt="imagen grande" />                 
      }
    </>
  )
}