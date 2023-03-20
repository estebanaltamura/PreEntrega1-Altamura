import { useEffect, useState, useRef, useContext } from "react"; 
import { NavLink, useLocation } from "react-router-dom";
import { CartContext } from "../Contexts/CartContextProvider";
import { BsCart4 } from "react-icons/bs";
import { TbBoxMultiple1, TbBoxMultiple2, TbBoxMultiple3, TbBoxMultiple4, TbBoxMultiple5, TbBoxMultiple6, TbBoxMultiple7, TbBoxMultiple8, TbBoxMultiple9, TbPlus } from "react-icons/tb";
import "./NavBar.css"

 
export const NavBar =()=>{

    const { itemsCartAdded } = useContext(CartContext)
    const [totalQuantityItemsCart, setTotalQuantityItemsCart] = useState(0)
    const URLPath = useLocation()
    const togglerButtonMenu = useRef()
    
    useEffect(()=>{
           !togglerButtonMenu.current.className.includes("collapsed") && togglerButtonMenu.current.click()               
    },[URLPath])

    
    useEffect(()=>{
        const quantityItems = itemsCartAdded.length > 1 ? itemsCartAdded.reduce((accumulator, partial)=>{return accumulator+partial.quantity},0) : itemsCartAdded.length == 1 ? itemsCartAdded[0].quantity : 0
        setTotalQuantityItemsCart(quantityItems)
    },[itemsCartAdded]) 

    
    return(
        <header>
            <nav className="navbar navbar-expand-lg contenedorMenu">
            <div className="container-fluid menuExpandible">
                <button className="navbar-toggler collapsed"  ref={togglerButtonMenu} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <NavLink className="link logoLink" to ="/home">
                        <h1 className="logo">PANDORA</h1>
                    </NavLink>                        
                    <NavLink to ="/cart">
                        <BsCart4 className="carro" /> 
                    </NavLink>
                    {totalQuantityItemsCart ==0 ? null : totalQuantityItemsCart ==1 ? <TbBoxMultiple1 className="quantityIcon" /> : totalQuantityItemsCart ==2 ? <TbBoxMultiple2 className="quantityIcon" /> : totalQuantityItemsCart ==3 ? <TbBoxMultiple3 className="quantityIcon" /> : totalQuantityItemsCart ==4 ? <TbBoxMultiple4 className="quantityIcon" /> : totalQuantityItemsCart ==5 ? <TbBoxMultiple5 className="quantityIcon" /> : totalQuantityItemsCart ==6 ? <TbBoxMultiple6 className="quantityIcon" /> : totalQuantityItemsCart ==7 ? <TbBoxMultiple7 className="quantityIcon" /> : totalQuantityItemsCart ==8 ? <TbBoxMultiple8 className="quantityIcon"  /> : totalQuantityItemsCart ==9 ? <TbBoxMultiple9 className="quantityIcon"  /> : <><TbPlus className="quantityIconplus" /> <TbBoxMultiple9 className="quantityIcon"  /></>}
                    
                    
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active link" aria-current="page" to ="/home">Home</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle link" role="button" data-bs-toggle="dropdown" aria-expanded="false" to = "/lineaUrbana">
                            Collections
                            </div>
                                <ul className="dropdown-menu">
                                    <li> 
                                        <NavLink className="link desplegableMenuItem" to = "/collections/Urban backpacks">Urban backpacks</NavLink>
                                    </li>
                                                               
                                    <li> 
                                        <NavLink className="link desplegableMenuItem" to = "/collections/Travel backpacks">Travel backpacks</NavLink>
                                    </li>

                                    <li>
                                        <NavLink className="link desplegableMenuItem" to = "/collections/Climbing backpacks">Climbing backpacks</NavLink>
                                    </li>
                                 </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="link" to = "/collections/New arrivals - Backpacks">New arrivals</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="link" to = "/We">We</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="link" to = "/ContactUs">Contact Us</NavLink>
                        </li>
                    </ul>
                    <NavLink to ="/cart">
                        <BsCart4 className="carroDesktop" /> 
                    </NavLink>
                </div>
            </div>
          </nav>
        </header>
    )
}