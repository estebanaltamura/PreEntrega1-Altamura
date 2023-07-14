export const useSyntheticMediaQuery = ()=>{  
    
  const wasTriggeredMediaQuery = (currentWidth, lastWidth)=>{   

    if(currentWidth  > 374 &&
       lastWidth     < 375){         
      return true
    }
    
    else if(currentWidth  < 375 &&
            lastWidth     > 374){       
      return true
    }
    
    else if(currentWidth  > 767 &&
            lastWidth     < 768){       
      return true
    }
   
    else if(currentWidth  < 768 &&
            lastWidth     > 767){           
      return true
   }      

   else return false
  }    

  return({
    wasTriggeredMediaQuery
  })
}