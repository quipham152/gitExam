/**
*
* ListAdvertisersData
*
*/

import React from 'react';
// import styled from 'styled-components';


class ListAdvertisersData extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.category}</td>
        <td><span className="badge badge-success">{this.props.status}</span></td>
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
    );
  }
}

ListAdvertisersData.propTypes = {

};

export default ListAdvertisersData;
