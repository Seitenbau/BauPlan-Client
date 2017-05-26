import styled from 'styled-components';
import { rem } from '../../utils/helper';

const wrapper = styled.div`
  margin: ${rem(100)} auto;
  position: absolute;
  left: 0;
  right: 0;
  width: ${(props) => props.theme.plans.width}vw;
`;

export default wrapper;
