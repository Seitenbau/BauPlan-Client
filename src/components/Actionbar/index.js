/**
*
* Actionbar
*
*/

import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import Icon from 'components/Icon';
import Bar from 'components/Bar';
import { rem } from '../../utils/helper';

const Iconwrapper = styled(Link)`
  width: 100%;
  display: block;
  padding: ${rem(5)};
  margin-bottom: ${rem(5)};
  color: ${(props) => props.theme.colors.primary};
  &:visited {
    color: ${(props) => props.theme.colors.primary};
  }
  &:active,
  &:focus,
  &:hover {
    outline: none;
    background-color: ${(props) => props.theme.colors.primary};
    svg  {
      fill: ${(props) => props.theme.colors.secondary};
    }
  }
`;

function Actionbar() {
  return (
    <Bar color="secondary">
      <Iconwrapper to="/login">
        <Icon name={'buddy'} width={20} height={20} />
      </Iconwrapper>
      <Iconwrapper to="/me">
        <Icon name={'gear'} width={20} height={20} />
      </Iconwrapper>
    </Bar>
  );
}

Actionbar.propTypes = {

};

export default Actionbar;
