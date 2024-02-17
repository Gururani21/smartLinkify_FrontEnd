import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster />



      <>
        {/* this app will wrrapped around auth for authenticationnpm install --save-dev --save-exact prettier */}
    <App/>
      </>
  </BrowserRouter>
  </React.StrictMode>
);


