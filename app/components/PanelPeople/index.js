/**
*
* PanelPeople
*
*/

import React from 'react';
import avatar from '../../../vendor/images/avatar.jpg';
import Delete from '../Delete';
import AddEditUser from '../AddEditUser';
import AddEditPacks from '../AddEditPacks';
import AddEditNetworks from '../AddEditNetworks';
// import styled from 'styled-components';


class PanelPeople extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }
  chooseModal(t){
    if(t==="User"){
      return <AddEditUser action="Edit" id={this.props.id} type={this.props.type}/>
    }
    else if(t==="Pack"){
      return <AddEditPacks action="Edit" id={this.props.id} type={this.props.type}/>
    }
    else if(t==="Network"){
      return <AddEditNetworks action="Edit" id={this.props.id} type={this.props.type}/>
    }
  }
  render() {
    console.log(this.props.name)
    return (
      <div className="panel-people col-xl-3 col-lg-3 col-md-6">
        <div className="panel-people-inner ">
          <button className="btn btn-primary dropdown-toggle float-right" type="button" data-toggle="dropdown">...</button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" data-toggle="modal" data-target={'#'+this.props.id} href="#"><i className="fa fa-pencil"></i> Edit</a></li>

            <li><a className="dropdown-item" data-toggle="modal" data-target="#delete" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>

            <li><a className="dropdown-item" data-toggle="modal" data-target="#myModal" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>

          </ul>
          <img alt="Samuel" src={avatar} />
          <h3>{this.props.name}</h3>
          <p>{this.props.option1}</p>
          <p>{this.props.option2}</p>
        </div>
        {this.chooseModal(this.props.type)}


        <Delete name={this.props.name} type={this.props.type}/>
      </div>

    );
  }
}

PanelPeople.propTypes = {

};

export default PanelPeople;
