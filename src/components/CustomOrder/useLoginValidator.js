import { useState } from "react"

export const useLoginValidator = (e)=>{
    
    const [fullNameAlert, setFullNameAlert] = useState("")
    const [mailAlert, setMailAlert] = useState("")
    const [phoneAlert, setPhoneAlert] = useState("")
    
    const fullNameValidator = (fullName)=>{
        const digitRegExp = /\d/
        if(digitRegExp.test(fullName)){
            setFullNameAlert("digits are not allowed")
        } 

        const isThereTwoWords = /\w+\s*\w+/
        if(!isThereTwoWords.test(fullName)){
            setFullNameAlert("please insert your full name")
        } 

        else return true
    }
    
    const telephoneValidator = (str)=> {
            const regExpCheck = (cadena)=>{              
               //555-555-5555
               const expresion2 = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/                    
               return expresion2.test(cadena)
           }
           
           if (regExpCheck(str) == false){
            setPhoneAlert("wrong format. Insert a US phone number")
           } 
           else return true        
    }
    
    
    const mailValidator = (mail)=>{
        if (mail == ""){
            setMailAlert("insert a valid e-mail address"); 
            return            
        } 
        
        const twoDotsRegExp = /\.{2,}/
        if(twoDotsRegExp.test(mail)){
            setMailAlert("Two consecutive dots are not allowed") 
            return           
        }  
        
        const dotAtStart = /^\.{1}/
        const dotAtEnd = /\.{1}@{1}/
        if(dotAtStart.test(mail) || dotAtEnd.test(mail)){
            setMailAlert("The address cannot start or precede the @ with a dot (.)") 
            return           
        }  
        
        const multiplesAt = /@.*@/
        if(multiplesAt.test(mail)){
            setMailAlert("More than one @ it is not allowed")     
            return       
        }  
        
        const regExpmail = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/
        if(!regExpmail.test(mail)){
            setMailAlert("insert a valid e-mail address")
            return 
        } 
        return true
    }

        
    const resetAlerts = ()=>{
        setFullNameAlert("");
        setPhoneAlert("");
        setMailAlert("");        
    }
        
        
        
return {fullNameValidator, telephoneValidator, mailValidator, resetAlerts, fullNameAlert, phoneAlert, mailAlert }
}