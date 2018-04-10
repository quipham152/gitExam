/**
*
* ListAds
*
*/

import React from 'react';
import Header from '../Header';
import Breadcrumb from '../Breadcrumb';
import Button from '../Button';
// import styled from 'styled-components';


class ListAds extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <div id="main-content">
          <div className="top-header">
            <div className="container">
              <div className="row">
                <Breadcrumb title="Dior men spring 2017"
                            item="item" itemactive1="active" itemactive2="active"
                            itemtitle="Compaigns" itemTitleActive1="Dior men spring 2017"
                            itemTitleActive2="Ads"/>
                <div className="col-sm-8">
                  <div className="pull-right">
                    <Button primary="secondary" buttonName="Edit compaign"/>
                    <Button primary="primary" name="ads" buttonName="New ad"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="list-view container">
            <div className="row">
              <table id="datatable" className="table">
                <thead>
                  <tr>
                    <th >Name</th>
                    <th >Advertiser</th>
                    <th >Start Date</th>
                    <th >End Date</th>
                    <th >Budget</th>
                    <th >Impressions</th>
                    <th >Clicks</th>
                    <th >Ctr</th>
                    <th >Status</th>
                    <th ></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dior men spring 20</td>
                    <td>L'OREAL</td>
                    <td>11/07/2017</td>
                    <td>11/07/2017</td>
                    <td>10 000 €</td>
                    <td>200 000</td>
                    <td>200 000</td>
                    <td>2%</td>
                    <td><span className="badge badge-success">Validated</span></td>
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

ListAds.propTypes = {

};

export default ListAds;

