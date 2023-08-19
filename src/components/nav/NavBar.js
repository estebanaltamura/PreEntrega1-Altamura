import { useEffect, useState, useRef, useContext } from "react"; 
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContextProvider";
import { URLDataContext } from "../../contexts/URLDataContextProvider";
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider";
import backPackCartIcon from '../../assets/backPackCartIcon.svg'
import number1CartIcon from '../../assets/number1CartIcon.svg'
import number2CartIcon from '../../assets/number2CartIcon.svg'
import number3CartIcon from '../../assets/number3CartIcon.svg'
import number4CartIcon from '../../assets/number4CartIcon.svg'
import number5CartIcon from '../../assets/number5CartIcon.svg'
import number6CartIcon from '../../assets/number6CartIcon.svg'
import number7CartIcon from '../../assets/number7CartIcon.svg'
import number8CartIcon from '../../assets/number8CartIcon.svg'
import number9CartIcon from '../../assets/number9CartIcon.svg'
import moreCartIcon from '../../assets/moreCartIcon.svg'
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
            <img src={backPackCartIcon} className="carro" /> 
          </NavLink>
          
          {totalQuantityItemsCart === 0 ? null : 
            totalQuantityItemsCart === 1 ? <NavLink className="quantityLink" to ="/cart"><img src={number1CartIcon} className="quantityIcon"></img></NavLink> : 
            totalQuantityItemsCart === 2 ? <NavLink className="quantityLink" to ="/cart"><img src={number2CartIcon} className="quantityIcon"></img></NavLink> : 
            totalQuantityItemsCart === 3 ? <NavLink className="quantityLink" to ="/cart"><img src={number3CartIcon} className="quantityIcon"></img></NavLink> : 
            totalQuantityItemsCart === 4 ? <NavLink className="quantityLink" to ="/cart"><img src={number4CartIcon} className="quantityIcon"></img></NavLink> : 
            totalQuantityItemsCart === 5 ? <NavLink className="quantityLink" to ="/cart"><img src={number5CartIcon} className="quantityIcon"></img></NavLink> : 
            totalQuantityItemsCart === 6 ? <NavLink className="quantityLink" to ="/cart"><img src={number6CartIcon} className="quantityIcon"></img></NavLink> : 
            totalQuantityItemsCart === 7 ? <NavLink className="quantityLink" to ="/cart"><img src={number7CartIcon} className="quantityIcon"></img></NavLink> : 
            totalQuantityItemsCart === 8 ? <NavLink className="quantityLink" to ="/cart"><img src={number8CartIcon} className="quantityIcon"></img></NavLink> : 
            totalQuantityItemsCart === 9 ? <NavLink className="quantityLink" to ="/cart"><img src={number9CartIcon} className="quantityIcon"></img></NavLink> : 
            <NavLink className="quantityLink" to ="/cart"><img src={moreCartIcon} className="quantityIconplus"></img><img src={number9CartIcon} className="quantityIcon"></img></NavLink>
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
              <img src={backPackCartIcon} className="carroDesktop"/> 
                
            </NavLink>                    
          </div>
        </div>
      </nav>
    </header>
  )
}