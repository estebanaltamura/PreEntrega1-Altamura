export const useVeryImportantComponentsLoad = ()=>{
  
  const isVeryImportantComponent = (elementJustLoaded, veryImportantComponentsLoaded)=>{
    if(elementJustLoaded === "coleccionesImagenes"){
      return true
    } 
    else if(elementJustLoaded === "portadaMobile" ||  elementJustLoaded === "portada375" ||  elementJustLoaded === "portadaDesktop"){      
      if(veryImportantComponentsLoaded.some((element)=>element === "portadaMobile" ||  element === "portada375" ||  element === "portadaDesktop")){
        return false
      }
      else return true
    }  
    return false         		
  }

  const isAllVeryImportantComponentLoaded = (veryImportantComponentsLoaded)=>{    
    if(veryImportantComponentsLoaded.length === 4) return true
    else return false
  }

  const getCurrentAndLastWidth = (currentAndLastWidth, screenWidth)=>{
    
    if(currentAndLastWidth.length < 2){
      currentAndLastWidth.push(screenWidth)
    }
    else{
      currentAndLastWidth[0] = currentAndLastWidth[1]
      currentAndLastWidth[1] = screenWidth
    }   
  
    const currentWidth  = currentAndLastWidth[1]
    const lastWidth     = currentAndLastWidth[0]  
    
    return ([ currentWidth, lastWidth ])
  }        
    
  return({
    isVeryImportantComponent,
    isAllVeryImportantComponentLoaded,
    getCurrentAndLastWidth   
  })
}