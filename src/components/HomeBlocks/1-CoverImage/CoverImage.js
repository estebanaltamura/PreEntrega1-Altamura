import { useContext, useEffect } from "react"
import { ScreenWidthContext } from "../../../Contexts/ScreenWidthContextProvider"
import { v4 as randomId } from 'uuid'


import "./CoverImage.css"

export const CoverImage = ()=>{

  const { screenWidth } = useContext(ScreenWidthContext)  
  
  useEffect(()=>{
    console.log(" cover monto ")
  },[])
  
  return(
    <>
      {
        screenWidth < 375 ?
          <img className="portadaMobile" loading="eager" src="https://i.postimg.cc/W3nPWdmm/portada-mobile.jpg" alt="imagen chica" />
                          :
        screenWidth < 768 ?
          <img className="portada375" loading="eager" src="https://i.postimg.cc/Zn5z1JjG/portada375.jpg" alt="imagen media" />        :

          <img className="portadaDesktop" loading="eager" src="https://i.postimg.cc/W1kcRW61/portada-desktop.jpg" alt="imagen grande" />                 
      }
    </>
  )
}