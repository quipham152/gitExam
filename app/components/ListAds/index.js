/**
*
* ListAds
*
*/

import React from 'react';
import ListAdsData from '../ListAdsData';

// import styled from 'styled-components';

class ListAds extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      datas: [
        {
          name: "Dior men spring 20", advertiser: "L'OREAL", startdate: "11/07/2017", enddate: "11/07/2017",
          budget: "10 000 €", impression: "200 000", click: "200 000", ctr: "2%", status: "Validated"
        },
        {
          name: "Dior men spring 20", advertiser: "L'OREAL", startdate: "11/07/2017", enddate: "11/07/2017",
          budget: "10 000 €", impression: "200 000", click: "200 000", ctr: "2%", status: "Validated"
        },
        {
          name: "Dior men spring 20", advertiser: "L'OREAL", startdate: "11/07/2017", enddate: "11/07/2017",
          budget: "10 000 €", impression: "200 000", click: "200 000", ctr: "2%", status: "Validated"
        },
        {
          name: "Dior men spring 20", advertiser: "L'OREAL", startdate: "11/07/2017", enddate: "11/07/2017",
          budget: "10 000 €", impression: "200 000", click: "200 000", ctr: "2%", status: "Validated"
        },
      ]
    }
  }
  dataRender() {
    return this.state.datas.map(data => (<ListAdsData name={data.name} advertiser={data.advertiser}
      startdate={data.startdate} enddate={data.enddate} budget={data.budget} impression={data.impression}
      click={data.click} ctr={data.ctr} status={data.status} type="Ads" />))
  }
  render() {
    return (
      <div className="list-view container col-xl">

        <form action="form-inline" >
          <div className="row view-view">
            <table id="datatable" className="table table-hover">
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
              <tbody> {this.dataRender()} </tbody>
            </table>
            <div className="clearfix"></div>
          </div>
        </form>
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

ListAds.propTypes = {

};

export default ListAds;

