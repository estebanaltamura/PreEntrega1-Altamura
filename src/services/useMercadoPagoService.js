export const useMercadoPagoService = ()=>{
  
  const getUrl = async (items)=>{
    const endPoint = "https://www.encrypted-chat-backend.online:5000/createOrder"
  
    console.log(items)
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
  
    const json = await data.json()
    return json
  }
    
  return({
    getUrl
  })
}


    









