/**
*
* AddEditTags
*
*/

import React from 'react';
import Select2 from 'react-select2-wrapper';
// import styled from 'styled-components';


class AddEditTags extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    const { value } = this.props;
    return (

      <div>
        <div className="modal fade popup_add" tabIndex="-1" role="dialog" id="add_tag">
          <div className="modal-dialog" role="document">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="icon-arrow-left2"></i></button>
            <div className="modal-header">
              <h2>{this.props.action} Tag</h2>
            </div>

            <div className="modal-content">
              <form>
                <div className="form-group">
                  <label htmlFor="inputName">Name</label>
                  <input type="text" className="form-control" id="inputName"
                    placeholder="site name..." onChange={this.handleChange} />
                </div>
                <div className="form-group input-group">
                  <label htmlFor="inputSite">Site</label>
                  <Select2
                    value={value}
                    data={[
                      { text: 'bug', id: 1 },
                      { text: 'feature', id: 2 },
                      { text: 'documents', id: 3 },
                      { text: 'discussion', id: 4 },
                    ]}
                    options={{
                      placeholder: 'site name...',
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputSize">Select ad sizes</label>
                  <select name="role_select" className="form-control" id="" multiple>
                    <option value="1" title="Food retail and sevice">Carrefour</option>
                    <option value="2" title="Food retail and sevice 2">Carrefour 2</option>
                  </select>
                </div>
              </form>


              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Validate</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

AddEditTags.propTypes = {

};

export default AddEditTags;
