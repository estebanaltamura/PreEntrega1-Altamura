import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useRecoverDataCartFromLocalStorage } from './hooks/useRecoverDataCartFromLocalStorage';
import { Home } from './pages/home/Home';
import { Collection } from './pages/collections/Collection';

import { NavBar } from './components/nav/NavBar';
import { ItemDetailsContainer } from './components/productDetailsComponents/ItemDetailsContainer';
import { CartItemsContainer } from './pages/cart/CartItemsContainer';
import { Payment } from './components/payment/Payment';
import { We } from './pages/We/We';
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
