/**
*
* ListPacks
*
*/

import React from 'react';
import PanelPeople from '../PanelPeople';
// import styled from 'styled-components';


class ListPacks extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
                <PanelPeople name="Pack femmes" admin="4 sites" email="#4329"/>
                <PanelPeople name="Pack luxe" admin="35 sites" email="#9008"/>
                <PanelPeople name="Pack femmes" admin="4 sites" email="#4329"/>
                <PanelPeople name="Pack luxe" admin="35 sites" email="#9008"/>
                <PanelPeople name="Pack femmes" admin="4 sites" email="#4329"/>
                <PanelPeople name="Pack luxe" admin="35 sites" email="#9008"/>
                <PanelPeople name="Pack femmes" admin="4 sites" email="#4329"/>
                <PanelPeople name="Pack luxe" admin="35 sites" email="#9008"/>

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

ListPacks.propTypes = {

};

export default ListPacks;
