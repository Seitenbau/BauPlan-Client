import styled from 'styled-components';
import { rem, shadeColor } from 'utils/helper';

const Tabel = styled.div`
  background-color: #d3d3d3;
  position: absolute;
  box-sizing: border-box;
  height: ${(props) => rem(props.height)};
  width: ${(props) => rem(props.width)};
  border: 1px solid ${shadeColor('#d3d3d3', -0.8)};
  left: ${(props) => rem(props.left)};
  top: ${(props) => rem(props.top)};
  transform: rotate(${(props) => props.rotation}deg);
  :after {
    content: "";
    display: block;
    position: absolute;
    border: 1px dashed ${shadeColor('#d3d3d3', -0.8)};
    border-top: none;
    height: 100%;
    width: 100%;
    top: ${(props) => rem(props.height)};
  }
  :hover {
    .projectIdentifier-reactangle {
      display: block;
    }
  }
`;

export default Tabel;
