import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './Contexts/CartContextProvider'; 
import { IsLoadingContextProvider } from './Contexts/IsLoadingContextProvider';
import { ScreenWidthContextProvider } from './Contexts/ScreenWidthContextProvider';
import { initFireBase } from './firebase/config';
import App from './App';
import './index.css';

initFireBase()

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScreenWidthContextProvider>
        <CartContextProvider>        
          <IsLoadingContextProvider>

            <App />        
          </IsLoadingContextProvider>
        </CartContextProvider>
      </ScreenWidthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


