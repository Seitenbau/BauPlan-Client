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
`;
const Wrapper = styled.div`
  padding: ${rem(10)} ${rem(40)};
  display: flex;
`;

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <SearchField />
        <Title>BAUPLAN</Title>
      </Wrapper>
    );
  }
}

Header.propTypes = {

};

export default Header;
