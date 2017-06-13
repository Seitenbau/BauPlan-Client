import styled from 'styled-components';
import { rem, shadeColor} from 'utils/helper';

const Tabel = styled.div`
  width: ${rem(9)};
  height: ${rem(9)};
  border: 1px solid #000000;
  background-color: ${prop => prop.color}
  }
`;

export default Tabel;
