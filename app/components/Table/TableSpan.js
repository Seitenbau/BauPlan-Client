import styled from 'styled-components';
import { rem } from 'utils/helper';

const Span = styled.span`
  display: block;
  text-align: ${props => props.center ? 'center' : 'left'}
`;

export default Span;
