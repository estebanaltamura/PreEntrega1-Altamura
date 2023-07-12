import { useLayoutEffect, useContext, useRef } from "react"
import { IsLoadingContext } from "../../Contexts/IsLoadingContextProvider";
import { CoverImage } from "../../components/HomeBlocks/1-CoverImage/CoverImage";
import { CollectionsTitle } from "../../components/HomeBlocks/2-CollectionsTitle/CollectionsTitle"
import { Collection1 } from "../../components/HomeBlocks/3-Collection1/Collection1"
import { Collection1Title } from "../../components/HomeBlocks/4-Collection1Title/Collection1Title"
import { Collection2 } from "../../components/HomeBlocks/5-Collection2/Collection2"
import { Collection2Title } from "../../components/HomeBlocks/6-Collection2Title/Collection2Title"
import { Collection3 } from "../../components/HomeBlocks/7-Collection3/Collection3"
import { Collection3Title } from "../../components/HomeBlocks/8-Collection3Title/Collection3Title"
import { WeParagraphTitle } from "../../components/HomeBlocks/9-WeParagraphTitle/WeParagraphTitle"
import { WeParagraph1 } from "../../components/HomeBlocks/10-WeParagraph1/WeParagraph1"
import { WeParagraph2 } from "../../components/HomeBlocks/11-WeParagraph2/WeParagraph2"
import { OurCommunityTitle } from "../../components/HomeBlocks/12-OurCommunityTitle/OurCommunityTitle"
import { OurCommunityImage } from "../../components/HomeBlocks/13-OurCommunityImage/OurCommunityImage"
import { FoundationImage } from "../../components/HomeBlocks/14-FoundationImage/FoundationImage"
import { FoundationParagraph1 } from "../../components/HomeBlocks/15-FoundationParagraph1/FoundationParagraph1"
import { FoundationParagraph2 } from "../../components/HomeBlocks/16-FoundationParagraph2/FoundationParagraph2"
import Spinner from 'react-bootstrap/Spinner';
import "./Home.css"

export const Home = ()=>{

  const { setIsLoading } = useContext(IsLoadingContext)
  const mainContainer = useRef()
  const spinner = useRef()
  const componentsLoaded = useRef([])
    

  useLayoutEffect(()=>{
    setIsLoading(true)
    window.scrollTo(0,0)   
    //eslint-disable-next-line 
  }, [])

  
  const onLoadHandler = (e)=>{
    componentsLoaded.current.push(e.target.classList[0])
    const componentsLoadedFiltered = componentsLoaded.current.filter(element=>element === "coleccionesImagenes" || element === "portadaMobile" || element === "portada375" || element === "portadaDesktop")
    if(componentsLoadedFiltered.length){
      mainContainer.current.classList.replace("hiddenHome", "mainContainer")
      spinner.current.classList.replace("spinnerContainer", "hidden")
      setIsLoading(false)
    }        
  }
    
  return(
    <>        
      <div ref={spinner} className="spinnerContainer" >
                            <Spinner animation="border" role="status" className="spinner">
                            </Spinner> 
      </div>            
                
      <div ref={mainContainer} className="hiddenHome" onLoad={onLoadHandler}>
        <CoverImage />
        <CollectionsTitle  />
        <Collection1  /> 
        <Collection1Title  /> 
        <Collection2 /> 
        <Collection2Title /> 
        <Collection3 /> 
        <Collection3Title /> 
        <WeParagraphTitle /> 
        <WeParagraph1 /> 
        <WeParagraph2 /> 
        <OurCommunityTitle /> 
        <OurCommunityImage /> 
        <FoundationImage /> 
        <FoundationParagraph1 /> 
        <FoundationParagraph2 />            
      </div>
            
    </>
  ) 
} 