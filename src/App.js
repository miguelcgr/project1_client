import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import userService from "./services/user-service";

import authService from "./services/auth-service";

// Pages - Client
import Home from "./pages-client/Home/Home";
import Signup from "./pages-client/Signup/Signup";
import Login from "./pages-client/Login/Login";
import Private from "./pages-client/Private/Private";
import Cart from "./pages-client/Cart/Cart";

// Pages - Seller

import AdminHome from "./pages-seller/AdminHome/AdminHome";

// Components
import Navbar from "./components/Navbar/Navbar";
import AnonRoute from "./components/AnonRoute/AnonRoute";

import ClientPrivateRoute from "./components/PrivateRoute/ClientPrivateRoute";
import AdminPrivateRoute from "./components/PrivateRoute/AdminPrivateRoute";

const App = () => {
  const [cart, setCart] = useState([]);


  useEffect(() => {
    loadCurrentUser();
  }, []);

  const loadCurrentUser = () => {
    authService
      .me()
      .then((response) => {
        const id = response._id;
       
        userService.getUserById(id).then((user) => {
          setCart(user.currentCart);
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <Navbar cart={cart} />

      <Switch>
        {/* client routes */}

        <ClientPrivateRoute exact path="/cart" component={Cart} />
        <AnonRoute exact path="/login" component={Login} />
        <AnonRoute exact path="/signup" component={Signup} />
        <Route exact path="/" component={Home} cart={cart} />
        {/* <ClientPrivateRoute exact path="/checkout" component={Checkout} />
          <ClientPrivateRoute exact path="/profile/:userId" component={Profile} />

          <Route exact path="/:nameUrl" component={Brand} /> */}
        {/* <PrivateRoute exact path="/private" component={Private} /> */}

        {/* SELLER routes */}
        <AdminPrivateRoute
          exact
          path="/mystore/home"
          component={AdminHome}
        />{" "}
      </Switch>
    </div>
  );
};

export default App;

///

// import React, { Component } from 'react';
// import './App.css';
// import { Switch, Route } from 'react-router-dom';

// // Pages - Client
// import Home from './pages-client/Home/Home';
// import Signup from './pages-client/Signup/Signup';
// import Login from './pages-client/Login/Login';
// import Private from './pages-client/Private/Private';
// import Cart from './pages-client/Cart/Cart'

// // Pages - Seller

// import AdminHome from './pages-seller/AdminHome/AdminHome'

// // Components
// import Navbar from './components/Navbar/Navbar';
// import AnonRoute from './components/AnonRoute/AnonRoute';

// import ClientPrivateRoute from "./components/PrivateRoute/ClientPrivateRoute";
// import AdminPrivateRoute from "./components/PrivateRoute/AdminPrivateRoute";

// class App extends Component {
//   render() {
//     return (
//       <div className="container">
//         <Navbar />

//         <Switch>
//         {/* client routes */}
//            <ClientPrivateRoute
//            exact
//            path="/cart"
//            component={Cart}
//             />

//           <AnonRoute exact path="/login" component={Login} />
//           <AnonRoute exact path="/signup" component={Signup} />
//           <Route exact path="/" component={Home} />
//          {/* <ClientPrivateRoute exact path="/checkout" component={Checkout} />
//           <ClientPrivateRoute exact path="/profile/:userId" component={Profile} />

//           <Route exact path="/:nameUrl" component={Brand} /> */}

//           {/* <PrivateRoute exact path="/private" component={Private} /> */}

//           {/* SELLER routes */}

//            <AdminPrivateRoute
//             exact
//             path="/mystore/home"
//             component={AdminHome}
//           />{" "}

//         </Switch>
//       </div>
//     );
//   }
// }

// export default App;
