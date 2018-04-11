/**
*
* ListAdvertisers
*
*/

import React from 'react';
import SearchBar from '../SearchBar';
// import styled from 'styled-components';


class ListAdvertisers extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  handleChange(e) {
    this.setState({ value: e.target.value })
  }
  render() {
    return (
      <div>
        <div id="main-content">

          <div className="list-view container">
            <div className="row">
              <form action="form-inline"  >
                <div className="input-group filter col-sm-8">
                  <SearchBar handleChange={this.state.handleChange} />
                  <select className="filter_group_by" id="filter_status">
                    <option value="1" title="Status">Active</option>
                    <option value="2" title="Status">Expired</option>
                    <option value="3" title="Status">Un-active</option>
                  </select>
                </div>

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
              </form>
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
