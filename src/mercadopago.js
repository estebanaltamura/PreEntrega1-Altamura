


export const getUrl = async (items)=>{
  const endPoint = "https://d5cb-2800-810-496-db9-a0cf-ae40-d8b7-d5cf.ngrok-free.app/createOrder"

  console.log(items)
  const data = await fetch(endPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Agrega cualquier otra cabecera requerida
      },
      mode: 'cors', // Habilita el modo CORS 

      
      body: JSON.stringify({
        items
      })
    })

  const json = await data.json()
  console.log(json)
}

    









