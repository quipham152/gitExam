/**
*
* ListPacks
*
*/

import React from 'react';
import PanelPeople from '../PanelPeople';
import SearchBar from '../SearchBar';
// import styled from 'styled-components';


class ListPacks extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  handleChange(e) {
    this.setState({ value: e.target.value })
  }
  render() {
    return (
      <div>
        <div id="main-content">
          <div className="list-view container">
            <div className="row">
              <form className="form-inline">
                <SearchBar handleChange={this.state.handleChange} />

                <div className="clearfix"></div>
                <PanelPeople name="Pack femmes" option1="4 sites" option2="#4329" />
                <PanelPeople name="Pack luxe" option1="35 sites" option2="#9008" />
                <PanelPeople name="Pack femmes" option1="4 sites" option2="#4329" />
                <PanelPeople name="Pack luxe" option1="35 sites" option2="#9008" />
                <PanelPeople name="Pack femmes" option1="4 sites" option2="#4329" />
                <PanelPeople name="Pack luxe" option1="35 sites" option2="#9008" />
                <PanelPeople name="Pack femmes" option1="4 sites" option2="#4329" />
                <PanelPeople name="Pack luxe" option1="35 sites" option2="#9008" />

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
