/**
*
* List Sites
*
*/

import React from 'react';
import Header from '../Header';

class ListSites extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div id="main-content">
          <div className="top-header">
            <div className="container">
              <div className="row">
                <div className="col-sm-8">
                  <h1>Sites</h1>
                  <nav className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Inventory</a></li>
                    <li className="breadcrumb-item active"><span>Bliink</span></li>
                    <li className="breadcrumb-item active"><span>Packs</span></li>
                  </nav>
                </div>
                <div className="col-sm-4">
                  <div className="pull-right">
                    <a className="btn btn-secondary" data-toggle="modal" data-target="#add_user" href="#"> Edit network</a>
                    <a className="btn btn-primary" data-toggle="modal" data-target="#add_site" href="#"> New site</a>
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
