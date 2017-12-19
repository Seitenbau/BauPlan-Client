/**
*
* Bar
*
*/
import styled from 'styled-components';
import React, { PropTypes } from 'react';
import { rem } from '../../utils/helper';
// import styled from 'styled-components';

const BarDiv = styled.div`
  position: fixed;
  width: ${rem(30)};
  height: 100%;
  background-color: ${(props) => props.theme.colors[props.color]};
  top: 0;
  ${(props) => props.left ? 'left' : 'right'}: 0;
`;

class Bar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <BarDiv color={this.props.color} left={this.props.position === 'left'}>
        {React.Children.toArray(this.props.children)}
      </BarDiv>
    );
  }
}

Bar.propTypes = {
  color: PropTypes.string,
  position: PropTypes.string,
  children: PropTypes.node,
};

export default Bar;
