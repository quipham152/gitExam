/**
*
* HomePageSignIn
*
*/

import React from 'react';
import logos from '../../../vendor/images/logos.png';
// import styled from 'styled-components';


class HomePageSignIn extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  handleEmail(e) {
    this.setState({ email: e.target.value });
  }
  handlePassword(e) {
    this.setState({ password: e.target.value });
  }
  render() {
    return (
      <div className="login-page login-page-1 ">
        <div className="container">
          <img src={logos} alt="" />
          <form className="form-custom-1">
            <h1>Sign in</h1>
            <div className="form-group">
              <input type="email" className="form-control" id="inputEmail1"
                aria-describedby="emailHelp" placeholder="Email" onChange={this.handleEmail} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="inputPassword"
                aria-describedby="password" placeholder="Password" onChange={this.handleEmail} />
            </div>
            <br/>
            <div className="form-group">
              <button type="button" className="btn btn-danger btn-radius btn-padding">SIGN IN</button>
              <a href="forgot-password">Forgot password ?</a>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

HomePageSignIn.propTypes = {

};

export default HomePageSignIn;
