import { Link } from "react-router-dom"
import "./PaymentOptions.css"

export const PaymentOptions = ()=>{
  return(
		<div className="paymentButtonsContainer">                                                               
      <h4 className="paymentsOptionsMessages">Credit card payments</h4>
      <Link className="paymentOptionsButton MPButton" to='/mercadoPagoTutorial'>
        <img src="https://i.postimg.cc/Xv5j8NDx/icono_mercadopago.png" className="mercadopagoicono" alt="" />
        CONTINUE TO CHECKOUT
      </Link>

      <h4 className="paymentsOptionsMessages">Bank transfer payment method</h4>
      <Link className="paymentOptionsButton customOrderButton" to="/customOrder">                                    
        CREATE CUSTOM ORDER
      </Link>
                
    </div>
  )
}