import { useEffect } from "react";
import { FormCustomOrder } from "../../components/customOrderComponents/formCustomOrderComponents/FormCustomOrder";
import { CustomOrderSummary } from "../../components/customOrderComponents/customOrderSummary/CustomOrderSummary";
import "./CustomOrder.css"

export const CustomOrder = ()=>{
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