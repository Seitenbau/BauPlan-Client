/**
*
* Leftbar
*
*/

import React, { PropTypes } from 'react';
import Bar from './Bar';
// import styled from 'styled-components';


class Leftbar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Bar side={this.props.right}>
      </Bar>
    );
  }
}

Leftbar.propTypes = {
  right: PropTypes.bool,
};

export default Leftbar;
