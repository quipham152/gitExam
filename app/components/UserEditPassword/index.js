/**
*
* Modal UserEditPassword
*
*/

import React from 'react';
// import styled from 'styled-components';


class UserEditPassword extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="modal fade popup_add" tabIndex="-1" role="dialog" id={this.props.id}>
          <div className="modal-dialog" role="document">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="icon-arrow-left2"></i></button>
            <div className="modal-header">
              <h2>Edit password</h2>
            </div>
            <div className="modal-content">
              <form className="form-left">

                <div className="form-group">
                  <label htmlFor="inputCurrentPassword">Current password</label>
                  <input type="password" className="form-control" id="currentPassword" placeholder="current password..." />
                </div>
                <div className="form-group">
                  <label htmlFor="inputNewPassword">New password</label>
                  <input type="text" className="form-control" id="newPassword" placeholder="new password..." />
                </div>
                <div className="form-group">
                  <label htmlFor="inputConfirmPassword">Confirm password</label>
                  <input type="email" className="form-control" id="confirmPassword" placeholder="confirm password..." />
                </div>
              </form>

              <div className="modal-footer d-flex justify-content-start">
                <button type="button" className="btn btn-danger btn-radius">VALIDATE</button>
                <button type="button" className="btn btn-secondary btn-secondary2 btn-radius" data-dismiss="modal">CANCEL</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserEditPassword.propTypes = {

};

export default UserEditPassword;
