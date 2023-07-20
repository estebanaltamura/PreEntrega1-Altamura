import { HeaderRowCuotomOrderItemList } from "./customOrderItemList/HeaderRowCuotomOrderItemList"
import { CustomOrderItemList } from "./customOrderItemList/CustomOrderItemList"
import { TotalRowCustomOrderItemList } from "./customOrderItemList/TotalRowCustomOrderItemList"

import "./CustomOrderSummary.css"

export const CustomOrderSummary = ()=> {
  return(
    <div className="orderItemListContainer">      
        <HeaderRowCuotomOrderItemList />
        <CustomOrderItemList />
        <TotalRowCustomOrderItemList />          
    </div>
  ) 
}