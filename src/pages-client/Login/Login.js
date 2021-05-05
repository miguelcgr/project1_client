import React, { Component } from "react";
import { withAuth } from '../../context/auth-context';
import './Login.css'

class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    // Call function coming from AuthProvider ( via withAuth )
    this.props.login(username, password);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    console.log('user', username)
    return (
      <div className= 'align'>
      

        <h1 className='login-text'>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange}/>

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />

          <button type="submit" value="Login">Log in</button>
        </form>
        
      </div>
    );
  }
}

export default withAuth(Login);
