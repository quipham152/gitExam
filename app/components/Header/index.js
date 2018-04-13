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
import TopHeaer from '../TopHeader';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="header">
        <div className="container-fluid">

              <Menu logo={logo} avt={avatar}/>
              
          </div>
          <TopHeaer titleHeader="Compaigns" btnMag="Manage advertisers" btnFnc="New Compaign" />
      </div>
    );
  }
}

Header.propTypes = {

};

export default Header;
