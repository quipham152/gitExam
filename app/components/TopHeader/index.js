/**
*
* TopHeader
*
*/

import React from 'react';
// import styled from 'styled-components';


class TopHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="top-header">
        <div className="container-fluid">
            <div className="row">
                <div className="col d-flex justify-content-start">
                    <h1 className="pl-2">{this.props.titleHeader}</h1>
                </div>
                <div className="col d-flex justify-content-end">
                    <div className="pull-right pr-4 mt-3 top-header-btn">
                        <a className="btn btn-secondary" href="#">{this.props.btnMag}</a>
                        <a className="btn btn-danger" data-toggle="modal" data-target="#add_advertiser" href="#">{this.props.btnFnc}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

TopHeader.propTypes = {

};

export default TopHeader;
