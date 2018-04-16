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
      <div id="main-content">

        <div className="login-page">
          <div className="container">

            <img src={logos} alt="" />
            <form>
              <h1>Reset password</h1>
              <div className="form-group">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="New password" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="exampleConfirmPassword1" placeholder="Confim password" />
              </div>
              <div className="form-group">
                <button type="button" className="btn btn-primary pull-right">Reset password</button>
                <a href="forgot-password">Back to sign in</a>
              </div>


            </form>
          </div>
        </div>


      </div>
    );
  }
}

UserResetPassword.propTypes = {

};

export default UserResetPassword;
