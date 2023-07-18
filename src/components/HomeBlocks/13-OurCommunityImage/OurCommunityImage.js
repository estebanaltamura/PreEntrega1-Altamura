import { useContext } from "react"
import { ScreenWidthContext } from "../../../contextsa/ScreenWidthContextProvider"
import { OurCommunityMobileImages } from "./1-ourComunnityMobileImages/OurComunnityMobileImages"
import { OurCommunityTabletImages } from "./2-ourCommunityTabletImages/OurCommunityTabletImages"
import { OurCommunity992pxImages } from "./3-ourCommunity992pxImages/OurCommunity992pxImages"
import { OurCommunityDesktopImages } from "./4-ourCommunityDesktopImages/OurCommunityDesktopImages"
import "./OurCommunityImage.css"


export const OurCommunityImage = ()=>{
  
  const { screenWidth } = useContext(ScreenWidthContext)  

  return(
    <>          
      {screenWidth < 768              ?
        <OurCommunityMobileImages />  :

      screenWidth < 992               ?
        <OurCommunityTabletImages />  :

      screenWidth < 1200              ?
        <OurCommunity992pxImages />   :

        <OurCommunityDesktopImages />
      }
    </>
  )
}

