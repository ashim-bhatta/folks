import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
// context
import { CartProvider } from './context/Cart'


ReactDOM.render(
  <React.StrictMode>
      <Router>
      <CartProvider>
          <App />
      </CartProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

