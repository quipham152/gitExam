/**
*
* AddEditUser
*
*/

import React from 'react';
// import styled from 'styled-components';


class AddEditUser extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { firstname: '', lastname: '', email: '' };
    this.handleFirstname = this.handleFirstname.bind(this);
    this.handleLastname = this.handleLastname.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }
  handleFirstname(e) {
    this.setState({ firstname: e.target.value });
  }
  handleLastname(e) {
    this.setState({ lastname: e.target.value });
  }
  handleEmail(e) {
    this.setState({ email: e.target.value });
  }
  render() {
    return (
      <div>
        <div className="modal fade popup_add" tabIndex="-1" role="dialog" id={this.props.id} >
          <div className="modal-dialog" role="document">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="icon-arrow-left2"></i></button>
            <div className="modal-header">
              <h2>{this.props.action} {this.props.type}</h2>
            </div>
            <form>
              <div className="modal-content">
                <div className="form-group">
                  <label htmlFor="InputFirstName">First name</label>
                  <input type="text" className="form-control" id="InputFirstName"
                    placeholder="First name..." onChange={this.handleFirstname} />
                </div>
                <div className="form-group">
                  <label htmlFor="InputLastName">Last name</label>
                  <input type="text" className="form-control" id="InputLastName"
                    placeholder="Last name..." onChange={this.handleLastname} />
                </div>
                <div className="form-group">
                  <label htmlFor="InputEmail">Email</label>
                  <input type="email" className="form-control" id="InputEmail"
                    placeholder="Email..." onChange={this.handleEmail} />
                </div>
                <div className="form-group">
                  <label htmlFor="inputRole">Role</label>
                  <select name="role_selct" id="">
                    <option value="0">select user role...</option>
                    <option value="1">select user role...</option>
                    <option value="2">select user role...</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">VALIDATE</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">CANCEL</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

AddEditUser.propTypes = {

};

export default AddEditUser;
