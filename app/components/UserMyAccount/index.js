/**
*
* UserMyAccount
*
*/

import React from 'react';
import img1 from '../../../vendor/images/img1.jpg';
import UserEditPassword from '../UserEditPassword';
// import styled from 'styled-components';
const bgstyle={
  backgroundImage: 'url(' + img1 +')',
};

class UserMyAccount extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state={ firstname: '', lastname: '', email: ''}
  }

  handleFirstname(e){
    this.setState({firstname:e.target.value})
  }
  handleLastname(e){
    this.setState({lastname:e.target.value})
  }
  handleEmail(e){
    this.setState({email:e.target.value})
  }
  render() {
    return (
        <div className="profile-page">
          <div className="container ">
            <div className="avatar text-center d-flex justify-content-center">
              <div className="background-cover " style={bgstyle}>
                {/* <img className="img-fluid rounded " src={img1} /> */}
                <i className="icon-pencil"></i>
              </div>
            </div>
            <form className="login-page login-page-1 ">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="InputFirstName">First name</label>
                    <input type="text" className="form-control" id="InputFirstName"
                      placeholder="first name..." onChange={this.handleFirstname} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="InputPassword">Last name</label>
                    <input type="text" className="form-control" id="InputPassword"
                      placeholder="last name..." onChange={this.handleLastname} />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="InputEmail">Email</label>
                    <input type="email" className="form-control" id="InputEmail"
                    placeholder="samuelkerboeuf@blink.com" onChange={this.handleEmail}/>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <button type="button" className="btn btn-secondary btn-secondary2" data-toggle="modal" data-target="#edit_password" href="#">Edit password</button>
                <button type="button" className="btn btn-danger btn-radius btn-right ">VALIDATE</button>
              </div>
            </form>
          </div>
          <UserEditPassword id="edit_password" />
        </div>


    );
  }
}

UserMyAccount.propTypes = {

};

export default UserMyAccount;
