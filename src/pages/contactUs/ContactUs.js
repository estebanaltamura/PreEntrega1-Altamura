import { useContext, useEffect } from "react"
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider"
import phoneIcon  from '../../assets/phoneIcon.png'
import mailIcon  from '../../assets/mailIcon.png'
import chatIcon  from '../../assets/chatIcon.png'
import whatsappIcon from '../../assets/whatsappIcon.png'
import "./ContactUs.css"


export const ContactUs = ()=>{    
  const { setIsLoading } = useContext(IsLoadingContext)
    

  useEffect(()=>{
    setIsLoading(false)
  },[]) 

  return(
    <main className="contactUsmainContainer">
      
        <h2 className="tituloContacto">Contact Us</h2>

        <div className="byPhoneContainer">
          <img src={phoneIcon} className="phoneIcon"></img>
          <h3 className="byPhoneTitle">BY PHONE</h3>
          <p className="contactTimeRange">Monday to friday 9am to 5pm</p>
          <p className="phoneNumber">+549 113 765 9503</p>
        </div>
 
        <div className="byMailContainer">
          <img src={mailIcon} className="mailIcon"></img>
          <h3 className="byMailTitle">BY MAIL</h3>
          <p className="byMailMessage">Feel free to write us</p>
          <p className="mail">esteban.altamura@gmail.com</p>
        </div>

        <div className="byChatContainer">
          <img src={chatIcon} className="chatIcon"></img>
          <h3 className="byMailTitle">LIVE CHAT</h3>
          <p className="byMailMessage">Chat with a member of our team</p>
          <a className="chatButton"
            href="https://wa.me/+5491137659503?text=Hi!%20I%20want%20talk%20with%20an%20assistant"
            target='_blank'
            >
            START CHAT
            <img src={whatsappIcon} className="chatButtonIcon" />
          </a>
          
        </div>

      
    </main>
  )
}