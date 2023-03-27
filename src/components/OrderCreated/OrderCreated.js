import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getStorage, ref, getDownloadURL } from "firebase/storage";



import "./OrderCreated.css"

export const OrderCreated = ()=>{

    const {orderId} = useParams()
    const [seconds, setSeconds] = useState(5)
    const history = useNavigate()

    const [downloadURL, setDownloadURL] = useState("")

    const filePath = "gs://e-commerce-react-5b7de.appspot.com/plumariiHome.mp4";
    

    const getDownloadURLFromStorage = async (filePath)=>{
        const storage = getStorage();
        const storageRef = ref(storage, filePath);
          
        try {
            const downloadURL = await getDownloadURL(storageRef);
            console.log("URL de descarga:", downloadURL);
            setDownloadURL(downloadURL);
        } catch (error) {
            console.error("Error al obtener la URL de descarga:", error);
            setDownloadURL(null);
        }        
    } 

    getDownloadURLFromStorage(filePath)
    
    useEffect(()=>{

    },[downloadURL])


    useEffect(()=>{
        

        //const interval = setInterval(()=>setSeconds(seconds-1), 1000)
        
        if (seconds == 0){
            history("/home")
                      
        }

        
    },[seconds])


    useEffect(()=>{
        window.scroll({
            top: 0,
            left: 0,
            behavior: "instant"
        })

        const interval = setInterval(()=>setSeconds(seconds-1), 1000)

        

    },[])

    return(
        <div className="orderCreatedContainer" >

            <h3>{`Order number ${orderId} created`}</h3>
            <br/> 
            <h3>{`In 24-48 hours we are going to contact you for payment details and delivery`}</h3>
            <br/> 
            <h3>{`Redirenting to home page in ${seconds > 0 ? seconds : ""}`}</h3>
            <video src={downloadURL} autoPlay muted loop width="300px" height="fit-content"></video>
            
            
            
        </div>
    )
}