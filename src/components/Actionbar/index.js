/**
 *
 * Actionbar
 *
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from 'components/Icon';
import Bar from 'components/Bar';
import JumpView from '../../containers/JumpView';
import { rem } from '../../utils/helper';
import ExpandingBox from '../ExpandingBox';

const Iconwrapper = styled(Link)`
  width: 100%;
  display: block;
  padding: ${rem(5)};
  margin-bottom: ${rem(5)};
  color: ${props => props.theme.colors.primary};
  &:visited {
    color: ${props => props.theme.colors.primary};
  }
  &:active,
  &:focus,
  &:hover {
    outline: none;
    background-color: ${props => props.theme.colors.primary};
    svg {
      fill: ${props => props.theme.colors.secondary};
    }
  }
`;

const Hr = styled.hr`
  border: 0;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  margin: 6px 4px;
`;

let Wrapped = styled(Bar)`
  &:hover {
    width: ${rem(200)};
  }
`;

function Actionbar() {
  return (
    <Wrapped color="secondary">
      <Iconwrapper to="/login">
        <Icon name={'buddy'} width={20} height={20} />
      </Iconwrapper>
      <Iconwrapper to="/me">
        <Icon name={'gear'} width={20} height={20} />
      </Iconwrapper>
      <Hr></Hr>
      <JumpView />
    </Wrapped>
  );
}

export default Actionbar;
