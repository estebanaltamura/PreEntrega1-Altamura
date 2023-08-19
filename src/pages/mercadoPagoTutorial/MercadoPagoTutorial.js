import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider"
import { CartContext } from "../../contexts/CartContextProvider";
import { useMercadoPagoService } from "../../services/useMercadoPagoService";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiFillCopy } from "react-icons/ai";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import backIcon from '../../assets/backIcon.svg'
import './MercadoPagoTutorial.css'


export const MercadoPagoTutorial = ()=>{
  const [ MPButtonText, setMPButtonText ] = useState('CONTINUE TO CHECKOUT')  
  const { setIsLoading } = useContext(IsLoadingContext)
  const { cartItems } = useContext(CartContext)
  const { getUrl }    = useMercadoPagoService()

  

  const copyButtonClickHandler = (event)=>{
    event.target.classList.add('copied')
    const timeOut = setTimeout(()=>{
      event.target.classList.remove('copied')
      clearTimeout(timeOut)
    }, 1000)
  }

  const MPButtonOnclickHandler = async ()=>{
    setMPButtonText('REDIRECTING...')
    const urlToRedirect = await getUrl(cartItems);
    if(urlToRedirect){
      window.open(urlToRedirect.urlPayment)
      setMPButtonText('MAKE ANOTHER PAYMENT')
    }
    else{
      setMPButtonText('CONTINUE TO CHECKOUT')
    }    
  }  

  const onCLickContinueButtonHandler = ()=>{
    setIsLoading(true)
  }


  return(
    <main className="mercadoPagoTutorialContainer">      
      <h2 className="tituloMercadoPagoTutorial">Tutorial de pago con mercadopago en modo test</h2>
      <p className="parrafo1">Si llegaste hasta acá es por que estas viendo mi portfolio, asi que primero, gracias.</p>
      <p className="parrafo2">Segundo, si querés probar pagar, al ser un entorno de prueba de Mercado Pago, te tenes que loguear en el mismo proceso de pago con las credenciales que estan debajo. Es posible que tengas que desloguearte de tu cuenta (en caso de que estes logueado).</p>
      <p className="parrafo3">Una vez que hacés click en pagar con Mercado Pago, se abrirá una nueva pestaña y ésta pestaña que estas visualizando, quedará abierta para que puedas copiar y pegar los datos que necesites.</p>
      <p className="parrafo4">Una vez que te logueaste en el proceso de pago con las credenciales que estan debajo, tenés la posibilidad de pagar con dinero en cuenta o con tarjeta de credito, cuyos datos dejo tambien debajo.</p>

      <p className="message1">Credenciales de prueba:</p>

      <div className="byUserMP">          
          <BsKey className="cardIcon" />
          <h3 className="byUserTitle">USER Y PASS MP</h3>
          <p className="byUserUserHeader">User:</p>
          <p className="byUserUserInfo">
            TESTUSER16074738
            <CopyToClipboard text="TESTUSER16074738" >
              <AiFillCopy className="copyIcon" onClick={copyButtonClickHandler}/>
            </CopyToClipboard>    
          </p>
          <p className="byUserPassHeader">Password:</p>
          <p className="byUserPassInfo">
            X7QYHp06uC
            <CopyToClipboard text="X7QYHp06uC" >
              <AiFillCopy className="copyIcon" onClick={copyButtonClickHandler}/>
            </CopyToClipboard>    
          </p>          
        </div>

        <p className="message2">Tarjetas de credito:</p>

        <div className="creditCardGrid">
          <div className="mastercardContainer">          
            <AiOutlineCreditCard className="cardIcon" />
            <h3 className="byCardTitle">MASTERCARD</h3>
            <p className="byCardNameHeader">nombre completo:</p>
            <p className="byCardNameInfo">
              APRO
              <CopyToClipboard text="APRO">
                <AiFillCopy className="copyIcon" onClick={copyButtonClickHandler}/>
              </CopyToClipboard>    
            </p>
            <p className="byCardDocumentoHeader">nombre completo:</p>
            <p className="byCardDocumentoInfo">
              12345678
              <CopyToClipboard text="12345678">
                <AiFillCopy className="copyIcon" onClick={copyButtonClickHandler}/>
              </CopyToClipboard>    
            </p>

            <p className="byCardNumberHeader">numero:</p>
            <p className="byCardNumberInfo">
              5031755734530604
              <CopyToClipboard text="5031755734530604">
                <AiFillCopy className="copyIcon" onClick={copyButtonClickHandler}/>
              </CopyToClipboard>    
            </p>

            <p className="byCardCaducidadHeader">Caducidad:</p>
            <p className="byCardCaducidadInfo">
              11/25
              <CopyToClipboard text="11/25">
                <AiFillCopy className="copyIcon" onClick={copyButtonClickHandler}/>
              </CopyToClipboard>    
            </p>

            <p className="byCardCodigoHeader">Codigo seg.:</p>
            <p className="byCardCodigoInfo">
              123
              <CopyToClipboard text="123">
                <AiFillCopy className="copyIcon" onClick={copyButtonClickHandler}/>
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
                <AiFillCopy className="copyIcon" onClick={copyButtonClickHandler} />
              </CopyToClipboard>    
            </p>
            <p className="byCardDocumentoHeader">nombre completo:</p>
            <p className="byCardDocumentoInfo">
              12345678
              <CopyToClipboard text="12345678">
                <AiFillCopy className="copyIcon" onClick={copyButtonClickHandler} />
              </CopyToClipboard>    
            </p>

            <p className="byCardNumberHeader">numero:</p>
            <p className="byCardNumberInfo">
              4509953566233704
              <CopyToClipboard text="4509953566233704">
                <AiFillCopy className="copyIcon" onClick={copyButtonClickHandler} />
              </CopyToClipboard>    
            </p>

            <p className="byCardCaducidadHeader">Caducidad:</p>
            <p className="byCardCaducidadInfo">
              11/25
              <CopyToClipboard text="11/25">
                <AiFillCopy className="copyIcon" onClick={copyButtonClickHandler} />
              </CopyToClipboard>    
            </p>

            <p className="byCardCodigoHeader">Codigo seg.:</p>
            <p className="byCardCodigoInfo">
              123
              <CopyToClipboard text="123">
                <AiFillCopy className="copyIcon" onClick={copyButtonClickHandler} />
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
                <AiFillCopy className="copyIcon" onClick={copyButtonClickHandler} />
              </CopyToClipboard>    
            </p>

            <p className="byCardDocumentoHeader">nombre completo:</p>
            <p className="byCardDocumentoInfo">
              12345678
              <CopyToClipboard text="12345678">
                <AiFillCopy className="copyIcon" onClick={copyButtonClickHandler} />
              </CopyToClipboard>    
            </p>

            <p className="byCardNumberHeader">numero:</p>
            <p className="byCardNumberInfo">
              371180303257522
              <CopyToClipboard text="371180303257522">
                <AiFillCopy className="copyIcon" onClick={copyButtonClickHandler} />
              </CopyToClipboard>    
            </p>

            <p className="byCardCaducidadHeader">Caducidad:</p>
            <p className="byCardCaducidadInfo">
              11/25
              <CopyToClipboard text="11/25">
                <AiFillCopy className="copyIcon" onClick={copyButtonClickHandler} />
              </CopyToClipboard>    
            </p>

            <p className="byCardCodigoHeader">Codigo seg.:</p>
            <p className="byCardCodigoInfo">
              1234
              <CopyToClipboard text="1234">
                <AiFillCopy className="copyIcon" onClick={copyButtonClickHandler} />
              </CopyToClipboard>    
            </p>
          </div>        
        </div> 

        <Link className="tutorialButton mpButton" onClick={MPButtonOnclickHandler}>
          <img src="https://i.postimg.cc/Xv5j8NDx/icono_mercadopago.png" className="mercadopagoicono" alt="" />
          {MPButtonText}
        </Link> 

        <Link className="tutorialButton continueButton" to="/home" onClick={onCLickContinueButtonHandler}>
          <img className="backIconContinueTutorial" src={backIcon} />
          CONTINUE SHOPPING
        </Link>             
    </main>
  )
}