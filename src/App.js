import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
  const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  });

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/signin">
          <SignInAndSignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
