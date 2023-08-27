export const useMercadoPagoService = ()=>{  
  const getUrl = async (items)=>{
    const endPoint = "https://www.encrypted-chat-backend.online:5000/createOrder"  
    
    try{
      const data = await fetch(endPoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        mode: 'cors',        
        
        body: JSON.stringify({
          items
        })
      })
  
      if(data.status === 201){
        const json = await data.json()
        return json
      }
      else throw new Error(`Error interacting with Mercado pago`);   
    }
    catch(error){
      return false      
    }
  }  
    
  return({
    getUrl    
  })
}