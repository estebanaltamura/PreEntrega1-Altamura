import { useContext } from "react"
import { ScreenWidthContext } from "../../../Contexts/ScreenWidthContextProvider"
import { OurCommunityMobileImages } from "./1-OurComunnityMobileImages/OurComunnityMobileImages"
import { OurCommunityTabletImages } from "./2-OurCommunityTabletImages/OurCommunityTabletImages"
import { OurCommunity992pxImages } from "./3-OurCommunity992pxImages/OurCommunity992pxImages"
import { OurCommunityDesktopImages } from "./4-OurCommunityDesktopImages/OurCommunityDesktopImages"
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

