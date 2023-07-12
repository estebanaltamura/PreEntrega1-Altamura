import { IsLoadingContext } from "../../Contexts/IsLoadingContextProvider"
import { useContext } from "react"
import "./Footer.css"

export const Footer = () =>{

    const {isLoading} = useContext(IsLoadingContext)

        return(       
            <>
                {
                    !isLoading &&
                        <footer>
                            <div className="footer">
                                <p className="logoFooter">PANDORA</p>
                                <p className="contactenos">Contact Us</p>
                                <p className="mail">Email: esteban.altamura@gmail.com</p>
                                <p className="twitter">Twitter: https://twitter.com/mura_andy_</p>
                            </div>
                        </footer>
                }
            </>
        )      
}