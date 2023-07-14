import { useEffect, useContext } from 'react';
import { CartContext } from './Contexts/CartContextProvider';

import { Home } from './pages/Home/Home';
import { Collection } from './pages/collections/Collection';


import { NavBar } from './components/Nav/NavBar';
import { ItemDetailsContainer } from './components/ItemDetails/ItemDetailsContainer';
import { CartItemsContainer } from './pages/Cart/CartItemsContainer';
import { Payment } from './components/Payment/Payment';
import { We } from './pages/We/We';
import { ContactUs } from './components/ContactUs/ContactUs';
import { Footer } from './components/Footer/Footer';
import { CustomOrder } from './pages/customOrder/CustomOrder';
import { OrderCreated } from './components/OrderCreated/OrderCreated';
import { Routes, Route } from 'react-router-dom';
import './App.css';


function App() {

  const {itemsCartAdded, setItemsCartAdded} = useContext(CartContext)


  
  useEffect(()=>{
    const beforeUnloadHandler = ()=>{  
      itemsCartAdded.length > 0 && localStorage.setItem("itemsCartAdded", JSON.stringify(itemsCartAdded))          
    }   
    
    if (localStorage.getItem("itemsCartAdded")){
      setItemsCartAdded(JSON.parse(localStorage.getItem("itemsCartAdded")))
      localStorage.removeItem("itemsCartAdded")
    }
    
    window.addEventListener("unload", beforeUnloadHandler)
   //
    return ()=>{ 
      window.removeEventListener("unload", beforeUnloadHandler)          
    }    
  })

  return (
        <>
          <NavBar />
          <Routes>
              <Route path="*" element = {<Home />}/>
              <Route path="/home" element = {<Home />}/>
              <Route path="/collections/:idCollection" element = {<Collection />}/>
              <Route path="/We" element = {<We />}/>
              <Route path="/ContactUs" element = {<ContactUs />}/>
              <Route path="/products/:idCollection/:idProduct" element = {<ItemDetailsContainer />}/>
              <Route path="/cart" element = {<CartItemsContainer />}/>
              <Route path="/customOrder" element = {<CustomOrder />}/>
              <Route path="/orderCreated/:orderId" element = {<OrderCreated />}/>
              <Route path="/payment" element = {<Payment />}/>
          </Routes>
          <Footer />
        </>   
  );
}

export default App;
