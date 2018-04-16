/**
*
* ListAdvertisers
*
*/

import React from 'react';
import SearchBar from '../SearchBar';
import ListAdvertisersData from '../ListAdvertisersData';
// import styled from 'styled-components';


class ListAdvertisers extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      datas: [
        { name: "Carrefour", category: "Food retail and service", status: "Validated" },
        { name: "Carrefour", category: "Food retail and service", status: "Validated" },
        { name: "Carrefour", category: "Food retail and service", status: "Validated" },
        { name: "Carrefour", category: "Food retail and service", status: "Validated" },
      ]
    };
  }
  handleChange(e) {
    this.setState({ value: e.target.value })
  }
  dataRender() {
    return this.state.datas.map(data => (<ListAdvertisersData name={data.name}
      category={data.category} status={data.status} type="Advertiser"/>))
  }
  render() {
    return (
      <div className="list-view container col-xl">
        <div className="row view-view">
          <form action="form-inline "  >
            <SearchBar handleChange={this.state.handleChange} />
          </form>
          <div className="input-group filter col-sm-8">
            <select className="filter_group_by" id="filter_status">
              <option value="1" title="Status">Active</option>
              <option value="2" title="Status">Expired</option>
              <option value="3" title="Status">Un-active</option>
            </select>
          </div>
        </div>
        <div className="row view-view">
          <table id="datatable" className="table">
            <thead>
              <tr>
                <th >Name</th>
                <th >Business category</th>
                <th >Status</th>
                <th ></th>
              </tr>
            </thead>
            <tbody> {this.dataRender()} </tbody>
          </table>
          <div className="clearfix"></div>

        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">></a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

ListAdvertisers.propTypes = {

};

export default ListAdvertisers;
