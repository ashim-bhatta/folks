import React from 'react';
import './App.css';
import Home from './pages/Home';
import {
  Switch,
  Route,
} from "react-router-dom";
import SingleProduct from './component/SingleProduct/SingleProduct';
import ShoppingCart from './pages/ShoppingCart';
import ProductStore from './pages/ProductStore';

function App() {
  return (
    <div>
        <Switch>

          {/* home page */}
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/home'>
            <Home />
          </Route>

          {/* cart */}
          <Route exact path='/shopping-bag'>
            <ShoppingCart />
          </Route>
 
          {/* product page */}
          <Route 
              exact
              path='/:store'
              render={(props) => <ProductStore { ...props } />}    
          />

          {/* product Details page */}
          <Route 
              exact
              path='/:type/:dressName'
              render={(props) => <SingleProduct { ...props } />}    
          />

          

          {/* 404 page */}
          <Route  >
            <h1>404</h1>
          </Route>

        </Switch>
    </div>
  );
}

export default App;
