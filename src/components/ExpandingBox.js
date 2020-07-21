import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rem } from '../utils/helper';

const ExpandingBox = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  line-height: ${rem(40)};
  &,
  &:visited {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }
`;

export default function(props) {
  const [isHoverd, setIsHoverd] = useState(props.active);
  return <ExpandingBox>{isHoverd ? props.name : props.short}</ExpandingBox>;
}
