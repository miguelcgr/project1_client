import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../../context/auth-context";
import "./Navbar.css";

import userService from "../../services/user-service";

import authService from "./../../services/auth-service";

const Navbar = (props) => {
  const { isAdmin, cart } = props;

  // const [cart, setCart] = useState([]);

  //  useEffect(() => {
  //   loadCurrentUser();
  // }, []);

  // const loadCurrentUser = () => {
  //   authService.me().then((response) => {
  //     const id = response._id;
  //     console.log("id", id);
  //     userService.getUserById(id).then((user) => {
  //       setCart(user.currentCart);
  //     });
  //   })
  //   .catch((err)=>console.log(err))
  // };

  // console.log('estamos en navbar, user.currentCart', user.currentCart)
  // console.log('navbar > user', user.firstName)

  return (
    <nav className="navbar">
      <Link className="nav-link" to={"/"} id="home-btn">
        <h4>Home</h4>
      </Link>
      {props.isLoggedIn ? (
        <>
          {isAdmin ? (
            <>
              <Link to={"/mystore/home"} id="mystore-btn" className="nav-link">
                <h4>{props.user.name.firstName}</h4>
              </Link>
            </>
          ) : (
            <></>
          )}

          {cart.length > 0 ? (
            <Link className="nav-link" to={"/cart"}>
              <h4>
                {" "}
                <img  
                  className="logo"
                  src="https://img.icons8.com/pastel-glyph/452/fast-cart.png"
                  alt="cart-logo"
                />
                {cart.length}
              </h4>
            </Link>
          ) : (
    
           <></>                
                
          )}

          <button onClick={props.logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">
            <button className="navbar-button">Login</button>{" "}
          </Link>
          <br />
          <Link to="/signup">
            <button className="navbar-button">Sign Up</button>{" "}
          </Link>
        </>
      )}
    </nav>
  );
};

export default withAuth(Navbar);

//hay que hacer un state del current cart que se actualize todo el rato no solo con el cart cuando se loguea

/////

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { withAuth } from './../../context/auth-context';

// class Navbar extends Component {
//   render() {
//      const { user, logout, isLoggedin, isAdmin } = this.props;

//     return (

//       <nav className="navbar">
//         <Link to={'/'} id='home-btn'>
//           <h4>Home</h4>
//         </Link>
//         {this.props.isLoggedIn ? (
//           <>
//           {isAdmin ? (
//               <>
//                <p>SELLER SITE___  <Link
//                   to={"/mystore/home"}
//                   id="mystore-btn"
//                   className="nav-link"
//                 >
//                   control panel
//                 </Link></p>
//               </>
//             ) : (
//               <> <p>CLIENT SITE____</p> </>
//             )}
//             <p>username:___ {this.props.user.name.firstName}</p>
//             <Link to={"/cart"}>Your cart</Link>

//             <button onClick={this.props.logout}>Logout</button>
//           </>
//         ) : (
//           <>
//             <Link to="/login">
//               <button className="navbar-button">Login</button>{' '}
//             </Link>
//             <br />
//             <Link to="/signup">
//               <button className="navbar-button">Sign Up</button>{' '}
//             </Link>
//           </>
//         )}
//       </nav>
//     );
//   }
// }

// export default withAuth(Navbar);
