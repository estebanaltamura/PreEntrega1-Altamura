import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import "./OrderCreated.css"

export const OrderCreated = ()=>{
  const {orderId} = useParams()
  const [ secondsToRedirect, setSecondsToRedirect ] = useState(5)
  const history = useNavigate()
  
  useEffect(()=>{
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant"
    })

    const interval = setInterval(()=>{
      setSecondsToRedirect((secondsToRedirect)=>secondsToRedirect - 1)      
    }
    , 1000)               
    
    return ()=>clearInterval(interval)                
    //eslint-disable-next-line 
  },[])

  useEffect(()=>{
    secondsToRedirect === 0 && history("/home")
    //eslint-disable-next-line
  },[secondsToRedirect])

  return( 
    <div className="orderCreatedContainer">
      <div className="orderCreatedMessagesContainer">
        <h1 className="orderCreatedTitle">{`Order number ${orderId} created`}</h1>
        <h2 className="orderCreatedSubtitle">(saved in Firestore)</h2>        
        <p className="orderCreatedMessage1">{`In 24-48 hours we are going to contact you for payment details and delivery`}</p>        
        <p className="orderCreatedMessage2">{`Redirenting to home page in ${secondsToRedirect} ${secondsToRedirect > 1 ? 'seconds' : 'second'}`}</p>     
      </div>             
    </div> 
  )
} 