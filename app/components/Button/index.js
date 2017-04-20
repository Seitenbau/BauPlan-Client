/**
*
* Button
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import RaisedButton from 'material-ui/RaisedButton';

class Button extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <RaisedButton label="hallo"/>
    );
  }
}

Button.propTypes = {

};

export default Button;
