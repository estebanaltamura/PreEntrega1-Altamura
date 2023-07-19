import { useContext } from "react"
import { CartContext } from "../../contexts/CartContextProvider"
import { OrderItem } from "./OrderItem"
import "./OrderItemList.css"

export const OrderItemList = ()=> {

  const { cartItems } = useContext(CartContext)

  return(
    <div className="orderItemList">
      <>
        {
          cartItems.map((product, index)=>{ return <OrderItem product={product} key={index} />} )
        }
      </>
    </div>
  )
}