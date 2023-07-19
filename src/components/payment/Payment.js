import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../contexts/CartContextProvider"

import "./Payment.css"

export const Payment = ()=>{

    const { cartItems } = useContext(CartContext)

    const adjustObjectToSendToMP = (cartItems)=>{
        return cartItems.map((product)=>{
            return {name: product.name, description: product.shortDescription, price: product.price, image: product.images[0], quantity: product.quantity, subTotal: product.subTotal}
        })
    }

    return(
        <main className="paymentMainContainer">
            <div className="paymentGridContainer redondeado">
                <h3 className="tituloParaspanInfoParaMp">OBJECT TO MERCADOPAGO API</h3>
                <div className="objectToMPContainer">
                    {cartItems.length === 0   ? 
                    "No items in the cart"         : 
                    adjustObjectToSendToMP(cartItems).map((product, index)=>{
                        return <p key={index}>{JSON.stringify(product)}<br /><br /></p> 
                    })
                    }
                
                </div>
            </div>

            <Link className="botonesCarro botonesCarroConItems" to="/home">CONTINUE SHOPPING</Link> 
        </main>
    )
}