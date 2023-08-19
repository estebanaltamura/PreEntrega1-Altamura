import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContextProvider";
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider";
import { FormCustomOrder } from "../../components/customOrderComponents/formCustomOrderComponents/FormCustomOrder";
import { CustomOrderSummary } from "../../components/customOrderComponents/customOrderSummary/CustomOrderSummary";
import Spinner from '../../assets/spinner.gif';
import "./CustomOrder.css"

export const CustomOrder = ()=>{

  const { cartItems } = useContext(CartContext)
  const { isLoading } = useContext(IsLoadingContext)

  useEffect(()=>{
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant"
    })
  },[])
    
  return(
    <div className="mainContainerCustomOrder">
      <>
        <FormCustomOrder />
        <CustomOrderSummary />
      </>                
    </div>
  )
}