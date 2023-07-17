import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './contexts/CartContextProvider'; 
import { IsLoadingContextProvider } from './contexts/IsLoadingContextProvider';
import { ScreenWidthContextProvider } from './contexts/ScreenWidthContextProvider';
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


