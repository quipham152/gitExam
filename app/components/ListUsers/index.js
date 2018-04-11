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
  constructor(props){
    super(props);
    this.state={ value :''};
  }
  handleChange(e){
    this.setState({value : e.target.value})
  }
  render() {
    return (
      <div>
        <div id="main-content">
          <div className="list-view container">
            <div className="row">
              <form className="form-inline">
                <SearchBar handleChange={this.state.handleChange}/>


                <div className="clearfix"></div>
                <PanelPeople name="Josie rios" option1="Administrator" option2="administrator_bliink@gmail.com"/>
                <PanelPeople name="Josie rios" option1="Administrator" option2="administrator_bliink@gmail.com"/>
                <PanelPeople name="Josie rios" option1="Administrator" option2="administrator_bliink@gmail.com"/>
                <PanelPeople name="Josie rios" option1="Administrator" option2="administrator_bliink@gmail.com"/>
                <PanelPeople name="Josie rios" option1="Administrator" option2="administrator_bliink@gmail.com"/>
                <PanelPeople name="Josie rios" option1="Administrator" option2="administrator_bliink@gmail.com"/>
                <PanelPeople name="Josie rios" option1="Administrator" option2="administrator_bliink@gmail.com"/>


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
