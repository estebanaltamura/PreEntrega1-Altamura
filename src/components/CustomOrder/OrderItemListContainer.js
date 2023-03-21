import { OrderItemList } from "./OrderItemList"
import { CustomOrderItemListHeader } from "./CustomOrderItemListHeader"
import { CustomOrderItemListTotal } from "./CustomOrderItemListTotal"
import "./OrderItemListContainer.css"

export const OrderItemListContainer = ()=> {
    return(
        <div className="orderItemListContainer">
            <div className="orderItemListd">
                <h2 className="mb-4">Items</h2>
                <CustomOrderItemListHeader />
                <OrderItemList />
                <CustomOrderItemListTotal />
            </div>
        </div>
    )
}