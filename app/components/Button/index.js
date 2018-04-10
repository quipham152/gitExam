/**
*
* Button
*
*/

import React from 'react';
// import styled from 'styled-components';


class Button extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <a className={"btn btn-" + this.props.primary} data-toggle="modal" data-target={"#add_" + this.props.name} href="#">{this.props.buttonName}</a>
    );
  }
}

Button.propTypes = {

};

export default Button;
