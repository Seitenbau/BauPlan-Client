import styled from 'styled-components';
import { rem } from 'utils/helper';

const Span = styled.span`
  display: block;
  text-align: ${(props) => props.center ? 'center' : 'left'};
  font-size: ${(props) => `${props.fontSize}vmin`} ;
  line-height: ${(props) => `${props.fontSize}vmin`} ;
`;

export default Span;
