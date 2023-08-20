import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContextProvider";
import emptyCartButton from '../../../assets/emptyCartButton.svg'
import "./TotalRowCartItemList.css"

export const TotalRowCartItemList = ({totalCart})=>{
  const { dispatch  } = useContext(CartContext)
  const onEmptyCartClickHandler = ()=> dispatch({type: "CLEAR_CART"}) 


  return( 
    <div id="totalCart" className={window.innerWidth > 768 ? "totalCartContainer" : "totalCartContainerMobile"}> 
      <span className="totalCartTitle">TOTAL</span>
      <span className="totalCartNumber" id="totalCartNumber">{`$${totalCart}`}</span>
      <button onClick={onEmptyCartClickHandler} className="emptyCartButton"><img src={emptyCartButton} /></button> 
    </div>
  )
} 