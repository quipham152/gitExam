/**
*
* ListSites
*
*/

import React from 'react';
import Header from '../Header';
import Breadcrumb from '../Breadcrumb';
import Button from '../Button';
// import styled from 'styled-components';


class ListSites extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <div id="main-content">
          <div className="top-header">
            <div className="container">
              <div className="row">
                <Breadcrumb title="Sites" item="item" itemtitle="Inventory"
                                          itemactive1="active" itemTitleActive1="Bliink"
                                          itemactive2="active" itemTitleActive2="Packs"/>
                <div className="col-sm-8">
                  <div className="pull-right">
                    <Button primary="secondary" name="user" buttonName="Edit network"/>
                    <Button primary="primary" name="site" buttonName="New site"/>
                  </div>
                </div>
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
              <table id="datatable" className="table table-hover">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>type</th>
                    <th>volume</th>
                    <th>sdk version</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10000</td>
                    <td>Le monde</td>
                    <td>website</td>
                    <td>100 000 000</td>
                    <td>1.2</td>
                    <td>
                      <div className="dropdown show">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          ...
                            </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#"><i className="fa fa-pencil"></i> Edit</a></li>
                          <li><a className="dropdown-item" href="#"><i className="fa fa-download"></i> Intergration</a></li>
                          <li><a className="dropdown-item" data-toggle="modal" data-target="#delete_site" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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
ListSites.propTypes = {

};

export default ListSites;
