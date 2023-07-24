import { useState } from "react"

export const useFormInfoValidator = (e)=>{
    
  const [fullNameAlert, setFullNameAlert] = useState("")
  const [mailAlert, setMailAlert] = useState("")
  const [phoneAlert, setPhoneAlert] = useState("")
    
  const fullNameValidator = (fullName)=>{
    const digitRegExp = /\d/
    const isThereTwoWords = /\w+\s*\w+/

    if(digitRegExp.test(fullName)){
      setFullNameAlert("digits are not allowed")
    } 

    else if(!isThereTwoWords.test(fullName)){
      setFullNameAlert("please insert name and lastname")
    } 

    else return true
  }
    
  const telephoneValidator = (str)=> {
    const stringSinEspacios = str.replaceAll(" ", "")

    const regExpCheck = (cadena)=>{
      //(555)555-5555
      const expresion1 = /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/
      //555-555-5555
      const expresion2 = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
      //1 555-555-5555
      const expresion3 = /^1[0-9]{3}-[0-9]{3}-[0-9]{4}$/
      //1 (555) 555-5555
      const expresion4 = /^1\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/
      //15555555555
      const expresion5 = /^1[0-9]{10}$/
      //5555555555
      const expresion6 = /^[0-9]{10}$/

      return expresion1.test(cadena) || expresion2.test(cadena) || expresion3.test(cadena) || expresion4.test(cadena) || expresion5.test(cadena) || expresion6.test(cadena)
    }

    if (regExpCheck(stringSinEspacios) === false){
      setPhoneAlert("wrong format. Insert a US phone number")
    } 
    else return true        
  }
    
    
  const mailValidator = (mail)=>{
    const twoDotsRegExp = /\.{2,}/
    const dotAtStart = /^\.{1}/
    const dotAtEnd = /\.{1}@{1}/
    const multiplesAt = /@.*@/
    const regExpmail = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/
    
    if (mail === ""){
      setMailAlert("insert a valid e-mail address");                
    } 
        
    else if(twoDotsRegExp.test(mail)){
      setMailAlert("Two consecutive dots are not allowed")                  
    }  
        
    else if(dotAtStart.test(mail) || dotAtEnd.test(mail)){
      setMailAlert("The address cannot start or precede the @ with a dot (.)")                  
    }  
        
    else if(multiplesAt.test(mail)){
      setMailAlert("More than one @ it is not allowed")                  
    }  
        
    else if(!regExpmail.test(mail)){
      setMailAlert("insert a valid e-mail address")       
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