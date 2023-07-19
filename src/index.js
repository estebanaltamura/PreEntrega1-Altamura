import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './contexts/CartContextProvider'; 
import { IsLoadingContextProvider } from './contexts/IsLoadingContextProvider';
import { ScreenWidthContextProvider } from './contexts/ScreenWidthContextProvider';
import { URLDataContextProvider } from './contexts/URLDataContextProvider';
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
            <URLDataContextProvider>
              <App />        
            </URLDataContextProvider>
          </IsLoadingContextProvider>
        </CartContextProvider>
      </ScreenWidthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


