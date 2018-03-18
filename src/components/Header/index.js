/**
 *
 * Header
 *
 */

import React from 'react';
import styled from 'styled-components';
import { rem } from '../../utils/helper';

const Wrapper = styled.div`
  padding: ${rem(10)} ${rem(40)};
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: ${props => props.theme.colors.headerColor};
`;

class Header extends React.PureComponent {
  render() {
    return <Wrapper> {React.Children.toArray(this.props.children)}</Wrapper>;
  }
}

Header.propTypes = {};

export default Header;
