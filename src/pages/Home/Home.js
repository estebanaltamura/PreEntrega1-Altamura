import { useEffect, useContext, useRef, useState } from "react"
import { IsLoadingContext } from "../../Contexts/IsLoadingContextProvider";
import { ScreenWidthContext } from "../../Contexts/ScreenWidthContextProvider";
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

  const { isLoading, setIsLoading } = useContext(IsLoadingContext)  
  const { screenWidth, setScreenWidth } = useContext(ScreenWidthContext)
  const componentsLoaded = useRef([])
  const [ veryImportantComponentsLoaded, setVeryImportantComponentsLoaded] = useState(false)

  const veryImportantComponentsLoadedRef = useRef()

  const previousScreenWidthRef = useRef([])

  useEffect(()=>{
    
    previousScreenWidthRef.current.push(screenWidth)
    //console.log(previousScreenWidthRef.current[previousScreenWidthRef.current.length -1])

    const currentWidth  = previousScreenWidthRef.current[previousScreenWidthRef.current.length -1]
    const lastWidth     = previousScreenWidthRef.current[previousScreenWidthRef.current.length -2]

    //console.log(currentWidth, lastWidth)

    if(currentWidth > 374 &&
      lastWidth     < 375){
       //Carga imagen 375
       console.log("de mobile a 375")
       setIsLoading(true)
      }
    
    if(currentWidth < 374 &&
      lastWidth     > 375){
      //Carga imagen mobile
      console.log("de 375 a mobile")
      setIsLoading(true)
    }
    
    if(currentWidth > 767 &&
      lastWidth     < 768){
      //Carga imagen desktop
      console.log("de 375 a desktop")
      setIsLoading(true)
     }
   
    if(currentWidth < 767 &&
      lastWidth     > 768){
      console.log("de desktop a 375")
      //Carga imagen 375
      setIsLoading(true)
   }
   
  },[screenWidth])

  useEffect(()=>{
    veryImportantComponentsLoadedRef.current = veryImportantComponentsLoaded
    //console.log("valor del ref", veryImportantComponentsLoadedRef.current)
  },[veryImportantComponentsLoaded])



  

  const onLoadHandler = (e)=>{    
    setIsLoading(true) // ver por que cuando actualiza portada loading true cuando ya esta cargada
    const elementJustLoaded = e.target.classList[0]    
    
    if(elementJustLoaded === "coleccionesImagenes"){      
      componentsLoaded.current.push(elementJustLoaded)      
    }
    else if(elementJustLoaded === "portadaMobile" ||  elementJustLoaded === "portada375" ||  elementJustLoaded === "portadaDesktop"){
      
      
      
      if(componentsLoaded.current.findIndex((element)=>element === "portadaMobile" ||  element === "portada375" ||  element === "portadaDesktop") === -1){        
        componentsLoaded.current.push(elementJustLoaded)
      }
      else{
        componentsLoaded.current[componentsLoaded.current.findIndex((element)=>element === "portadaMobile" ||  element === "portada375" ||  element === "portadaDesktop")] = elementJustLoaded
      } 
    }   
    
    //console.log("ultimo", elementJustLoaded, componentsLoaded.current.length)
    if(componentsLoaded.current.length === 4){    
      setVeryImportantComponentsLoaded(true)    
      setIsLoading(false)
    }        
  }
    
  return(
    <>             
      <div className="homeContainer">
        <div className={isLoading === true ? "spinnerContainer" : "hidden"} >
          <Spinner animation="border" role="status" className="spinner"></Spinner> 
        </div>     

        <div className={isLoading === false ? "homeGrid" : "hidden"} onLoad={onLoadHandler} >
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
      </div>             
    </>
  ) 
} 