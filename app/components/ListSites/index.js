/**
*
* ListSites
*
*/

import React from 'react';
import SearchBar from '../SearchBar';
import ListSitesData from '../ListSitesData';
// import styled from 'styled-components';

class ListSites extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      datas: [
        { id: "10000", name: "Le monde", type: "website", volumn: "100 000 000", version: "1.2" },
        { id: "10000", name: "Le monde", type: "website", volumn: "100 000 000", version: "1.2" },
        { id: "10000", name: "Le monde", type: "website", volumn: "100 000 000", version: "1.2" },
        { id: "10000", name: "Le monde", type: "website", volumn: "100 000 000", version: "1.2" },
      ]
    };
  }
  handleChange(e) {
    this.setState({ value: e.target.value })
  }
  dataRender() {
    return this.state.datas.map(data => (<ListSitesData id={data.id} name={data.name}
      type={data.type} volumn={data.volumn} version={data.version} />));
  }
  render() {
    return (
      <div>
        <div id="main-content">

          <div className="list-view container">
            <div className="row">
              <form className="form-inline" >
                <SearchBar handleChange={this.state.handleChange} />

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
ListSites.propTypes = {

};

export default ListSites;
