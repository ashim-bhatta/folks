import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import reducer, { addedToCard, removedFromCart } from './store/carts'
import { createStore } from 'redux'

const store= createStore(reducer)
store.dispatch(addedToCard(1,'Random shoes'))
// store.dispatch(removedFromCart(1))
 

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

