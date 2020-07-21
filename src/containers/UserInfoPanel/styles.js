import styled from 'styled-components';
import { rem } from '../../utils/helper';

export const UserInfoContainer = styled.div`
  background-color: ${props => props.theme.colors.headerColor};
  display: block;
  position: fixed;
  width: 30%;
  right: ${rem(50)};
  bottom: ${rem(20)};
  box-shadow: 1px 1px 2px 1px ${props => props.theme.colors.boxShadow}6b;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${props => (props.space ? props.space : 'space-between')};
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
  ${props => (props.grow ? `flex-grow: ${props.grow}` : '')}
`;

export const StyledHeader = styled.h2`
  margin: 0 0 5px 0;
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  & li {
    margin-bottom: 10px;
  }
`;
export const StyledKey = styled.span`
  font-weight: 600;
`;
