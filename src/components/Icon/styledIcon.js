import styled from 'styled-components';
import { rem } from '../../utils/helper';

const wrapper = styled.img`
  width: ${props => rem(props.width)};
  height: ${props => rem(props.height)};
  transform: rotate(${props => props.rotate}deg);
`;

export default wrapper;
