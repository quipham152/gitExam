/**
*
* ListUsers
*
*/

import React from 'react';
import PanelPeople from '../PanelPeople';

// import styled from 'styled-components';


class ListUsers extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div id="main-content">
          <div className="list-view container">
            <div className="row">
              <form className="form-inline">
                <div className="form-group col-sm-3 col-xs-12">
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Search by compaign name..." />
                  <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                </div>


                <div className="clearfix"></div>
                <PanelPeople name="Josie rios" admin="Administrator" email="administrator_bliink@gmail.com"/>
                <PanelPeople name="Josie rios" admin="Administrator" email="administrator_bliink@gmail.com"/>
                <PanelPeople name="Josie rios" admin="Administrator" email="administrator_bliink@gmail.com"/>
                <PanelPeople name="Josie rios" admin="Administrator" email="administrator_bliink@gmail.com"/>
                <PanelPeople name="Josie rios" admin="Administrator" email="administrator_bliink@gmail.com"/>
                <PanelPeople name="Josie rios" admin="Administrator" email="administrator_bliink@gmail.com"/>
                <PanelPeople name="Josie rios" admin="Administrator" email="administrator_bliink@gmail.com"/>


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
ListUsers.propTypes = {

};

export default ListUsers;
