import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path='/shop'>
            <ShopPage />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
