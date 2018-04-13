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
      <nav className="navbar navbar-default navbar-dark navbar-expand-lg">
        <a className="navbar-brand" href="#">
          <img src={this.props.logo} alt="Bliink" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarHeader">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active"><a className="nav-link" href="#"> Dashboard</a></li>
            <li className="nav-item"><a className="nav-link" href="#"> Compaigns</a></li>
            <li className="nav-item"><a className="nav-link" href="#"> Inventory</a></li>
            <li className="nav-item"><a className="nav-link" href="#"> Users</a></li>
            <li className="nav-item"><a className="nav-link" href="#"> Reports</a></li>
          </ul>
          <div id="account_login" className="pull-right dropdown">
              <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                <img alt="Samuel" src={this.props.avt} />
                <span>Samuel</span>
                <i className="fas fa-caret-down"></i>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="">Profile</a></li>
                <li><a className="dropdown-item" href="">Sign out</a></li>
              </ul>
            </div>
        </div>  
        
      </nav>
    );
  }
}

Menu.propTypes = {

};

export default Menu;
