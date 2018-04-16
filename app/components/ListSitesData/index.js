/**
*
* ListSitesData
*
*/

import React from 'react';
import AddEditSites from '../AddEditSites';
// import styled from 'styled-components';


class ListSitesData extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
  }
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.type}</td>
        <td>{this.props.volumn}</td>
        <td>{this.props.version}</td>
        <td>
          <div className="dropdown show">
            <button className="btn showoption dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              ...
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" data-target="#add_site" data-toggle="modal" href="#"><i className="fa fa-pencil"></i> Edit</a></li>
              <li><a className="dropdown-item" href="#"><i className="fa fa-download"></i> Intergration</a></li>
              <li><a className="dropdown-item" data-target="#delete_site" data-toggle="modal"  href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
            </ul>
          </div>
        </td>
        <AddEditSites action="Edit" />
      </tr>
    );
  }
}

ListSitesData.propTypes = {

};

export default ListSitesData;
