import styled from 'styled-components';
import { rem } from '../../utils/helper';

const Bar = styled('div')`
  margin: 0;
  position: fixed;
  height: 100%;
  width: ${rem(30)};
  background-color: ${(props) => props.side ? props.theme.colors.secondary : props.theme.colors.primary};
  right: ${(props) => props.side ? 0 : 'initial'};
`;
export default Bar;
