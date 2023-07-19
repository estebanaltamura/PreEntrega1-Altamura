import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../contexts/CartContextProvider"
import { ScreenWidthContext } from "../../contexts/ScreenWidthContextProvider";
import { CartItem } from "./CartItem"
import "./CartItemsList.css"

export const CartItemsList = ()=> {

  const { itemsCartAdded }  = useContext(CartContext)
  const { screenWidth }     = useContext(ScreenWidthContext)
  const [totalCart, setTotalCart] = useState([])

  useEffect(()=>{    
    if (itemsCartAdded.length ===  0){
      setTotalCart(0)
    } 
    if (itemsCartAdded.length ===  1){
      setTotalCart(itemsCartAdded[0].subTotal)
    } 
    if (itemsCartAdded.length >  1){
      setTotalCart(itemsCartAdded.reduce((acumulador, elemento)=>{return acumulador + elemento.subTotal}, 0))
    }             
  },[itemsCartAdded])



  return(
    <>
      {
        screenWidth > 768 &&
                
        <div className="itemHeader" id="itemHeader">
          <span className="productNameHeaderCart">Product</span>
          <span className="priceHeaderCart">Price</span>
          <span className="quantityHeaderCart">Quantity</span>
          <span className="subTotalHeaderCart">Sub Total</span>
        </div>                
      }

            
      {
        itemsCartAdded.map((product, index)=>{
          return <CartItem product={product} index={index} key={index}/>
        })
      }
            
            
      {                
        <div id="totalCart" className={window.innerWidth > 768 ? "totalCartContainer" : "totalCartContainerMobile"}> 
          <span className="totalCartTitle">TOTAL</span>
            <span className="totalCartNumber" id="totalCartNumber">{`$${totalCart}`}</span>
        </div>
      }
    </>
  )
}