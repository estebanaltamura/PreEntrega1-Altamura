import { useContext, useState, useRef } from "react";
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
    const phoneString = useRef([])

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
        
        const value = e.target.value[e.target.value.length-1]
        const digitRegExp = /\d/
        
        if (digitRegExp.test(value)){
            (phoneString.current.length > 7 && phoneString.current.length < 12) && phoneString.current.push(value)
            if (phoneString.current.length == 7){
                phoneString.current.push("-")
                phoneString.current.push(value)
            }
            (phoneString.current.length > 4 && phoneString.current.length < 7) && phoneString.current.push(value)
            if (phoneString.current.length == 3){
                phoneString.current.push("-")
                phoneString.current.push(value)
            }
            phoneString.current.length < 3 && phoneString.current.push(value)           
        }
        
        setPhoneInputValue(phoneString.current.join(""))
    }

    const onKeyDownHandler = (e)=> {
        

        if (e.code == "Backspace"){
            console.log(e.code)
            if (phoneString.current.length == 1){
                phoneString.current = []
                setPhoneInputValue("")                
            } 
            if (phoneString.current.length > 1){
                console.log(phoneString.current)
                phoneString.current.pop()
                console.log(phoneString.current.join(""))
                setPhoneInputValue(phoneString.current.join(""))
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
                                        <input onChange={onChangePhoneInputHandler} onKeyDown={onKeyDownHandler}  value={phoneInputValue} autoComplete="off" type="text" name="phone" onKeyUp={resetAlerts} placeholder="Insert a US phone number"/> 
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