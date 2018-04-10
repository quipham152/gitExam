/**
*
* ListAdvertisers
*
*/

import React from 'react';
import Header from '../Header';
import Breadcrumb from '../Breadcrumb';
import Button from '../Button';
// import styled from 'styled-components';


class ListAdvertisers extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <div id="main-content">
          <div className="top-header">
            <div className="container">
              <div className="row">
              <Breadcrumb title="Advertisers" item="item" itemtitle="Compaigns"
                                              itemactive1="active" itemTitleActive1="Advertisers"/>
                <div className="col-sm-8">
                  <div className="pull-right">
                  <Button primary="primary" name="advertiser" buttonName="New Advertiser"/>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="list-view container">
            <div className="row">
              <form action="">
                <div className="input-group filter col-sm-8">
                  <div className="form-group col-sm-3 col-xs-12">
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Search by compaign name..." />
                    <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                  </div>
                  <select className="filter_group_by" id="filter_staus">
                    <option value="1" title="Status">Active</option>
                    <option value="2" title="Status">Expired</option>
                    <option value="3" title="Status">Un-active</option>
                  </select>
                </div>
              </form>
              <table id="datatable" className="table">
                <thead>
                  <tr>
                    <th >Name</th>
                    <th >Business category</th>
                    <th >Status</th>
                    <th ></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Carrefour</td>
                    <td>Food retail and service</td>
                    <td><span className="badge badge-success">Validated</span></td>
                    <td>
                      <div className="dropdown show">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          ...
                            </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#"><i className="fa fa-pencil"></i> Edit</a></li>
                          <li><a className="dropdown-item" data-toggle="modal" data-target="#delete_advertiser" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
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
      </div >
    );
  }
}

ListAdvertisers.propTypes = {

};

export default ListAdvertisers;
