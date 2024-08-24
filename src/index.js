import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import UserContextProvider from './context/userContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import CartCotextProvider from './context/cartContext';

let qureyClint = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartCotextProvider>
     <UserContextProvider>
        <QueryClientProvider client={qureyClint}>
    <App />
    </QueryClientProvider>
    </UserContextProvider>
  </CartCotextProvider>
   
);
