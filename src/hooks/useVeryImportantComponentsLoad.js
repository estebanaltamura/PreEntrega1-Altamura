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

  const areAllVeryImportantComponentLoaded = (veryImportantComponentsLoaded)=>{    
    if(veryImportantComponentsLoaded.length === 4) return true
    else return false
  }  

  const removeCoverImageOfveryImportantComponentsLoadedRef = (veryImportantComponentsLoaded)=>{
    const indexOfCoverImageToRemove = veryImportantComponentsLoaded.findIndex((element)=>element === "portadaMobile" ||  element === "portada375" ||  element === "portadaDesktop")
    veryImportantComponentsLoaded[indexOfCoverImageToRemove] = undefined
    const veryImportantComponentsLoadedWhitoutOldCoverImage = veryImportantComponentsLoaded.filter(VIC=> VIC !== undefined)
    return veryImportantComponentsLoadedWhitoutOldCoverImage
  }
    
  return({
    isVeryImportantComponent,
    areAllVeryImportantComponentLoaded,
    removeCoverImageOfveryImportantComponentsLoadedRef      
  })
}