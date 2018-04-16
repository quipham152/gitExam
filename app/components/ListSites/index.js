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

      type={data.type} volumn={data.volumn} version={data.version} type="Site"/>));
      type={data.type} volumn={data.volumn} version={data.version} />));
  }
  render() {
    return (

      <div className="list-view container col-xl">

        <form className="form-inline view-view" >
          <SearchBar handleChange={this.state.handleChange} />
        </form>
        <div className="row view-view">
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
            <tbody> {this.dataRender()} </tbody>
            <tbody>
              {this.dataRender()}
            </tbody>
          </table>
        </div>
        <div className="clearfix"></div>
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
ListSites.propTypes = {

};

export default ListSites;
