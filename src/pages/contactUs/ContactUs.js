import { useContext, useEffect, useState } from "react"
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider"
import { CopyToClipboard } from "react-copy-to-clipboard";
import phoneIcon  from '../../assets/phoneIcon.png'
import mailIcon  from '../../assets/mailIcon.png'
import chatIcon  from '../../assets/chatIcon.png'
import whatsappIcon from '../../assets/whatsappIcon.png'
import { AiFillCopy } from "react-icons/ai";
import "./ContactUs.css"

export const ContactUs = ()=>{    
  const [ mailText, setMailText ] = useState('esteban.altamura@gmail.com')
  const { setIsLoading } = useContext(IsLoadingContext)
    
  const copyMailClickHandler = ()=>{
    setMailText('COPIED!')

    const timeOut = setTimeout(()=>{
      setMailText('esteban.altamura@gmail.com')
      clearTimeout(timeOut)
    },1500)
  }

  useEffect(()=>{
    setIsLoading(false)
  },[]) 

  return(
    <main className="contactUsmainContainer">      
      <h2 className="tituloContacto">Contact Us</h2>
      
      <div className="contactInfoGrid">
        <div className="byPhoneContainer">
          <img src={phoneIcon} className="phoneIcon"></img>
          <h3 className="byPhoneTitle">BY PHONE</h3>
          <p className="contactTimeRange">Monday to friday 9am to 5pm</p>
          <p className="phoneNumber">+549 113 765 9503</p>
        </div>

        <div className='lineContactUs'></div>
 
        <div className="byMailContainer">
          <img src={mailIcon} className="mailIcon"></img>
          <h3 className="byMailTitle">BY MAIL</h3>
          <p className="byMailMessage">Feel free to write us</p>
          <p className="mail">
            {mailText}
            <CopyToClipboard text="esteban.altamura@gmail.com">
              <AiFillCopy className={mailText === 'esteban.altamura@gmail.com' ? "copyIcon" : "hidden"} onClick={copyMailClickHandler}/>
            </CopyToClipboard>            
          </p>
        </div>

        <div className='lineContactUs'></div>

        <div className="byChatContainer">
          <img src={chatIcon} className="chatIcon"></img>
          <h3 className="byChatTitle">LIVE CHAT</h3>    
          <p className="byChatMessage">Chat with a member of our team</p>      
          <a className="chatButton"
            href="https://wa.me/+5491137659503?text=Hi!%20I%20want%20talk%20with%20an%20assistant"
            target='_blank'
            >
            START CHAT
            <img src={whatsappIcon} className="chatButtonIcon" />
          </a>          
        </div>
      </div>     
    </main>
  )
}