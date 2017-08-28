import styled from 'styled-components';
import { rem } from '../../utils/helper';

const label = styled('h4')`
  margin: 0;
  position: absolute;
  color: ${(props) => props.theme.plans.color};
  font-family: ${(props) => props.theme.plans.roomName.font};
  font-size: ${(props) => rem(props.theme.plans.roomName.size)};
  left: ${(props) => rem(props.left * props.scale)};
  top: ${(props) => rem(props.top * props.scale)};
  opacity: 0.2;
`;

export default label;
