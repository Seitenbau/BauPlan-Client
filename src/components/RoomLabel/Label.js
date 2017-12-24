import styled from 'styled-components';
import { rem } from '../../utils/helper';

// we use attrs for styles which often change
const label = styled('h4').attrs({
    style: (props) => ({
      left:  rem(props.left),
      top:  rem(props.top),
    }),
  })`
  margin: 0;
  position: absolute;
  color: ${(props) => props.theme.plans.color};
  font-family: ${(props) => props.theme.plans.roomName.font};
  font-size: ${(props) => rem(props.theme.plans.roomName.size)};
  opacity: 0.2;
`;

export default label;
