/**
*
* ReportData
*
*/

import React from 'react';
// import styled from 'styled-components';


class ReportData extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
        <td><span className={"badge badge-"+this.props.success}>{this.props.status}</span></td>
        <td>
          <div className="dropdown show">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              ...
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#"><i className="fas fa-pencil-alt"></i> Edit</a>
              <a className="dropdown-item" href="#"><i className="fas fa-download"></i> Preview</a>
              <a className="dropdown-item" href="#"><i className="fas fa-trash-alt"></i> Cancel</a>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

ReportData.propTypes = {

};

export default ReportData;
