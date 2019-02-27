import styled from 'styled-components';
import { rem } from '../../utils/helper';

export const Container = styled.div`
  margin-left: ${props => (!props.active() ? '-20vw' : 0)};
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 20vw;
  position: fixed;
  z-index: 2;
  background-color: ${props => props.theme.colors.headerColor};
  color: ${props => props.theme.colors.primary};
  transition: all 0.375s ease-in;
  padding: ${rem(10)};
  overflow-y: ${props => (!props.active() ? 'hidden' : 'auto')};
`;
export const Button = styled.button`
  height: ${rem(35)};
  width: ${rem(35)};
  cursor: pointer;
  border: none;
  &:active,
  &:focus,
  &:hover {
    outline: none;
    background-color: ${props => props.theme.colors.primary};
    svg {
      fill: ${props => props.theme.colors.secondary};
    }
  }
`;

export const Form = styled.form`
  flex-grow: 2;
  z-index: 3;
`;
