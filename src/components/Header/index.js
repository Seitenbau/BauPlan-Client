/**
 *
 * Header
 *
 */

import React from 'react';
import styled from 'styled-components';
import SearchField from 'containers/SearchField';
import { rem } from '../../utils/helper';

const Title = styled.h3`
  margin: 0;
  display: inline;
  flex-grow: 3;
  text-transform: uppercase;
`;
const Wrapper = styled.div`
  padding: ${rem(10)} ${rem(40)};
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: ${(props) => props.theme.colors.headerColor}
`;

class Header extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Title>Bauplan</Title>
      </Wrapper>
    );
  }
}

Header.propTypes = {};

export default Header;
