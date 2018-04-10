/**
*
* ListUsers
*
*/

import React from 'react';
import Header from '../Header';
import avatar from '../../../vendor/images/avatar.jpg';
import Breadcrumb from '../Breadcrumb';
import Button from '../Button';
// import styled from 'styled-components';


class ListUsers extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <div id="main-content">
          <div className="top-header">
            <div className="container">
              <Breadcrumb title="User" />
              <div className="pull-right">
                <Button primary="primary" name="user" buttonName="New User" />
              </div>
            </div>
          </div>
          <div className="list-view container">
            <div className="row">
              <form className="form-inline">
                <div className="form-group col-sm-3 col-xs-12">

                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Search by compaign name..." />
                  <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                </div>

              </form>
              <div className="clearfix"></div>

              <div className="panel-people col-sm-3">
                <div className="panel-people-inner">
                  <button className="btn btn-primary dropdown-toggle pull-right" type="button" data-toggle="dropdown">...</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i className="fa fa-pencil"></i> Edit</a></li>
                    <li><a className="dropdown-item" data-toggle="modal" data-target="#myModal" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                  </ul>
                  <img alt="Samuel" src={avatar} />

                  <h3>Josie rios</h3>
                  <p>Administrator</p>
                  <p>administrator_bliink@gmail.com</p>
                </div>

              </div>
              <div className="panel-people col-sm-3">
                <div className="panel-people-inner">
                  <button className="btn btn-primary dropdown-toggle pull-right" type="button" data-toggle="dropdown">...</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i className="fa fa-pencil"></i> Edit</a></li>
                    <li><a className="dropdown-item" data-toggle="modal" data-target="#myModal" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                  </ul>
                  <img alt="Samuel" src={avatar} />

                  <h3>Josie rios</h3>
                  <p>Administrator</p>
                  <p>administrator_bliink@gmail.com</p>
                </div>

              </div>
              <div className="panel-people col-sm-3">
                <div className="panel-people-inner">
                  <button className="btn btn-primary dropdown-toggle pull-right" type="button" data-toggle="dropdown">...</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i className="fa fa-pencil"></i> Edit</a></li>
                    <li><a className="dropdown-item" data-toggle="modal" data-target="#myModal" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                  </ul>
                  <img alt="Samuel" src={avatar} />

                  <h3>Josie rios</h3>
                  <p>Administrator</p>
                  <p>administrator_bliink@gmail.com</p>
                </div>

              </div>
              <div className="panel-people col-sm-3">
                <div className="panel-people-inner">
                  <button className="btn btn-primary dropdown-toggle pull-right" type="button" data-toggle="dropdown">...</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i className="fa fa-pencil"></i> Edit</a></li>
                    <li><a className="dropdown-item" data-toggle="modal" data-target="#myModal" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                  </ul>
                  <img alt="Samuel" src={avatar} />

                  <h3>Josie rios</h3>
                  <p>Administrator</p>
                  <p>administrator_bliink@gmail.com</p>
                </div>

              </div>
              <div className="panel-people col-sm-3">
                <div className="panel-people-inner">
                  <button className="btn btn-primary dropdown-toggle pull-right" type="button" data-toggle="dropdown">...</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i className="fa fa-pencil"></i> Edit</a></li>
                    <li><a className="dropdown-item" data-toggle="modal" data-target="#myModal" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                  </ul>
                  <img alt="Samuel" src={avatar} />

                  <h3>Josie rios</h3>
                  <p>Administrator</p>
                  <p>administrator_bliink@gmail.com</p>
                </div>

              </div>
              <div className="panel-people col-sm-3">
                <div className="panel-people-inner">
                  <button className="btn btn-primary dropdown-toggle pull-right" type="button" data-toggle="dropdown">...</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i className="fa fa-pencil"></i> Edit</a></li>
                    <li><a className="dropdown-item" data-toggle="modal" data-target="#myModal" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                  </ul>
                  <img alt="Samuel" src={avatar} />

                  <h3>Josie rios</h3>
                  <p>Administrator</p>
                  <p>administrator_bliink@gmail.com</p>
                </div>

              </div>
              <div className="panel-people col-sm-3">
                <div className="panel-people-inner">
                  <button className="btn btn-primary dropdown-toggle pull-right" type="button" data-toggle="dropdown">...</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i className="fa fa-pencil"></i> Edit</a></li>
                    <li><a className="dropdown-item" data-toggle="modal" data-target="#myModal" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                  </ul>
                  <img alt="Samuel" src={avatar} />

                  <h3>Josie rios</h3>
                  <p>Administrator</p>
                  <p>administrator_bliink@gmail.com</p>
                </div>

              </div>
              <div className="clearfix"></div>
              <ul className="pagination">
                <li><a className="active" href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

ListUsers.propTypes = {

};

export default ListUsers;
