/**
*
* ListSites
*
*/

import React from 'react';
import SearchBar from '../SearchBar';
// import styled from 'styled-components';

class ListSites extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state={ value :''};
  }
  handleChange(e){
    this.setState({value : e.target.value})
  }
  render() {
    return (
      <div>
        <div id="main-content">

          <div className="list-view container">
            <div className="row">
              <form className="form-inline" >
              <SearchBar handleChange={this.state.handleChange}/>

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
                  <tr>
                    <td>10000</td>
                    <td>Le monde</td>
                    <td>website</td>
                    <td>100 000 000</td>
                    <td>1.2</td>
                    <td>
                      <div className="dropdown show">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          ...
                            </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#"><i className="fa fa-pencil"></i> Edit</a></li>
                          <li><a className="dropdown-item" href="#"><i className="fa fa-download"></i> Intergration</a></li>
                          <li><a className="dropdown-item" data-toggle="modal" data-target="#delete_site" href="#"><i className="fa fa-trash-o"></i> Delete</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
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
