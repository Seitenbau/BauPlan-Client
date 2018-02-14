import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  &:active,
  &:visited,
  & {
    color: ${props => props.theme.colors.black}
  }

  &:focus div {
    background-color: ${props => props.theme.colors.secondary};
  }
  &:hover div {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
  }
`;

export default StyledLink;
