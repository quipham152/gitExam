/**
*
* ListTags
*
*/

import React from 'react';
import SearchBar from '../SearchBar';
import ListTagsData from '../ListTagsData';
// import styled from 'styled-components';

class ListTags extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      datas: [
        { id: "1000", name: "Home page", content: "sport", volumn: "100 000 000" },
        { id: "1000", name: "Home page", content: "sport", volumn: "100 000 000" },
        { id: "1000", name: "Home page", content: "sport", volumn: "100 000 000" },
      ]
    };
  }
  handleChange(e) {
    this.setState({ value: e.target.value })
  }
  dataRender(){
    return this.state.datas.map(data => (<ListTagsData id={data.id} name={data.name}
       content={data.content} volumn={data.volumn} />));
  }
  render() {
    return (
      <div>

        <div id="main-content">

          <div className="list-view container">
            <div className="row">
              <form className="form-inline" >
                <SearchBar handleChange={this.state.handleChange} />

                <div className="clearfix"></div>
                <table id="datatable" className="table table-hover">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>name</th>
                      <th>content type</th>
                      <th>volume</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.dataRender()}

                  </tbody>
                </table>
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

ListTags.propTypes = {

};

export default ListTags;
