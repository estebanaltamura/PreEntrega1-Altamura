import { useParams } from "react-router-dom"
import "./OrderCreated.css"

export const OrderCreated = ()=>{

    const {orderId} = useParams()
    return(
        <div className="orderCreatedContainer">

            <h3>{`Order number ${orderId} created. In 24-48 hours we are going to contact you for payment details and delivery`}</h3>
        </div>
    )
}