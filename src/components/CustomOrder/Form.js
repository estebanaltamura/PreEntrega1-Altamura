import { useContext, useState } from "react";
import { useLoginValidator } from "./useLoginValidator"
import { getFirestore, collection, addDoc, getDocs, orderBy, query } from "firebase/firestore";
import { CartContext } from "../Contexts/CartContextProvider";
import { isLoadingContext } from "../Contexts/IsLoadingContextProvider";
import { TbHelp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

import withReactContent from 'sweetalert2-react-content'
import "./Form.css"

export const Form = ()=>{

    const { fullNameValidator, telephoneValidator,  mailValidator, resetAlerts, fullNameAlert, phoneAlert, mailAlert } = useLoginValidator()
    const { itemsCartAdded, setItemsCartAdded } = useContext(CartContext)
    const {setIsLoading} = useContext(isLoadingContext)
    const [ phoneInputValue, setPhoneInputValue ] = useState("")
    const [ phoneInputValueFormatted, setPhoneInputValueFormatted ] = useState("")
    const history = useNavigate()
    const MySwal = withReactContent(Swal)

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        

        const fullNameValue = e.target.fullName.value
        const phoneValue = e.target.phone.value
        const mailValue = e.target.mail.value
        
        fullNameValidator(fullNameValue)
        telephoneValidator(phoneValue)
        mailValidator(mailValue)
        
        if (fullNameValidator(fullNameValue) && telephoneValidator(phoneValue) && mailValidator(mailValue)){
            setIsLoading(true)
            const db = getFirestore()
            const queryCollection = collection(db, "orders")
            const queryFilter = query(queryCollection, orderBy("orderId", "desc"))
                        
            getDocs(queryFilter).then(res=>{
                let lastOrderIdNumber
                if (res.docs.length > 0){
                    lastOrderIdNumber = res.docs[0].data().orderId
                    lastOrderIdNumber++
                }
                
                addDoc(queryCollection, {orderId: lastOrderIdNumber || 1, fullname: fullNameValue,  phoneNumber: phoneValue, isActive: true, email: mailValue, ...itemsCartAdded}).then(res=>{
                   setItemsCartAdded([])
                   history(`/orderCreated/${lastOrderIdNumber || 1}`)   
                   setIsLoading(false)                
                }).catch(error=>{
                    setIsLoading(false)  
                    console.log(error)
                    MySwal.fire("We can't process your order at this time")
                })    
            }).catch(error=>{
                console.log(error)
                setIsLoading(false)
            })
           
            
        }
        
    }

    const onChangePhoneInputHandler = (e)=> {
        
        
    }

    const onKeyDownHandler = (e)=> {
        const value = e.key
        
        if( value== 0 || value== 1 || value== 2 || value== 3 || value== 4 || value== 5 || value== 6 || value== 7 || value== 8 || value== 9){
            phoneInputValue.length < 10 && setPhoneInputValue([...phoneInputValue, value].join(""))

            if (phoneInputValue.length == 0) setPhoneInputValueFormatted(value)
            if (phoneInputValue.length > 0 && phoneInputValue.length < 3) setPhoneInputValueFormatted([...phoneInputValue, value].join(""))
            if (phoneInputValue.length == 3) setPhoneInputValueFormatted(phoneInputValue.concat("-", value[value.length-1]))
            if (phoneInputValue.length > 3 && phoneInputValue.length < 6) setPhoneInputValueFormatted([...phoneInputValueFormatted, value[value.length-1]].join(""))
            if (phoneInputValue.length == 6) setPhoneInputValueFormatted(phoneInputValueFormatted.concat("-", value))
            if (phoneInputValue.length > 6 && phoneInputValue.length < 10) setPhoneInputValueFormatted([...phoneInputValueFormatted, value].join(""))
        }
        
        
        if (e.key == "Backspace"){
            
            if (phoneInputValue.length == 1){
                setPhoneInputValue("")    
                setPhoneInputValueFormatted("")          
            } 

            if (phoneInputValue.length > 1){
                setPhoneInputValue([...phoneInputValue].slice(0,phoneInputValue.length-1).join("")) 

                if (phoneInputValueFormatted.length == 9){
                    setPhoneInputValueFormatted([...phoneInputValueFormatted].slice(0, phoneInputValueFormatted.length-2).join(""))
                }

                else if (phoneInputValueFormatted.length == 5){
                    setPhoneInputValueFormatted([...phoneInputValueFormatted].slice(0, phoneInputValueFormatted.length-2).join(""))
                }                                           
                
                else setPhoneInputValueFormatted([...phoneInputValueFormatted].slice(0, phoneInputValueFormatted.length-1).join(""))              
            }         
        }        
    }
    
    const onClickHandlerHelpIcon = ()=> {
        MySwal.fire({
            showConfirmButton: false,
            showCancelButton: true,
            cancelButtonText: 'ok',
            html: <div>
                <h4>US phone number format:</h4>
                <span>555-555-5555</span>
            </div>            
        })
    }

    return(
            <>
                
                        <div className="loginContainer"> 
                            <div className="form-container"> 
                                <form action="/action_page.php" onSubmit={onSubmitHandler}> 
                                
                                    <div className="inputContainer">
                                        <span className="subtitle">FULL NAME:</span>
                                        <input autoComplete="off" type="text" name="fullName" onKeyUp={resetAlerts} placeholder="Insert your full name" />
                                        <span className="inputAlerts">{fullNameAlert}</span>
                                    </div>

                                    <div className="inputContainer">
                                        <span className="subtitle">US PHONE NUMBER:</span>  
                                        <input onChange={onChangePhoneInputHandler} onKeyDown={onKeyDownHandler}  value={phoneInputValueFormatted} autoComplete="off" type="text" name="phone" onKeyUp={resetAlerts} placeholder="Insert a US phone number"/> 
                                        <TbHelp className="helpIcon" onClick={onClickHandlerHelpIcon} />
                                        <span className="inputAlerts">{phoneAlert}</span>
                                    </div>
                                    
                                    <div className="inputContainer">
                                        <span className="subtitle">MAIL:</span>  
                                        <input autoComplete="off" type="text" name="mail" onKeyUp={resetAlerts} placeholder="Insert your e-mail address"/>
                                        <span className="inputAlerts">{mailAlert}</span>
                                    </div>
                                    
                                    <button type="submit"  className="submit-btn">CREATE ORDER</button>
                                </form>
                            </div>  
                        </div>                   
                          
                
            </>
    )
}