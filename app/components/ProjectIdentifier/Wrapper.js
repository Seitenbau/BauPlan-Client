import styled from 'styled-components';
import { rem, shadeColor} from 'utils/helper';

const Wrapper = styled.div`
    display: flex;
    & :not(:first_child) {
      display: none;
    }
  }
`;

export default Wrapper;
