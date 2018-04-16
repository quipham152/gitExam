/**
*
* ListUsers
*
*/

import React from 'react';
import PanelPeople from '../PanelPeople';
import SearchBar from '../SearchBar';
// import styled from 'styled-components';


class ListUsers extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      arrPeople: [
        { name: "Josie rios", option1: "Administrator", option2: "administrator_bliink@gmail.com" },
        { name: "Josie rios", option1: "Administrator", option2: "administrator_bliink@gmail.com" },
        { name: "Josie rios", option1: "Administrator", option2: "administrator_bliink@gmail.com" },
        { name: "Josie rios", option1: "Administrator", option2: "administrator_bliink@gmail.com" },
        { name: "Josie rios", option1: "Administrator", option2: "administrator_bliink@gmail.com" },
        { name: "Josie rios", option1: "Administrator", option2: "administrator_bliink@gmail.com" },
        { name: "Josie rios", option1: "Administrator", option2: "administrator_bliink@gmail.com" },
        { name: "Josie rios", option1: "Administrator", option2: "administrator_bliink@gmail.com" },
      ]
    };

  }
  handleChange(e) {
    this.setState({ value: e.target.value })
  }
  listRender() {
    return this.state.arrPeople.map(people => (<PanelPeople name={people.name}
      option1={people.option1} option2={people.option2} id="add_user" type="User" />));
  }
  render() {
    return (
      <div className="list-view container col-xl ">
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

    );
  }
}
ListUsers.propTypes = {

};

export default ListUsers;
