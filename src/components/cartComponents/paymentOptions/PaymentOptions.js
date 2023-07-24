import { useContext } from "react";
import { Link } from "react-router-dom"
import { useMercadoPagoService } from "../../../services/useMercadoPagoService";
import { CartContext } from "../../../contexts/CartContextProvider";
import "./PaymentOptions.css"




export const PaymentOptions = ()=>{

  const { cartItems } = useContext(CartContext)
  const { getUrl }    = useMercadoPagoService()

  

  const MPButtonOnclickHandler = async ()=>{
    const urlToRedirect = await getUrl(cartItems);
    console.log(urlToRedirect.urlPayment)
    window.open(urlToRedirect.urlPayment)
  }

  return(
		<div className="paymentButtonsContainer">                                                               
      <h4>Credit card payments</h4>
      <button className="paymentOptionsButton MPButton" onClick={MPButtonOnclickHandler} >
        <img src="https://i.postimg.cc/Xv5j8NDx/icono_mercadopago.png" className="mercadopagoicono" alt="" />
        CONTINUE TO CHECKOUT
      </button>

      <h4>Bank transfer payment method</h4>
      <Link className="paymentOptionsButton customOrderButton" to="/customOrder">                                    
        CREATE CUSTOM ORDER
      </Link>
                
    </div>
  )
}