import styled from 'styled-components';

import NormalImg from 'components/Img';

const Img = styled(NormalImg)`
  width: ${(props) => props.theme.plans.image.width}vw;
  height: auto;
  margin: 0 auto;
`;

export default Img;
