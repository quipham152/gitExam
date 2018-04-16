/**
*
* Modal Delete
*
*/

import React from 'react';
import multiply from '../../../vendor/images/multiply.png';
// import styled from 'styled-components';


class Delete extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <div className="modal fade" tabIndex="-1" role="dialog" id="delete"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog center_modal modal-lg" role="document">
            <div className="modal-content">
              {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button> */}
              <div className="modal-body">
                <img src={multiply} />
                <h2>Delete {this.props.type}</h2>
                <p>Are you sure to delete <b>{this.props.name}</b></p>
                <p>This action is irreversible</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                <button type="button" className="btn btn-primary">Yes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Delete.propTypes = {

};

export default Delete;
