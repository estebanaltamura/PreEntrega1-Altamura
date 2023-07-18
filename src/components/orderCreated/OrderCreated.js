import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"


import "./OrderCreated.css"

export const OrderCreated = ()=>{

    const {orderId} = useParams()
    const history = useNavigate()



   useEffect(()=>{
        window.scroll({
            top: 0,
            left: 0,
            behavior: "instant"
        })

        const interval = setInterval(()=>{
            history("/home")
            }
            , 5000)               
        return(
            ()=>clearInterval(interval)
        )        
        //eslint-disable-next-line 
    },[])

    return( 
        <div className="orderCreatedContainer" >

            <h3>{`Order number ${orderId} created`}</h3>
            <h4>(saved in Firestore)</h4>
            <br/> 
            <h3>{`In 24-48 hours we are going to contact you for payment details and delivery`}</h3>
            <br/> 
            <h3>{`Redirenting to home page in 5 seconds`}</h3>            
        </div>
    )
} 