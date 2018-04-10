/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';
import Menu from '../Menu'
import avatar from '../../../vendor/images/avatar.jpg';
import logo from '../../../vendor/images/logo.png';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="header">
      <div className="container">
          <div className="row">
          <div id="logo" className="col-sm-1">
              <img alt="Bliink" src={logo}/>
          </div>
          <div className="col-sm-7">
              <Menu />
          </div>
          <div id="account_login" className="col-sm-4 pull-right dropdown">
              <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                  <img alt="Samuel" src={avatar}/>
                  <p>Samuel</p>
                  <i className="fas fa-caret-down"></i>
              </button>
  
              <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
          </div>
          </div>
      </div>
  </div>  
    );
  }
}

Header.propTypes = {

};

export default Header;
