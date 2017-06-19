import styled from 'styled-components';
import { rem } from '../../utils/helper';

const wrapper = styled.div`
  width: ${(props) => props.theme.plans.width}vw;
  background-color: ${(props) => props.theme.plans.backgroundColor};
  margin-bottom: ${(props) => props.theme.plans.marginBottom ? rem(props.theme.plans.marginBottom) : rem(40)};
  box-shadow: 0 ${rem(1)} ${rem(3)} rgba(0,0,0,0.12);
`;

export default wrapper;
