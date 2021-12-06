import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from './pages/checkout/checkout.component'
import { useSelector, useDispatch } from 'react-redux'
import {selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from "./redux/user/user.actions";

function App() {
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
    //eslint-disable-next-line
  }, [])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path="/signin" 
          render={() => 
            currentUser ? <Redirect to='/'/> : <SignInAndSignUp /> 
          } 
        />
      </Switch>
    </div>
  );
}

export default App;
