/**
*
* Report
*
*/

import React from 'react';
import ReportData from '../ReportData';
// import styled from 'styled-components';


class Report extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      datas: [
        {
          name: "Dior men spring 20", advertiser: "L'OREAL", startdate: "11/07/2017", enddate: "11/07/2017",
          budget: "10 000 €", impression: "200 000", click: "200 000", ctr: "2%", success: "success", status: "Validated"
        },
        {
          name: "Dior men spring 20", advertiser: "L'OREAL", startdate: "11/07/2017", enddate: "11/07/2017",
          budget: "10 000 €", impression: "200 000", click: "200 000", ctr: "2%", success: "success", status: "Validated"
        },
        {
          name: "Dior men spring 20", advertiser: "L'OREAL", startdate: "11/07/2017", enddate: "11/07/2017",
          budget: "10 000 €", impression: "200 000", click: "200 000", ctr: "2%", success: "success", status: "Validated"
        },
        {
          name: "Dior men spring 20", advertiser: "L'OREAL", startdate: "11/07/2017", enddate: "11/07/2017",
          budget: "10 000 €", impression: "200 000", click: "200 000", ctr: "2%", success: "success", status: "Validated"
        },
        {
          name: "Dior men spring 20", advertiser: "L'OREAL", startdate: "11/07/2017", enddate: "11/07/2017",
          budget: "10 000 €", impression: "200 000", click: "200 000", ctr: "2%", success: "success", status: "Validated"
        },
        {
          name: "Dior men spring 20", advertiser: "L'OREAL", startdate: "11/07/2017", enddate: "11/07/2017",
          budget: "10 000 €", impression: "200 000", click: "200 000", ctr: "2%", success: "success", status: "Validated"
        },
      ]
    }
  }
  dataRender() {
    return this.state.datas.map(data => (<ReportData name={data.name} advertiser={data.advertiser}
      startdate={data.startdate} enddate={data.enddate} budget={data.budget} impression={data.impression}
      click={data.click} ctr={data.ctr} success={data.success} status={data.status} />))
  }
  render() {
    return (
      <div id="main-content">
        <div className="list-view container">
          <div className="row">
            <form action="">
              <div className="input-group filter col-sm-8">
                <select className="filter_group_by" id="filter_group_by">
                  <option value="1" title="Group by">Compaign</option>
                  <option value="2" title="Group by">Compaign</option>
                  <option value="3" title="Group by">Compaign</option>
                </select>
                <div className="filter_style_value">
                  <span className="close">x</span>
                  <label for="">Advertiser</label>
                  <span>Carrefour,Adias</span>
                </div>
                <button type="button" className="add-filter btn btn-primary" data-toggle="modal" data-target="#add_filter">+</button>
              </div>
              <div className="input-group pull-right filter col-sm-2">
                <button type="button" className="btn btn-secondary">
                  <div className="filter_group_by">
                    <label>Period</label>
                    <span>13/07/2017 - 19/07/2017</span>
                    <i className="fa fa-angle-up"></i>
                  </div>
                </button>
              </div>
            </form>
            <table id="datatable" className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Advertisers</th>
                  <th>Start date</th>
                  <th>End date</th>
                  <th>Budget</th>
                  <th>Impressions</th>
                  <th>Clicks</th>
                  <th>Ctr</th>
                  <th>Status</th>
                  <th></th>
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
          </div>
        </div>
      </div>
    );
  }
}
Report.propTypes = {

};
export default Report;
