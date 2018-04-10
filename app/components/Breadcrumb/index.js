/**
*
* Breadcrumb
*
*/

import React from 'react';
// import styled from 'styled-components';


class Breadcrumb extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-sm-4">
        <h1>{this.props.title}</h1>
        <nav className="breadcrumb">
          <li className={"breadcrumb-" + this.props.item}><a href="#">{this.props.itemtitle}</a></li>
          <li className={"breadcrumb-item " + this.props.itemactive1}><span>{this.props.itemTitleActive1}</span></li>
          <li className={"breadcrumb-item " + this.props.itemaactive2}><span>{this.props.itemTitleActive2}</span></li>
          <li className={"breadcrumb-item " + this.props.itemaactive3}><span>{this.props.itemTitleActive3}</span></li>
        </nav>
      </div>
    );
  }
}

Breadcrumb.propTypes = {

};

export default Breadcrumb;
