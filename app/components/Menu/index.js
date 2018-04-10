/**
*
* Menu
*
*/

import React from 'react';
// import styled from 'styled-components';

class Menu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
  }
  render() {
    return (
<<<<<<< HEAD
      <nav className="navbar navbar-default navbar-expand-lg">
        <a className="navbar-brand" href="#">
          <img src={this.props.logo} alt="Bliink" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><i className="fas fa-ellipsis-v"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarHeader">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active"><a className="nav-link" href="#"> Dashboard</a></li>
            <li className="nav-item"><a className="nav-link" href="#"> Compaigns</a></li>
            <li className="nav-item"><a className="nav-link" href="#"> Inventory</a></li>
            <li className="nav-item"><a className="nav-link" href="#"> Users</a></li>
            <li className="nav-item"><a className="nav-link" href="#"> Reports</a></li>
          </ul>
        </div>  
        
=======
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
>>>>>>> 6a670960d70cc5d21eb40fddd1e410bb45ac80b8
      </nav>
    );
  }
}

Menu.propTypes = {

};

export default Menu;
