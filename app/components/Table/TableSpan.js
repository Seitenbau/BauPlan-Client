import styled from 'styled-components';

const Span = styled.span`
  display: block;
  text-align: ${(props) => props.center ? 'center' : 'left'}
`;

export default Span;
