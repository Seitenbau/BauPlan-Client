/**
*
* Header
*
*/

import React from 'react';
import styled from 'styled-components';
import { rem } from '../../utils/helper';
// import styled from 'styled-components';

const Title = styled.h3`
  margin: 0;
  display: inline;
  flex-grow: 3;
`;
const Wrapper = styled.div`
  padding: ${rem(10)} ${rem(40)};
  display: flex;
`;

const FormDiv = styled.div`
  flex-grow: 2;
`;

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <FormDiv>
          <input type="text" value="test" />
        </FormDiv>
        <Title>BAUPLAN</Title>
      </Wrapper>
    );
  }
}

Header.propTypes = {

};

export default Header;
