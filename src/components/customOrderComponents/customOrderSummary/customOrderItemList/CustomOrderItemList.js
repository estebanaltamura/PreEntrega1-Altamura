import { useContext } from "react"
import { CartContext } from "../../../../contexts/CartContextProvider"
import { CustomOrderItem } from '../customOrderItem/CustomOrderItem'

import "./CustomOrderItemList.css"

export const CustomOrderItemList = ()=> {
  const { cartItems } = useContext(CartContext)

  return(
    <div className="orderItemList">
      <>
        {
          cartItems.map((product, index)=>{ return <CustomOrderItem product={product} key={index} />} )
        }
      </>
    </div>
  )
}