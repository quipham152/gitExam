/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';
import Menu from '../Menu';
import avatar from '../../../vendor/images/avatar.jpg';
import logo from '../../../vendor/images/logo.png';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="header">
        <div className="container-fluid">
          <div className="row">
              <Menu logo={logo} />
              <div id="account_login" className="pull-right dropdown">
              <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                <img alt="Samuel" src={avatar} />
                <span>Samuel</span>
                <i className="fas fa-caret-down"></i>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="">Profile</a></li>
                <li><a className="dropdown-item" href="">Sign out</a></li>
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
