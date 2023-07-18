import { useEffect, useState, useRef, useContext } from "react"; 
import { NavLink, useLocation } from "react-router-dom";
import { CartContext } from "../../contexts/CartContextProvider";
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider";
import { BsCart4 } from "react-icons/bs";
import { TbBoxMultiple1, TbBoxMultiple2, TbBoxMultiple3, TbBoxMultiple4, TbBoxMultiple5, TbBoxMultiple6, TbBoxMultiple7, TbBoxMultiple8, TbBoxMultiple9, TbPlus } from "react-icons/tb";
import "./NavBar.css"

 
export const NavBar =()=>{

    const { itemsCartAdded } = useContext(CartContext)
    const { setIsLoading } = useContext(IsLoadingContext)
    const [totalQuantityItemsCart, setTotalQuantityItemsCart] = useState(0)
    const URLPath = useLocation()
    const togglerButtonMenu = useRef()
    
    useEffect(()=>{
           !togglerButtonMenu.current.className.includes("collapsed") && togglerButtonMenu.current.click()               
    },[URLPath])

    
    useEffect(()=>{
        const quantityItems = itemsCartAdded.length > 1 ? itemsCartAdded.reduce((accumulator, partial)=>{return accumulator+partial.quantity},0) : itemsCartAdded.length === 1 ? itemsCartAdded[0].quantity : 0
        setTotalQuantityItemsCart(quantityItems)
    },[itemsCartAdded]) 

   const onClickHandler = ()=>{
    setIsLoading(true)
   }
    
    return(
        <header >
            <nav className="navbar navbar-expand-lg contenedorMenu">
            <div className="container-fluid menuExpandible">
                <button className="navbar-toggler collapsed toggleButton"  ref={togglerButtonMenu} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <NavLink className="link logoLink" to ="/home">
                        <h1 className="logo">PANDORA</h1>
                    </NavLink>                        
                    <NavLink to ="/cart">
                        <BsCart4 className="carro" /> 
                    </NavLink>
                    {totalQuantityItemsCart === 0 ? null : 
                        totalQuantityItemsCart === 1 ? <NavLink className="quantityLink" to ="/cart"><TbBoxMultiple1 className="quantityIcon" /></NavLink> : 
                        totalQuantityItemsCart === 2 ? <NavLink className="quantityLink" to ="/cart"><TbBoxMultiple2 className="quantityIcon"   /></NavLink> : 
                        totalQuantityItemsCart === 3 ? <NavLink className="quantityLink" to ="/cart"><TbBoxMultiple3 className="quantityIcon"   /></NavLink> : 
                        totalQuantityItemsCart === 4 ? <NavLink className="quantityLink" to ="/cart"><TbBoxMultiple4 className="quantityIcon"   /></NavLink> : 
                        totalQuantityItemsCart === 5 ? <NavLink className="quantityLink" to ="/cart"><TbBoxMultiple5 className="quantityIcon"   /></NavLink> : 
                        totalQuantityItemsCart === 6 ? <NavLink className="quantityLink" to ="/cart"><TbBoxMultiple6 className="quantityIcon"   /></NavLink> : 
                        totalQuantityItemsCart === 7 ? <NavLink className="quantityLink" to ="/cart"><TbBoxMultiple7 className="quantityIcon"   /></NavLink> : 
                        totalQuantityItemsCart === 8 ? <NavLink className="quantityLink" to ="/cart"><TbBoxMultiple8 className="quantityIcon"   /></NavLink> : 
                        totalQuantityItemsCart === 9 ? <NavLink className="quantityLink" to ="/cart"><TbBoxMultiple9 className="quantityIcon"   /></NavLink> : 
                        <NavLink className="quantityLink" to ="/cart"><TbPlus /> <TbBoxMultiple9 className="quantityIcon" /></NavLink>
                    }
                    
                    
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active link" aria-current="page" onClick={onClickHandler} to ="/home" >Home</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Collections
                            </div>
                                <ul className="dropdown-menu">
                                    <li> 
                                        <NavLink className="link desplegableMenuItem" to = "/collections/Urban backpacks" onClick={onClickHandler}>Urban backpacks</NavLink>
                                    </li>
                                                               
                                    <li> 
                                        <NavLink className="link desplegableMenuItem" to = "/collections/Travel backpacks" onClick={onClickHandler}>Travel backpacks</NavLink>
                                    </li>

                                    <li>
                                        <NavLink className="link desplegableMenuItem" to = "/collections/Climbing backpacks" onClick={onClickHandler}>Climbing backpacks</NavLink>
                                    </li>
                                 </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="link" to = "/collections/New arrivals - Backpacks" onClick={onClickHandler}>New arrivals</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="link" to = "/aboutUs">We</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="link" to = "/contactUs">Contact Us</NavLink>
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