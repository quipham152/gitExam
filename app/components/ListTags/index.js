/**
*
* ListTags
*
*/

import React from 'react';
import Header from '../Header';
import Breadcrumb from '../Breadcrumb';
import Button from '../Button';
// import styled from 'styled-components';


class ListTags extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <div id="main-content">
          <div className="top-header">
            <div className="container">
              <div className="row">
                <Breadcrumb title="Le monde" item="item" itemactive1="active" itemactive2="active" itemactive3="active"
                            itemtitle="Inventory" itemTitleActive1="Bliink" itemTitleActive2="Le monde"
                            itemTitleActive3="Packs"/>
                <div className="col-sm-8">
                  <div className="pull-right">
                    <Button primary="secondary" buttonName="Edit site"/>
                    <Button primary="primary" name="tag" buttonName="New tag"/>
                    {/* <a className="btn btn-secondary" href="#"> Edit site</a>
                    <a className="btn btn-primary" data-toggle="modal" data-target="#add_tag" href="#"> New tag</a> */}
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
                    <th>content type</th>
                    <th>volume</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10000</td>
                    <td>Home page</td>
                    <td>sport</td>
                    <td>100 000 000</td>
                    <td>
                      <div className="dropdown show">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          ...
                            </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#"><i className="fa fa-pencil"></i> Edit</a></li>
                          <li><a className="dropdown-item" href="#"><i className="fa fa-download"></i> Intergration</a></li>
                          <li><a className="dropdown-item" data-toggle="modal" data-target="#delete_tag" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
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

ListTags.propTypes = {

};

export default ListTags;
