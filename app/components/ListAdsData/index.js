/**
*
* ListAdsData
*
*/

import React from 'react';
// import styled from 'styled-components';


class ListAdsData extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
  }
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.advertiser}</td>
        <td>{this.props.startdate}</td>
        <td>{this.props.enddate}</td>
        <td>{this.props.budget}</td>
        <td>{this.props.impression}</td>
        <td>{this.props.click}</td>
        <td>{this.props.ctr}</td>
        <td><span className="badge badge-success">{this.props.status}</span></td>
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
    );
  }
}

ListAdsData.propTypes = {

};

export default ListAdsData;
