import "./OurCommunityImage.css"
import { BsChevronCompactLeft } from "react-icons/bs"
import { BsChevronCompactRight } from "react-icons/bs"
import { OurCommunityMobileImages } from "./1-OurComunnityMobileImages/OurComunnityMobileImages"
import { OurCommunityTabletImages } from "./2-OurCommunityTabletImages/OurCommunityTabletImages"
import { OurCommunity992pxImages } from "./3-OurCommunity992pxImages/OurCommunity992pxImages"
import { OurCommunityDesktopImages } from "./4-OurCommunityDesktopImages/OurCommunityDesktopImages"


export const OurCommunityImage = ()=>{
    return(
        <>
          
            {window.innerWidth < 768 ?
              <OurCommunityMobileImages /> :
             window.innerWidth < 992 ?
              <OurCommunityTabletImages /> :
              window.innerWidth < 1200 ?
              <OurCommunity992pxImages />:
              <OurCommunityDesktopImages />
            }
          
        </>
    )
}

{/**/ }