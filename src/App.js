import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from './redux/user/user.actions'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
  const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch(setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          }));
        });

      } else {
        dispatch(setCurrentUser(null));
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  });

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
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
