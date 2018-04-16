/**
*
* AddEditSites
*
*/

import React from 'react';
// import styled from 'styled-components';


class AddEditSites extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state={name:''};
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({name:e.target.value});
  }
  render() {
    return (
      <div>
        <div className="modal fade popup_add" tabIndex="-1" role="dialog" id="add_site">
          <div className="modal-dialog" role="document">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="icon-arrow-left2"></i></button>
            <div className="modal-header">
              <h2>{this.props.action} site</h2>
            </div>
            <form>
              <div className="modal-content">
                <div className="form-group">
                  <label htmlFor="inputName">Name</label>
                  <input type="text" className="form-control" id="inputName"
                    placeholder="site name..." onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="inputNetwork">Network</label>
                  <select name="role_selct" className="" id="">
                    <option value="1" title="Food retail and sevice">Carrefour</option>
                    <option value="2" title="Food retail and sevice 2">Carrefour 2</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="inputPlatform">Platform</label>
                  <select name="role_selct" className="" id="">
                    <option value="1" title="Food retail and sevice">Carrefour</option>
                    <option value="2" title="Food retail and sevice 2">Carrefour 2</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Validate</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AddEditSites.propTypes = {

};

export default AddEditSites;
