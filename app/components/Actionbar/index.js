/**
*
* Actionbar
*
*/

import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon';
import { rem } from '../../utils/helper';

const Bar = styled.div`
  position: fixed;
  width: ${rem(30)};
  height: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  right: 0;
`;

function Actionbar() {
  return (
    <Bar>
      <Icon src={'Buddy_Icon'} />
    </Bar>
  );
}

Actionbar.propTypes = {

};

export default Actionbar;
