/**
*
* SearchBar
*
*/

import React from 'react';
// import styled from 'styled-components';


class SearchBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);

  }
  render() {
    return (
      <div className="form-group col-sm-3 col-xs-12">
        <input type="email" onChange={this.props.handleChange} className="form-control" id="exampleInputEmail1" placeholder="Search by compaign name..." />
        <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
      </div>
    );
  }
}

SearchBar.propTypes = {

};

export default SearchBar;
