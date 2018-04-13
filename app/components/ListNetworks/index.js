/**
*
* ListNetworks
*
*/

import React from 'react';
import PanelPeople from '../PanelPeople';
import SearchBar from '../SearchBar';
// import styled from 'styled-components';


class ListNetworks extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      arrPeople: [
        { name: "Bliink", option1: "25 sites", option2: "#1234" },
        { name: "Bliink", option1: "25 sites", option2: "#1234" },
        { name: "Bliink", option1: "25 sites", option2: "#1234" },
        { name: "Bliink", option1: "25 sites", option2: "#1234" },
        { name: "Bliink", option1: "25 sites", option2: "#1234" },
      ]
    };
  }
  handleChange(e) {
    this.setState({ value: e.target.value })
  }
  listRender() {
    return this.state.arrPeople.map(people => (<PanelPeople name={people.name}
      option1={people.option1} option2={people.option2} />));
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
                {this.listRender()}
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

ListNetworks.propTypes = {

};

export default ListNetworks;
