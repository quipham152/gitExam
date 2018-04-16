/**
*
* UserResetPassword
*
*/

import React from 'react';
import logos from '../../../vendor/images/logos.png';
// import styled from 'styled-components';


class UserResetPassword extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="login-page login-page-1">
        <div className="container">
          <img src={logos} alt="" />
          <form className="form-custom-1">
            <h1>Reset password</h1>
            <div className="form-group">
              <input type="password" className="form-control" id="newPassword" placeholder="New password" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="exampleConfirmPassword1" placeholder="Confirm password" />
            </div>
            <div className="form-group">
              <button type="button" className="btn btn-danger btn-radius btn-padding">RESET PASSWORD</button>
              <a href="forgot-password">Back to sign in</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

UserResetPassword.propTypes = {

};

export default UserResetPassword;
