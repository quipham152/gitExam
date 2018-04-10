/**
*
* Menu
*
*/

import React from 'react';
// import styled from 'styled-components';


class Menu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only"> Toggle navigation </span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
        </div>
        <div className="container-fluid">
            <ul className="nav navbar-nav">
                <li><a href="#"> Dashboard</a></li>
                <li className="active"><a href="#"> Compaigns</a></li>
                <li><a href="#"> Inventory</a></li>
                <li><a href="#"> Users</a></li>
                <li><a href="#"> Reports</a></li>
            </ul>
        </div>
      </nav>
    );
  }
}

Menu.propTypes = {

};

export default Menu;
