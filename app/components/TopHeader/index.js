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
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <h1>Compaigns</h1>
                </div>
                <div className="col-sm-8">
                    <div className="pull-right">
                        <a className="btn btn-secondary" href="#"> Manage advertisers</a>
                        <a className="btn btn-primary" data-toggle="modal" data-target="#add_advertiser" href="#"> New Compaign</a>
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
