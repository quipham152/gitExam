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
      arrNetwork: [
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
    return this.state.arrNetwork.map(network => (<PanelPeople name={network.name}
      option1={network.option1} option2={network.option2} id="add_Network" type="Network" />));
  }
  render() {
    return (
      <div>
        <div id="main-content">

          <div className="list-view container col-xl">
            <form className="form-inline view-view">
              <SearchBar handleChange={this.state.handleChange} />
            </form>
            <div className="row view-view">
              {this.listRender()}
            </div>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

ListNetworks.propTypes = {

};

export default ListNetworks;
