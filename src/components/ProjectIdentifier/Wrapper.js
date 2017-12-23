import styled from 'styled-components';
import { rem } from 'utils/helper';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    height: ${rem(9)};
    & :not(:first-child) {
      display: none;
    }
  }
`;

export default Wrapper;
