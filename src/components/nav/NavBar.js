import { useEffect, useState, useRef, useContext } from "react"; 
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContextProvider";
import { URLDataContext } from "../../contexts/URLDataContextProvider";
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider";
import { BsCart4 } from "react-icons/bs";
import { TbBoxMultiple1, TbBoxMultiple2, TbBoxMultiple3, TbBoxMultiple4, TbBoxMultiple5, TbBoxMultiple6, TbBoxMultiple7, TbBoxMultiple8, TbBoxMultiple9, TbPlus } from "react-icons/tb";
import "./NavBar.css"
 
export const NavBar =()=>{

  const { cartItems }       = useContext(CartContext)    
  const { currentURL }      = useContext(URLDataContext)
  const { setIsLoading }    = useContext(IsLoadingContext)

  const [totalQuantityItemsCart, setTotalQuantityItemsCart] = useState(0)    
  
  const togglerButtonMenu = useRef() 

  const onClickNavLinkHandler = ()=>{
    setIsLoading(true)
  }
    
  useEffect(()=>{

    const headerLostFocus = (event)=>{      
      const parentClass = event.target.parentNode.classList[0]   

      if( parentClass !== "nav-item"         && 
          parentClass !== "container-fluid"  && 
          parentClass !== "navbar-toggler"   &&
          parentClass !== "corousel"         
        ){               
            !togglerButtonMenu.current.className.includes("collapsed") && togglerButtonMenu.current.click()
      }                   
    }

    window.addEventListener("click", headerLostFocus)

    return ()=> window.removeEventListener("click", headerLostFocus)
  },[]) 
  
  useEffect(()=>{
    !togglerButtonMenu.current.className.includes("collapsed") && togglerButtonMenu.current.click()
  },[currentURL])
    
  useEffect(()=>{    
    const quantityItems = cartItems.length > 1 ? cartItems.reduce((accumulator, partial)=>{return accumulator+partial.quantity},0) : cartItems.length === 1 ? cartItems[0].quantity : 0
    setTotalQuantityItemsCart(quantityItems)
  },[cartItems])
    
  return(
    <header>
      <nav className="navbar navbar-expand-lg contenedorMenu">
        <div className="container-fluid menuExpandible">
          
          <button className="navbar-toggler collapsed toggleButton" ref={togglerButtonMenu} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <NavLink 
            className="link logoLink" 
            to ="/home" 
            onClick={currentURL.section === "home" ? null : onClickNavLinkHandler}>
              <h1 className="logo">PANDORA</h1>
          </NavLink>                        
          
          <NavLink to ="/cart" onClick={currentURL.section === "cart" ? null : onClickNavLinkHandler}>
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
                  <NavLink 
                    className="nav-link active link" 
                    aria-current="page" 
                    to ="/home" 
                    onClick={currentURL.section === "home" ? null : onClickNavLinkHandler}>
                      Home
                  </NavLink>
                </li>

                <li className="nav-item dropdown">
                  <div className="nav-link dropdown-toggle link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Collections
                  </div>
                  <ul className="dropdown-menu">
                    <li> 
                      <NavLink 
                        className="link desplegableMenuItem" 
                        to = "/collections/Urban backpacks" 
                        onClick={(currentURL.section === "collections" && currentURL.subSection) === "Urban backpacks" ? null : onClickNavLinkHandler}>
                          Urban backpacks
                      </NavLink>
                    </li>                                                               
                    <li> 
                      <NavLink 
                        className="link desplegableMenuItem" 
                        to = "/collections/Travel backpacks" 
                        onClick={(currentURL.section === "collections" && currentURL.subSection) === "Travel backpacks" ? null : onClickNavLinkHandler}>
                          Travel backpacks
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                        className="link desplegableMenuItem" 
                        to = "/collections/Climbing backpacks" 
                        onClick={(currentURL.section === "collections" && currentURL.subSection) === "Climbing backpacks" ? null : onClickNavLinkHandler}>
                          Climbing backpacks
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <NavLink 
                    className="link" 
                    to = "/collections/New arrivals - Backpacks" 
                    onClick={(currentURL.section === "collections" && currentURL.subSection) === "New arrivals - Backpacks" ? null : onClickNavLinkHandler}>
                      New arrivals
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    className="link" 
                    to = "/aboutUs" 
                    onClick={currentURL.section === "aboutUs" ? null : onClickNavLinkHandler}>
                      About Us
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    className="link" 
                    to = "/contactUs" 
                    onClick={currentURL.section === "contactUs" ? null : onClickNavLinkHandler}>
                      Contact Us
                  </NavLink>
                </li>
            </ul>
            <NavLink to ="/cart" onClick={currentURL.section === "cart" ? null : onClickNavLinkHandler}>
              <BsCart4 className="carroDesktop"/> 
                
            </NavLink>                    
          </div>
        </div>
      </nav>
    </header>
  )
}