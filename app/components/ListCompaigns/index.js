/**
*
* ListCompaigns
*
*/

import React from 'react';
import SearchBar from '../SearchBar';
import ListCompaignsData from '../ListCompaignsData';
// import styled from 'styled-components';


class ListCompaigns extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      datas: [
        {
          name: "Dior men spring 20", advertiser: "L'OREAL", startdate: "11/07/2017", enddate: "11/07/2017",
          budget: "10 000 €", impression: "200 000", click: "200 000", ctr: "2%", success: "success", status: "Validated"
        },
        {
          name: "Dior men spring 20", advertiser: "L'OREAL", startdate: "11/07/2017", enddate: "11/07/2017",
          budget: "10 000 €", impression: "200 000", click: "200 000", ctr: "2%", success: "warning", status: "Validated"
        },
        {
          name: "Dior men spring 20", advertiser: "L'OREAL", startdate: "11/07/2017", enddate: "11/07/2017",
          budget: "10 000 €", impression: "200 000", click: "200 000", ctr: "2%", success: "default", status: "Cancel"
        },
        {
          name: "Dior men spring 20", advertiser: "L'OREAL", startdate: "11/07/2017", enddate: "11/07/2017",
          budget: "10 000 €", impression: "200 000", click: "200 000", ctr: "2%", success: "warning", status: "Validated"
        },
      ]

    };
  }
  handleChange(e) {
    this.setState({ value: e.target.value })
  }
  dataRender() {
    return this.state.datas.map(data => (<ListCompaignsData name={data.name} advertiser={data.advertiser}
    startdate={data.startdate} enddate={data.enddate} budget={data.budget} impression={data.impression}
      click={data.click} ctr={data.ctr} success={data.success} status={data.status} />));
  }
  render() {
    return (
      <div>
        <div id="main-content">

          <div className="list-view container">
            <div className="row">
              <form action="">
                <div className="input-group filter col-sm-8">
                  <SearchBar handleChange={this.state.handleChange} />
                  <select className="filter_group_by" id="filter_staus">
                    <option value="1" title="Status">Validate</option>
                    <option value="2" title="Status">Pending</option>
                    <option value="3" title="Status">Un-Validate</option>
                  </select>
                </div>

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
                    {this.dataRender()}

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
      </div>
    );
  }
}

ListCompaigns.propTypes = {

};

export default ListCompaigns;
