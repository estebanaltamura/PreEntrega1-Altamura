import { useContext } from "react"
import { CartContext } from "../../contexts/CartContextProvider"
import "./CustomOrderItemListTotal.css"


export const CustomOrderItemListTotal = ()=> {

    const { cartItems } = useContext(CartContext)

    return(
        <>
            <div className="customOrderItemTotal">
                <span className="customOrderTotalTitle">TOTAL</span>
                <span className="customOrderTotal">{cartItems.reduce((accumulator, partial)=>accumulator + partial.subTotal, 0)}</span>
            </div>

    </>
    )
}