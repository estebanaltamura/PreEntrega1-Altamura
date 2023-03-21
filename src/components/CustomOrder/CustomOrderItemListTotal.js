import { useContext } from "react"
import { CartContext } from "../Contexts/CartContextProvider"
import "./CustomOrderItemListTotal.css"


export const CustomOrderItemListTotal = ()=> {

    const { itemsCartAdded } = useContext(CartContext)

    return(
        <>
            <div className="customOrderItemTotal">
                <span className="customOrderTotalTitle">TOTAL</span>
                <span className="customOrderTotal">{itemsCartAdded.reduce((accumulator, partial)=>accumulator + partial.subTotal, 0)}</span>
            </div>

    </>
    )
}