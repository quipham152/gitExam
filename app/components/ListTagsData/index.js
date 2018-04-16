/**
*
* ListTagsData
*
*/

import React from 'react';
import AddEditTags from '../AddEditTags';

import Delete from '../Delete';
// import styled from 'styled-components';


class ListTagsData extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.content}</td>
        <td>{this.props.volumn}</td>
        <td>
          <div className="dropdown">
            <button className="btn showoption dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              ...
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" data-target="#add_tag" data-toggle="modal" href="#"><i className="fa fa-pencil"></i> Edit</a></li>
              <li><a className="dropdown-item" href="#"><i className="fa fa-download"></i> Intergration</a></li>

              <li><a className="dropdown-item" data-target="#delete" data-toggle="modal" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>

              <li><a className="dropdown-item" data-toggle="modal" data-target="#delete_tag" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>

            </ul>
          </div>
        </td>
        <AddEditTags action="Edit" type={this.props.type}/>

        <Delete name={this.props.name} type={this.props.type}/>

      </tr>
    );
  }
}

ListTagsData.propTypes = {

};

export default ListTagsData;
