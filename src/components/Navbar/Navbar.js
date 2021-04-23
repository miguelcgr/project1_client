import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from './../../context/auth-context';



const Navbar = (props) => {
 
     const { user, logout, isLoggedin, isAdmin } = props;
     

console.log('estamos en navbar, user.currentCart', user.currentCart)
    return (
      
      <nav className="navbar">
        <Link to={'/'} id='home-btn'>
          <h4>Home</h4>
        </Link>
        {props.isLoggedIn ? (
          <>
          {isAdmin ? (
              <>
               <p>SELLER SITE___  <Link
                  to={"/mystore/home"}
                  id="mystore-btn"
                  className="nav-link"
                >
                  control panel
                </Link></p>
              </>
            ) : (
              <> <p>CLIENT SITE____</p> </>
            )}
            <p>username:___ {props.user.name.firstName}</p>

            {user.currentCart.length > 0 ? (<Link to={"/cart"}>Your cart {user.currentCart.length}</Link>) : (<h4>empty cart</h4>)}
           
          
            <button onClick={props.logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="navbar-button">Login</button>{' '}
            </Link>
            <br />
            <Link to="/signup">
              <button className="navbar-button">Sign Up</button>{' '}
            </Link>
          </>
        )}
      </nav>
    );
  }


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
