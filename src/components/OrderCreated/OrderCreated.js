import { useState, useEffect, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom"
import "./OrderCreated.css"

export const OrderCreated = ()=>{

    const {orderId} = useParams()
    const [seconds, setSeconds] = useState(5)
    const history = useNavigate()
    const orderCreatedContainer = useRef()

    useEffect(()=>{
        window.scroll({
            top: 0,
            left: 0,
            behavior: "instant"
        })

        const interval = setInterval(()=>setSeconds(seconds-1), 1000)
        
        if (seconds == 0){
            orderCreatedContainer.current.classList.replace("orderCreatedContainer", "hidden")
            history("/home")
            clearInterval(interval)
            
        }
    },[seconds])

    return(
        <div className="orderCreatedContainer" ref={orderCreatedContainer}>

            <h3>{`Order number ${orderId} created`}</h3>
            <br/> 
            <h3>{`In 24-48 hours we are going to contact you for payment details and delivery`}</h3>
            <br/> 
            <h3>{`Redirenting to home page in ${seconds}`}</h3>
            
            
        </div>
    )
}