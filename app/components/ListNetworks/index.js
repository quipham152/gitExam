/**
*
* List Net works
*
*/

import React from 'react';
import Header from '../Header';
import avatar from '../../../vendor/images/avatar.jpg';

class ListNetworks extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div id="main-content">
          <div className="top-header">
            <div className="container">
              <h1>Inventory</h1>
              <div className="pull-right">
                <a className="btn btn-secondary" data-toggle="modal" data-target="#add_user" href="#"> Manage packs</a>
                <a className="btn btn-primary" data-toggle="modal" data-target="#add_network" href="#"> New network</a>
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
                    <li><a className="dropdown-item" data-toggle="modal" data-target="#delete_network" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                  </ul>
                  <img alt="Samuel" src={avatar} />
                  <h3>Bliink</h3>
                  <p>25 sites</p>
                  <p>#1234</p>
                </div>
              </div>
              <div className="panel-people col-sm-3">
                <div className="panel-people-inner">
                  <button className="btn btn-primary dropdown-toggle pull-right" type="button" data-toggle="dropdown">...</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i className="fa fa-pencil"></i> Edit</a></li>
                    <li><a className="dropdown-item" data-toggle="modal" data-target="#delete_network" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                  </ul>
                  <img alt="Samuel" src={avatar} />
                  <h3>Bliink</h3>
                  <p>25 sites</p>
                  <p>#1234</p>
                </div>
              </div>
              <div className="panel-people col-sm-3">
                <div className="panel-people-inner">
                  <button className="btn btn-primary dropdown-toggle pull-right" type="button" data-toggle="dropdown">...</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i className="fa fa-pencil"></i> Edit</a></li>
                    <li><a className="dropdown-item" data-toggle="modal" data-target="#delete_network" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                  </ul>
                  <img alt="Samuel" src={avatar} />
                  <h3>Bliink</h3>
                  <p>25 sites</p>
                  <p>#1234</p>
                </div>
              </div>
              <div className="panel-people col-sm-3">
                <div className="panel-people-inner">
                  <button className="btn btn-primary dropdown-toggle pull-right" type="button" data-toggle="dropdown">...</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i className="fa fa-pencil"></i> Edit</a></li>
                    <li><a className="dropdown-item" data-toggle="modal" data-target="#delete_network" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                  </ul>
                  <img alt="Samuel" src={avatar} />
                  <h3>Bliink</h3>
                  <p>25 sites</p>
                  <p>#1234</p>
                </div>
              </div>
              <div className="panel-people col-sm-3">
                <div className="panel-people-inner">
                  <button className="btn btn-primary dropdown-toggle pull-right" type="button" data-toggle="dropdown">...</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i className="fa fa-pencil"></i> Edit</a></li>
                    <li><a className="dropdown-item" data-toggle="modal" data-target="#delete_network" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                  </ul>
                  <img alt="Samuel" src={avatar} />
                  <h3>Bliink</h3>
                  <p>25 sites</p>
                  <p>#1234</p>
                </div>
              </div>
              <div className="panel-people col-sm-3">
                <div className="panel-people-inner">
                  <button className="btn btn-primary dropdown-toggle pull-right" type="button" data-toggle="dropdown">...</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i className="fa fa-pencil"></i> Edit</a></li>
                    <li><a className="dropdown-item" data-toggle="modal" data-target="#delete_network" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                  </ul>
                  <img alt="Samuel" src={avatar} />
                  <h3>Bliink</h3>
                  <p>25 sites</p>
                  <p>#1234</p>
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
ListNetworks.propTypes = {

};
export default ListNetworks;
