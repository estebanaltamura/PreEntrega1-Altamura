import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useRecoverDataCartFromLocalStorage } from './hooks/useRecoverDataCartFromLocalStorage';
import { Home } from './pages/home/Home';
import { Collection } from './pages/collections/Collection';

import { NavBar } from './components/nav/NavBar';
import { ItemDetailsContainer } from './components/productDetailsComponents/ItemDetailsContainer';
import { CartItemsContainer } from './pages/cart/CartItemsContainer';
import { Payment } from './components/payment/Payment';
import { AboutUs } from './pages/aboutUs/AboutUs';
import { ContactUs } from './pages/contactUs/ContactUs';
import { Footer } from './components/footer/Footer';
import { CustomOrder } from './pages/customOrder/CustomOrder';
import { OrderCreated } from './components/orderCreated/OrderCreated';
import './App.css';


function App() {  
 
  const { recoverCartDataFromLocalStorage } = useRecoverDataCartFromLocalStorage()
    
  useEffect(()=>{        
    recoverCartDataFromLocalStorage()    
  },[])  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="*"                                         element = {<Navigate to="/home" />}/>
        <Route path="/home"                                     element = {<Home />}/>
        <Route path="/collections/Urban backpacks"              element = {<Collection key="UrbanBackpacks"/>}/>
        <Route path="/collections/Travel backpacks"             element = {<Collection key="TravelBackpacks"/>}/>
        <Route path="/collections/Climbing backpacks"           element = {<Collection key="ClimbingBackpacks"/>}/>
        <Route path="/collections/New arrivals - Backpacks"     element = {<Collection key="NewArrivalsCollection"/>}/>              
        <Route path="/aboutUs"                                  element = {<AboutUs />}/>
        <Route path="/contactUs"                                element = {<ContactUs />}/>
        <Route path="/products/:idCollection/:idProduct"        element = {<ItemDetailsContainer />}/>
        <Route path="/cart"                                     element = {<CartItemsContainer />}/>
        <Route path="/customOrder"                              element = {<CustomOrder />}/>
        <Route path="/orderCreated/:orderId"                    element = {<OrderCreated />}/>
        <Route path="/payment"                                  element = {<Payment />}/>
      </Routes>
      <Footer />
    </>   
  );
}

export default App;
