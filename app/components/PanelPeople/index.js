/**
*
* PanelPeople
*
*/

import React from 'react';
import avatar from '../../../vendor/images/avatar.jpg';
import DeleteUser from '../DeleteUser';
import AddEditUser from '../AddEditUser';
// import styled from 'styled-components';


class PanelPeople extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="panel-people col-sm-3">
        <div className="panel-people-inner">
          <button className="btn btn-primary dropdown-toggle pull-right" type="button" data-toggle="dropdown">...</button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" data-toggle="modal" data-target="#add_user" href="#"><i className="fa fa-pencil"></i> Edit</a></li>
            <li><a className="dropdown-item" data-toggle="modal" data-target="#myModal" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
          </ul>
          <img alt="Samuel" src={avatar} />

          <h3>{this.props.name}</h3>
          <p>{this.props.option1}</p>
          <p>{this.props.option2}</p>
        </div>
        <AddEditUser action="Edit"/>
        <DeleteUser />
      </div>

    );
  }
}

PanelPeople.propTypes = {

};

export default PanelPeople;
