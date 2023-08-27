import { useEffect, useContext, useRef } from "react"
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider";
import { ScreenWidthContext } from "../../contexts/ScreenWidthContextProvider";
import { useSyntheticMediaQueries } from "../../hooks/useSyntheticMediaQueries";
import { useVeryImportantComponentsLoad } from "../../hooks/useVeryImportantComponentsLoad";
import { CoverImage } from "../../components/homeBlocks/1-coverImage/CoverImage";
import { CollectionsTitle } from "../../components/homeBlocks/2-collectionsTitle/CollectionsTitle"
import { Collection1 } from "../../components/homeBlocks/3-collection1/Collection1"
import { Collection1Title } from "../../components/homeBlocks/4-collection1Title/Collection1Title"
import { Collection2 } from "../../components/homeBlocks/5-collection2/Collection2"
import { Collection2Title } from "../../components/homeBlocks/6-collection2Title/Collection2Title"
import { Collection3 } from "../../components/homeBlocks/7-collection3/Collection3"
import { Collection3Title } from "../../components/homeBlocks/8-collection3Title/Collection3Title"
import { WeParagraphTitle } from "../../components/homeBlocks/9-weParagraphTitle/WeParagraphTitle"
import { WeParagraph1 } from "../../components/homeBlocks/10-weParagraph1/WeParagraph1"
import { WeParagraph2 } from "../../components/homeBlocks/11-weParagraph2/WeParagraph2"
import { OurCommunityTitle } from "../../components/homeBlocks/12-ourCommunityTitle/OurCommunityTitle"
import { OurCommunityImage } from "../../components/homeBlocks/13-ourCommunityImage/OurCommunityImage"
import { FoundationImage } from "../../components/homeBlocks/14-foundationImage/FoundationImage"
import { FoundationParagraph1 } from "../../components/homeBlocks/15-foundationParagraph1/FoundationParagraph1";
import { FoundationParagraph2 } from "../../components/homeBlocks/16-foundationParagraph2/FoundationParagraph2";
import Spinner from '../../assets/spinner.gif';
import "./Home.css"

export const Home = ()=>{

  const { isLoading, setIsLoading } = useContext(IsLoadingContext)  
  const { screenWidth } = useContext(ScreenWidthContext)
  
  const { wasTriggeredMediaQuery,
          getCurrentAndLastWidth
        } = useSyntheticMediaQueries()  
  
  const { isVeryImportantComponent, 
          areAllVeryImportantComponentLoaded,
          removeCoverImageOfveryImportantComponentsLoadedRef                   
        } = useVeryImportantComponentsLoad()

  const currentAndLastWidthRef            = useRef([])
  const veryImportantComponentsLoadedRef  = useRef([])    
  
  useEffect(()=>{      
    isLoading === false && window.scrollTo(0, 0);   
    //eslint-disable-next-line
  },[isLoading])     
  
  useEffect(()=>{
    // Set isLoading true when media query changes  
    const [ currentWidth, lastWidth ] = getCurrentAndLastWidth(currentAndLastWidthRef.current, screenWidth)      
    if(wasTriggeredMediaQuery(currentWidth, lastWidth) === true){
      veryImportantComponentsLoadedRef.current = [...removeCoverImageOfveryImportantComponentsLoadedRef(veryImportantComponentsLoadedRef.current)]      
      setIsLoading(true) 
    }  
    //eslint-disable-next-line        
  },[screenWidth])    

  const onLoadHandler = (e)=>{      
    // Set isLoading false when 4 very important components are loaded. Main cover image and 3 collection cover images 
    const elementJustLoaded = e.target.classList[0]    
    isVeryImportantComponent(elementJustLoaded, veryImportantComponentsLoadedRef.current) && veryImportantComponentsLoadedRef.current.push(elementJustLoaded)    
    areAllVeryImportantComponentLoaded(veryImportantComponentsLoadedRef.current) && setIsLoading(false)        
  }       
    
  return(
    <>             
      <div className="homeContainer">
        <div className={isLoading === true ? "spinnerContainer" : "hidden"} >      
          <img src={Spinner} alt="Spinner" />           
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