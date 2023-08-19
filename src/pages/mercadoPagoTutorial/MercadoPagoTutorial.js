import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider"
import { CartContext } from "../../contexts/CartContextProvider";
import { useMercadoPagoService } from "../../services/useMercadoPagoService";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiFillCopy } from "react-icons/ai";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import './MercadoPagoTutorial.css'


export const MercadoPagoTutorial = ()=>{
  const [ MPButtonText, setMPButtonText ] = useState('CONTINUE TO CHECKOUT')
  const { setIsLoading } = useContext(IsLoadingContext)
  const { cartItems } = useContext(CartContext)
  const { getUrl }    = useMercadoPagoService()

  

  const MPButtonOnclickHandler = async ()=>{
    setMPButtonText('REDIRECTING...')
    const urlToRedirect = await getUrl(cartItems);
    if(urlToRedirect){
      window.open(urlToRedirect.urlPayment)
      setMPButtonText('REDIRECTED')
    }
    else{
      setMPButtonText('CONTINUE TO CHECKOUT')
    }
    
  }  


  return(
    <main className="mercadoPagoTutorialContainer">      
      <h2 className="tituloMercadoPagoTutorial">Tutorial de pago con Mercado Pago en modo test</h2>
      <p className="parrafo1">Si llegaste hasta acá es por que estas viendo mi portfolio asi que primero, gracias.</p>
      <p className="parrafo2">Segundo, si querés probar pagar al ser un entorno de prueba de Mercado Pago, te voy a dar dos formas para que hagas un pago en modo test.</p>
      <p className="parrafo3">Una vez que hacés click en pagar con Mercado Pago, se abrirá una nueva pestaña y ésta quedará abierta para que puedas copiar y pegar los datos que necesites</p>
      <p className="parrafo4">Si queres usar la opcion utilizando el login, vas a tener que desloguearte de tu cuenta de MP (en caso de que estes logueado) para poder loguearte con las credenciales de prueba dispuestas abajo u otra opcion es utilizar la pagina en modo incognito.</p>
      <p className="optionsMessage1"><b>Con login:</b> usando nombre de usuario y contraseña de prueba (que dejo abajo) vas a poder ingresar y pagar con dinero de esa cuenta de prueba.</p>
      
      

      <div className="byUserMP">          
          <BsKey className="cardIcon" />
          <h3 className="byUserTitle">USER Y PASS MP</h3>
          <p className="byUserUserHeader">User:</p>
          <p className="byUserUserInfo">
            TESTUSER16074738
            <CopyToClipboard text="TESTUSER16074738">
              <AiFillCopy className="copyIcon" />
            </CopyToClipboard>    
          </p>
          <p className="byUserPassHeader">Password:</p>
          <p className="byUserPassInfo">
            X7QYHp06uC
            <CopyToClipboard text="X7QYHp06uC">
              <AiFillCopy className="copyIcon" />
            </CopyToClipboard>    
          </p>          
        </div>

        <p className="optionsMessage2"><b>Con tarjeta de crédito:</b> Te dejo los datos de 3 tarjetas de crédito, podés usar la que quieras:</p>

        <div className="creditCardGrid">
          <div className="mastercardContainer">          
            <AiOutlineCreditCard className="cardIcon" />
            <h3 className="byCardTitle">MASTERCARD</h3>
            <p className="byCardNameHeader">nombre completo:</p>
            <p className="byCardNameInfo">
              APRO
              <CopyToClipboard text="APRO">
                <AiFillCopy className="copyIcon" />
              </CopyToClipboard>    
            </p>

            <p className="byCardNumberHeader">numero:</p>
            <p className="byCardNumberInfo">
              5031755734530604
              <CopyToClipboard text="5031755734530604">
                <AiFillCopy className="copyIcon" />
              </CopyToClipboard>    
            </p>

            <p className="byCardCaducidadHeader">Caducidad:</p>
            <p className="byCardCaducidadInfo">
              11/25
              <CopyToClipboard text="11/25">
                <AiFillCopy className="copyIcon" />
              </CopyToClipboard>    
            </p>

            <p className="byCardCodigoHeader">Codigo seg.:</p>
            <p className="byCardCodigoInfo">
              123
              <CopyToClipboard text="123">
                <AiFillCopy className="copyIcon" />
              </CopyToClipboard>    
            </p>
          </div>

          <div className='lineTutorialMp1'></div>

          <div className="visaContainer">          
            <AiOutlineCreditCard className="cardIcon" />
            <h3 className="byCardTitle">VISA</h3>
            <p className="byCardNameHeader">nombre completo:</p>
            <p className="byCardNameInfo">
              APRO
              <CopyToClipboard text="APRO">
                <AiFillCopy className="copyIcon" />
              </CopyToClipboard>    
            </p>

            <p className="byCardNumberHeader">numero:</p>
            <p className="byCardNumberInfo">
              4509953566233704
              <CopyToClipboard text="4509953566233704">
                <AiFillCopy className="copyIcon" />
              </CopyToClipboard>    
            </p>

            <p className="byCardCaducidadHeader">Caducidad:</p>
            <p className="byCardCaducidadInfo">
              11/25
              <CopyToClipboard text="11/25">
                <AiFillCopy className="copyIcon" />
              </CopyToClipboard>    
            </p>

            <p className="byCardCodigoHeader">Codigo seg.:</p>
            <p className="byCardCodigoInfo">
              123
              <CopyToClipboard text="123">
                <AiFillCopy className="copyIcon" />
              </CopyToClipboard>    
            </p>
          </div>

          <div className='lineTutorialMp2'></div>

          <div className="amexContainer">          
            <AiOutlineCreditCard className="cardIcon" />
            <h3 className="byCardTitle">AMEX</h3>
            <p className="byCardNameHeader">nombre completo:</p>
            <p className="byCardNameInfo">
              APRO
              <CopyToClipboard text="APRO">
                <AiFillCopy className="copyIcon" />
              </CopyToClipboard>    
            </p>

            <p className="byCardNumberHeader">numero:</p>
            <p className="byCardNumberInfo">
              371180303257522
              <CopyToClipboard text="371180303257522">
                <AiFillCopy className="copyIcon" />
              </CopyToClipboard>    
            </p>

            <p className="byCardCaducidadHeader">Caducidad:</p>
            <p className="byCardCaducidadInfo">
              11/25
              <CopyToClipboard text="11/25">
                <AiFillCopy className="copyIcon" />
              </CopyToClipboard>    
            </p>

            <p className="byCardCodigoHeader">Codigo seg.:</p>
            <p className="byCardCodigoInfo">
              1234
              <CopyToClipboard text="1234">
                <AiFillCopy className="copyIcon" />
              </CopyToClipboard>    
            </p>
          </div>        
        </div> 

        <Link className="MPButtonTutorial" onClick={MPButtonOnclickHandler}>
          <img src="https://i.postimg.cc/Xv5j8NDx/icono_mercadopago.png" className="mercadopagoicono" alt="" />
          {MPButtonText}
        </Link>    
    </main>
  )
}







  
// <div className="byPhoneContainer">
//           <img src={phoneIcon} className="phoneIcon"></img>
//           <h3 className="byPhoneTitle">BY PHONE</h3>
//           <p className="contactTimeRange">Monday to friday 9am to 5pm</p>
//           <p className="phoneNumber">+549 113 765 9503</p>
//         </div>

