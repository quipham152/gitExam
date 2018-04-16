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
    this.state = {
      value: '',
      arrPacks: [
        { name: "Pack femmes", option1: "4 sites", option2: "#4329" },
        { name: "Pack luxe", option1: "35 sites", option2: "#9008" },
        { name: "Pack femmes", option1: "4 sites", option2: "#4329" },
        { name: "Pack luxe", option1: "35 sites", option2: "#9008" },
        { name: "Pack femmes", option1: "4 sites", option2: "#4329" },
        { name: "Pack luxe", option1: "35 sites", option2: "#9008" },
      ]
    };
  }
  handleChange(e) {
    this.setState({ value: e.target.value })
  }
  listRender() {
    return this.state.arrPacks.map(pack => (<PanelPeople name={pack.name}
      option1={pack.option1} option2={pack.option2} id="add_pack" type="Pack"/>));
  }
  render() {
    return (
        <div id="main-content">
          <div className="list-view container col-xl">
            <form className="form-inline view-view">
              <SearchBar handleChange={this.state.handleChange} />
            </form>
            <div className="row view-view" >
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
    );
  }
}

ListPacks.propTypes = {

};

export default ListPacks;
