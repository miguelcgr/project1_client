import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from './../../context/auth-context';

class Navbar extends Component {
  render() {
     const { user, logout, isLoggedin, isAdmin } = this.props;
     
    return (
      
      <nav className="navbar">
        <Link to={'/'} id='home-btn'>
          <h4>Home</h4>
        </Link>
        {this.props.isLoggedIn ? (
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
            <p>username:___ {this.props.user.name.firstName}</p>
            <button onClick={this.props.logout}>Logout</button>
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
}

export default withAuth(Navbar);
