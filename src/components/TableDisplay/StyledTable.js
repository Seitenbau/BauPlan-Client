import styled from 'styled-components';
import { rem, shadeColor } from 'utils/helper';

// we use attrs for attributes which are often changing
const Table = styled.div.attrs({
  style: props => ({
    height: rem(props.height),
    width: rem(props.width),
    left: rem(props.left),
    top: rem(props.top)
  })
})`
  background-color: #d3d3d3;
  position: absolute;
  box-sizing: border-box;
  border: 1px solid ${shadeColor('#d3d3d3', -0.8)};
  transform: rotate(${props => props.rotation}deg);
  :after {
    content: '';
    display: block;
    position: absolute;
    border: 1px dashed ${shadeColor('#d3d3d3', -0.8)};
    border-top: none;
    height: 100%;
    width: 100%;
    top: 100%;
  }
  :hover {
    .projectIdentifier-reactangle {
      display: block;
    }
  }
`;

export default Table;
