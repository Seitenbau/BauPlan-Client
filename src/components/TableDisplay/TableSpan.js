import styled from 'styled-components';
import { rem } from 'utils/helper';

const Span = styled.span`
  display: block;
  text-align: ${(props) => props.center ? 'center' : 'left'};
  font-size: ${(props) => rem(props.fontSize)};
  line-height: ${(props) => rem(props.fontSize)};
`;
// font-size: ${(props) => rem(16 * props.fontSize)};

export default Span;
