import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useRecoverDataCartFromLocalStorage } from './hooks/useRecoverDataCartFromLocalStorage';
import { v4 as randomId} from 'uuid'
import { Home } from './pages/home/Home';
import { Collection } from './pages/collections/Collection';

import { NavBar } from './components/nav/NavBar';
import { ItemDetailsContainer } from './components/productDetailsComponents/ItemDetailsContainer';
import { CartItemsContainer } from './pages/cart/CartItemsContainer';
import { Payment } from './components/payment/Payment';
import { We } from './pages/we/We';
import { ContactUs } from './pages/contactUs/ContactUs';
import { Footer } from './components/footer/Footer';
import { CustomOrder } from './pages/customOrder/CustomOrder';
import { OrderCreated } from './components/orderCreated/OrderCreated';
import './App.css';


function App() { 

  const { recoverCartDataFromLocalStorage } = useRecoverDataCartFromLocalStorage()


    
  useEffect(()=>{        
    recoverCartDataFromLocalStorage()

    const urlChangeHandler = ()=>{
      console.log(window.location)
    }
    
    window.addEventListener("popstate", urlChangeHandler)

    return ()=> window.removeEventListener("popstate", urlChangeHandler)
  },[])
  

  return (
        <>
          <NavBar />
          <Routes>
              <Route path="*" element = {<Home />}/>
              <Route path="/home" element = {<Home />}/>
              <Route path="/collections/Urban backpacks"          element = {<Collection key="UrbanBackpacks"/>}/>
              <Route path="/collections/Travel backpacks"         element = {<Collection key="TravelBackpacks"/>}/>
              <Route path="/collections/Climbing backpacks"       element = {<Collection key="ClimbingBackpacks"/>}/>
              <Route path="/collections/New arrivals - Backpacks" element = {<Collection key="NewArrivalsCollection"/>}/>              
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
